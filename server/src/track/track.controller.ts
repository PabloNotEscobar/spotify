import {
  Body,
  Controller, DefaultValuePipe,
  Get,
  Param, ParseIntPipe,
  Patch,
  Post, Query, UploadedFiles, UseInterceptors,
} from '@nestjs/common';
import { TrackService } from './track.service'
import { CreateTrackDto } from './dto/create-track.dto'
import { UpdateTrackDto } from './dto/update-track.dto'
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { updateFileWithText } from 'ts-loader/dist/servicesHost';

@Controller('/tracks')
export class TrackController {
  constructor(private readonly trackService: TrackService) {}


  @Post()
  @UseInterceptors(FileFieldsInterceptor([
    { name: 'image', maxCount: 1 },
    { name: 'audio', maxCount: 1 },
  ]))
  create(@UploadedFiles() files: { image: Express.Multer.File[], audio: Express.Multer.File[] }, @Body() createTrackDto: CreateTrackDto) {
    const {image, audio} = files
    return this.trackService.create(createTrackDto, image[0], audio[0])
  }


  @Get()
  async findAll(
    @Query('skip', new DefaultValuePipe(0), ParseIntPipe) skip: number,
    @Query('take', new DefaultValuePipe(10), ParseIntPipe) take: number,
  ) {
    return this.trackService.findAll(+skip, +take)
  }


  @Get('search')
  search(@Query('query') query: string) {
    return this.trackService.search(query)
  }


  @Get(':id')
  findOne(@Param('id') id: string) {
    console.log(id)
    return this.trackService.findOne(+id)
  }


  @Patch(':id')
  listen(@Param('id') id: string) {
    return this.trackService.listen(+id);
  }
}
