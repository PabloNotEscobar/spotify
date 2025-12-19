import { IsString } from 'class-validator';

export class CreateArtistDto {
  @IsString()
  name: string

}
