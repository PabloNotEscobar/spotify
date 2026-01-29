import { Injectable } from '@nestjs/common';
import { UpdateTrackDto } from './dto/update-track.dto';
import { CreateTrackDto } from './dto/create-track.dto';
import { PrismaService } from '../prisma.service';
import { FileService, FileType } from '../file/file.service';
import { ColorThemeService } from '../color-theme/color-theme.service';
import { Track } from '@prisma/client';

@Injectable()
export class TrackService {
  constructor(
    private prisma: PrismaService,
    private fileService: FileService,
    private colorService: ColorThemeService
  ) {}

  async create(dto: CreateTrackDto, image, audio): Promise<Track> {

    const audioPath = this.fileService.createFile(FileType.AUDIO, audio);
    const imagePath = this.fileService.createFile(FileType.TRACKIMAGE, image);
    console.log(imagePath)
    const color= await this.colorService.getDominantColor(imagePath)


    return this.prisma.track.create({
      data: {
        ...dto,
        primaryColor: color,
        artistId: Number(dto.artistId),
        image: imagePath,
        audio: audioPath,

      }
    });
  }

  async findAll(skip = 0, take = 10): Promise<Track[]> {
    return this.prisma.track.findMany({
      skip,
      take,
      include: {
        artist: true
      }
    });
  }

  async findOne(id: number): Promise<Track| null> {

    return this.prisma.track.findUnique({
      where: { id: Number(id) },
      include: {
        artist: true
      }
    });
  }

  async search(query: string): Promise<Track[]> {
    return this.prisma.track.findMany({ where: { name: { contains: query } } });
  }

  async listen(id: number): Promise<Track> {
    return this.prisma.track.update({
      where: { id },
      data: { listens: { increment: 1 } },
    });
  }
}
