import { IsNumber, IsString } from 'class-validator';
import { Track } from '@prisma/client';

export class CreateAlbumDto {
  @IsString()
  name: string

  @IsNumber()
  artistId: number

  @IsString()
  image: string

}
