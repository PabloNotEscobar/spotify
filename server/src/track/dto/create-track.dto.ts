import { IsNumber, IsString } from 'class-validator';
import { Artist } from '@prisma/client';

export class CreateTrackDto {
  @IsString()
  name: string;

  @IsString()
  artistId: string
}