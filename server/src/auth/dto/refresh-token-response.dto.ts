export class RefreshTokenResponseDto {
  accessToken: string
  refreshToken?: string
  user: {
    id: number
    email: string
    role: string,
    favoriteTracks: number[]
  }
}