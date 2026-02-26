import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { SignInDto } from './dto/sign-in.dto';
import { SignInResponseDto } from './dto/sign-in-response.dto';
import * as bcrypt from 'bcrypt';
import { SignUpDto } from './dto/sign-up.dto';
import { randomBytes } from 'node:crypto';
import { PrismaService } from '../prisma.service';
import { Prisma, User } from '@prisma/client';
import { GetTokensDto } from './dto/get-tokens.dto';
import { RefreshTokenResponseDto } from './dto/refresh-token-response.dto';

type UserWithFavorites = Prisma.UserGetPayload<{
  include: { favoriteTracks: true }
}>;


@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private prisma: PrismaService,
  ) {}

  async signIn(dto: SignInDto): Promise<SignInResponseDto> {
    const user = await this.usersService.findOneByEmail(dto.email);
    if (!user) {
      throw new UnauthorizedException();
    }

    const isPasswordValid = await bcrypt.compare(dto.password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid password');
    }

    const tokens = await this.getTokens(user);

    return {
      ...tokens,
      user: {
        id: user.id,
        email: user.email,
        role: user.role,
        favoriteTracks: user.favoriteTracks.map((t) => t.trackId),
      },
    };
  }

  async signUp(dto: SignUpDto): Promise<void> {
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(dto.email);
    if (!isEmailValid) {
      throw new BadRequestException('Invalid email');
    }
    const user = await this.usersService.findOneByEmail(dto.email);

    if (user) {
      throw new BadRequestException('User already exists');
    }

    const hashPassword = await bcrypt.hash(dto.password, 7);

    const userCreate = await this.usersService.create({
      name: dto.name,
      email: dto.email,
      password: hashPassword,
      role: 'user',
    });
  }

  private generateSecureToken(): string {
    return randomBytes(48).toString('base64url');
  }

  async getTokens(user: User): Promise<GetTokensDto> {
    const payload = {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    };

    const expires = new Date();
    expires.setDate(expires.getDate() + 7);

    const refreshToken = await this.prisma.refreshToken.create({
      data: {
        token: this.generateSecureToken(),
        expires: expires,
        userId: user.id,
      },
    });
    return {
      accessToken: await this.jwtService.signAsync(payload),
      refreshToken: refreshToken.token,
    };
  }

  async refreshToken(token: string): Promise<RefreshTokenResponseDto> {
    console.log(4, token)
    if (!token) {
      throw new UnauthorizedException('Refresh token missing');
    }
    const now = new Date();
    const refreshToken = await this.prisma.refreshToken.findFirst({
      where: {
        token,
        expires: {
          gt: now,
        },
      },
      include: {
        user: {
          include: {
            favoriteTracks: true
          }
        }
      },
    });
    console.log(5, refreshToken)

    if (!refreshToken) {
      throw new UnauthorizedException('Invalid refresh token');
    }
    await this.prisma.refreshToken.delete({
      where: {
        token,
      },
    });

    const tokens = await this.getTokens(refreshToken.user);
    console.log(6, tokens)

    const { password, ...userWithoutPassword } = refreshToken.user;

    return {
      ...tokens,
      user: {
        id: refreshToken.user.id,
        email: refreshToken.user.email,
        role: refreshToken.user.role,
        favoriteTracks: refreshToken.user.favoriteTracks.map((t) => t.trackId)
      },
    };
  }

  async logout(token: string) {
    if (!token) {
      throw new UnauthorizedException('User is already unauthorized');
    }
    await this.prisma.refreshToken.deleteMany({
      where: {
        token,
      },
    });
  }
}
