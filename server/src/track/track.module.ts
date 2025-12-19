import { Module } from '@nestjs/common';
import { TrackService } from './track.service';
import { TrackController } from './track.controller';
import { PrismaService } from '../prisma.service'
import { FileService } from '../file/file.service';

@Module({
  imports: [],
  controllers: [TrackController],
  providers: [TrackService, PrismaService, FileService],
})
export class TrackModule {}
