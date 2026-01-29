import { Module } from '@nestjs/common';
import { TrackService } from './track.service';
import { TrackController } from './track.controller';
import { PrismaService } from '../prisma.service'
import { FileService } from '../file/file.service';
import { ColorThemeService } from '../color-theme/color-theme.service';

@Module({
  imports: [],
  controllers: [TrackController],
  providers: [TrackService, PrismaService, FileService, ColorThemeService],
})
export class TrackModule {}
