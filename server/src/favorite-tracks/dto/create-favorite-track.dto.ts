import { IsNumber } from 'class-validator';

export class CreateFavoriteTrackDto {
  @IsNumber()
  trackId: number
}
