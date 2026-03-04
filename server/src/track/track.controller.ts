import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
  Delete
} from '@nestjs/common';
import { TrackService } from './track.service';
import { CreateTrackDto } from './dto/create-track.dto';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { AuthGuard } from '../auth/auth.guard';
import { RolesGuard } from '../roles.guard';
import { Roles } from '../roles.decorator';
import { UserRoles } from '../types';

@Controller('tracks')
export class TrackController {
  constructor(private readonly trackService: TrackService) {}

  @Post('create')
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'image', maxCount: 1 },
      { name: 'audio', maxCount: 1 },
    ]),
  )
  @UseGuards(AuthGuard, RolesGuard)
  @Roles(UserRoles.admin)
  create(
    @UploadedFiles()
    files: { image: Express.Multer.File[]; audio: Express.Multer.File[] },
    @Body() createTrackDto: CreateTrackDto,
  ) {
    const { image, audio } = files;
    return this.trackService.create(createTrackDto, image[0], audio[0]);
  }

  @Get()
  async findAll(
    @Query('skip', new DefaultValuePipe(0), ParseIntPipe) skip: number,
    @Query('take', new DefaultValuePipe(10), ParseIntPipe) take: number,
  ) {
    return this.trackService.findAll(+skip, +take);
  }

  @Get('search')
  search(@Query('query') query: string) {
    return this.trackService.search(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.trackService.findOne(+id);
  }

  @Patch(':id')
  listen(@Param('id') id: string) {
    return this.trackService.listen(+id);
  }

  @UseGuards(AuthGuard, RolesGuard)
  @Roles(UserRoles.admin)
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.trackService.delete(+id);
  }
}
