import { User } from '@prisma/client';

export class SignInResponseDto {
  accessToken: string
  refreshToken?: string
  user: {
    id: number
    email: string
  }
}