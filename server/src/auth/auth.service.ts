import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { SignInDto } from './dto/sign-in.dto';
import { SignInResponseDto } from './dto/sign-in-response.dto';
import * as bcrypt from 'bcrypt'
import { SignUpDto } from './dto/sign-up.dto';
import { User } from '@prisma/client';
import {randomBytes} from 'node:crypto'
import { PrismaService } from '../prisma.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private prisma: PrismaService,
  ) {}

  async signIn(dto: SignInDto): Promise<SignInResponseDto> {
    const user = await this.usersService.findOneByEmail(dto.email);
    console.log(dto.email)
    console.log(user)
    if (!user) {
      throw new UnauthorizedException();
    }

    const isPasswordValid = await bcrypt.compare(dto.password, user.password);
    console.log(isPasswordValid)
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid password');
    }

    return this.getTokens(user);
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
      role: dto.role,
    });

  }

  private generateSecureToken(): string {
    return randomBytes(48).toString('base64url');
  }

  async getTokens(user: User): Promise<SignInResponseDto> {
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
        userId: user.id
      },
    });
    console.log('здесь скип')
    return {
      accessToken: await this.jwtService.signAsync(payload),
      refreshToken: refreshToken.token,
      user: {
        id: user.id,
        email: user.email
      }
    };
  }

  async refreshToken(token: string): Promise<SignInResponseDto> {
    console.log('до проверки токена')
    if (!token) {
      throw new UnauthorizedException('Refresh token missing');
    }
    console.log('после токена')
    const now = new Date();
    const refreshToken = await this.prisma.refreshToken.findFirst({
      where: {
        token,
        expires: {
          gt: now,
        },
      },
      include: {
        user: true,
      },
    });

    if (!refreshToken) {
      throw new UnauthorizedException('Invalid refresh token');
    }
    console.log('привет')
    await this.prisma.refreshToken.delete(
      {
        where: {
          token
        }
      }
    )
    console.log('я тут')
    return this.getTokens(refreshToken.user);
  }
}
