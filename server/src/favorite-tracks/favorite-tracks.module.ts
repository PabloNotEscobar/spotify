import { Module } from '@nestjs/common';
import { FavoriteTracksService } from './favorite-tracks.service';
import { FavoriteTracksController } from './favorite-tracks.controller';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [FavoriteTracksController],
  providers: [FavoriteTracksService, PrismaService],
})
export class FavoriteTracksModule {}
