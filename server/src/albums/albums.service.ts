import { Injectable } from '@nestjs/common';
import { CreateAlbumDto } from './dto/create-album.dto';
import { UpdateAlbumDto } from './dto/update-album.dto';
import { Album } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class AlbumsService {
  constructor(private prisma: PrismaService) {
  }

  async create(dto: CreateAlbumDto): Promise<Album> {
    return this.prisma.album.create({
      data: {
        ...dto
      },
    });
  }

  findAll() {
    return this.prisma.album.findMany();
  }

  findOne(id: number) {
    return this.prisma.album.findUnique({where: {id: id}});
  }

  update(id: number, updateAlbumDto: UpdateAlbumDto) {
    return `This action updates a #${id} album`;
  }

  remove(id: number) {
    return `This action removes a #${id} album`;
  }
}
