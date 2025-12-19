import { Module } from '@nestjs/common';
import { ArtistsService } from './artists.service';
import { ArtistsController } from './artists.controller';
import { PrismaService } from '../prisma.service';
import { FileService } from '../file/file.service';

@Module({
  controllers: [ArtistsController],
  providers: [ArtistsService, PrismaService, FileService],
})
export class ArtistsModule {}
