import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post, Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import type {Response, Request} from 'express'
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/sign-in.dto';
import { SignUpDto } from './dto/sign-up.dto';
import { SignInResponseDto } from './dto/sign-in-response.dto';
import { RefreshToken } from '@prisma/client';
import { RefreshTokenDto } from './dto/refresh-token.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('sign-in')
  async signIn(
    @Body() signInDto: SignInDto,
    @Res({ passthrough: true }) res: Response,
  ): Promise<SignInResponseDto> {
    const tokens = await this.authService.signIn(signInDto);

    res.cookie('refreshToken', tokens.refreshToken, {
      httpOnly: true,
      secure: false,
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return {
      accessToken: tokens.accessToken,
      user: tokens.user
    };
  }

  @HttpCode(HttpStatus.OK)
  @Post('sign-up')
  signUp(@Body() signUpDto: SignUpDto): Promise<void> {
    return this.authService.signUp(signUpDto);
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Req() req) {
    return req.user;
  }

  @Post('refresh-token')
  async refreshToken(@Body() dto: RefreshTokenDto, @Req() req: Request, @Res({passthrough: true}) res: Response ): Promise<SignInResponseDto> {

    console.log(req.cookies)

    const refreshToken = req.cookies['refreshToken'];
    console.log(refreshToken)

    const tokens = await this.authService.refreshToken(refreshToken)

    res.cookie('refreshToken', tokens.refreshToken, {
      httpOnly: true,
      secure: false,
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return {
      accessToken: tokens.accessToken,
      user: tokens.user
    };
  }
}
