import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFiles } from '@nestjs/common';
import { ArtistsService } from './artists.service';
import { CreateArtistDto } from './dto/create-artist.dto';
import { UpdateArtistDto } from './dto/update-artist.dto';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { CreateTrackDto } from '../track/dto/create-track.dto';

@Controller('artists')
export class ArtistsController {
  constructor(private readonly artistsService: ArtistsService) {}

  @Post()
  @UseInterceptors(FileFieldsInterceptor([
    { name: 'image', maxCount: 1 }
  ]))
  create(@UploadedFiles() files: { image: Express.Multer.File[] }, @Body() createArtistDto: CreateArtistDto) {
    const {image} = files
    return this.artistsService.create(createArtistDto, image[0]);
  }

  @Get()
  findAll() {
    return this.artistsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.artistsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateArtistDto: UpdateArtistDto) {
    return this.artistsService.update(+id, updateArtistDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.artistsService.remove(+id);
  }
}
