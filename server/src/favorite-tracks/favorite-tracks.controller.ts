import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { FavoriteTracksService } from './favorite-tracks.service';
import { CreateFavoriteTrackDto } from './dto/create-favorite-track.dto';
import { UpdateFavoriteTrackDto } from './dto/update-favorite-track.dto';
import { AuthGuard } from '../auth/auth.guard';
import type { Request } from 'express';

@Controller('favorite-tracks')
export class FavoriteTracksController {
  constructor(private readonly favoriteTracksService: FavoriteTracksService) {}

  @Post('add')
  @UseGuards(AuthGuard)
  create(@Body() dto: CreateFavoriteTrackDto, @Req() req: any) {
    const userId = req.user.id;

    return this.favoriteTracksService.create(dto, +userId);
  }


  @Delete('delete/:trackId')
  @UseGuards(AuthGuard)
  remove(@Param('trackId') trackId: string, @Req() req: any) {
    const userId = req.user.id;

    return this.favoriteTracksService.remove(+trackId, +userId);
  }


  @Get()
  @UseGuards(AuthGuard)
  getAll(@Req() req: any) {
    const userId = req.user.id;

    return this.favoriteTracksService.getAll(+userId);
  }
}
