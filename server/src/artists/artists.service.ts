import { Injectable } from '@nestjs/common';
import { CreateArtistDto } from './dto/create-artist.dto';
import { UpdateArtistDto } from './dto/update-artist.dto';
import { PrismaService } from '../prisma.service';
import { FileService, FileType } from '../file/file.service';

@Injectable()
export class ArtistsService {
  constructor(
    private prisma: PrismaService,
    private fs: FileService,
  ) {}

  create(dto: CreateArtistDto, image) {
    const imagePath = this.fs.createFile(FileType.ARTISTIMAGE, image);

    return this.prisma.artist.create({
      data: {
        ...dto,
        image: imagePath
      },
    });
  }

  findAll() {
    return this.prisma.artist.findMany();
  }

  findOne(id: number) {
    return this.prisma.artist.findUnique({
      where: { id },
    });
  }

  update(id: number, updateArtistDto: UpdateArtistDto) {
    return `This action updates a #${id} artist`;
  }

  remove(id: number) {
    return `This action removes a #${id} artist`;
  }
}
