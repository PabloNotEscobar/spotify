import { Injectable } from '@nestjs/common';
import { CreateFavoriteTrackDto } from './dto/create-favorite-track.dto';
import { UpdateFavoriteTrackDto } from './dto/update-favorite-track.dto';
import { PrismaService } from '../prisma.service';

@Injectable()
export class FavoriteTracksService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateFavoriteTrackDto, userId: number) {
    await this.prisma.favoriteTrackItem.create({
      data: {
        ...dto,
        userId
      },
    });
  }

  async remove(trackId: number, userId: number) {
    await this.prisma.favoriteTrackItem.delete({
      where: {
        userId_trackId: {
          userId,
          trackId,
        },
      },
    });
  }

  async getAll(userId: number) {
    const tracks = await this.prisma.favoriteTrackItem.findMany({
      where: {
        userId
      },
      include: {
        track: {
          include: {
            artist: {
              select: {
                name: true
              }
            },
            album: {
              select: {
                name: true
              }
            }
          }
        },
      }

    })
    return tracks
  }
}
