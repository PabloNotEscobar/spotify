import { PartialType } from '@nestjs/mapped-types';
import { CreateFavoriteTrackDto } from './create-favorite-track.dto';

export class UpdateFavoriteTrackDto extends PartialType(CreateFavoriteTrackDto) {}
