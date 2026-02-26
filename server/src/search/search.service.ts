import { Injectable } from '@nestjs/common';
import {PrismaService} from "../prisma.service";

@Injectable()
export class SearchService {
    constructor(private prisma: PrismaService) {
    }

  async search(query: string) {
    if (!query || query.trim() === '') {
      return [];
    }

    return this.prisma.track.findMany({
      where: {
        OR: [
          { name: { contains: query, mode: 'insensitive' } },
          { artist: { name: { contains: query, mode: 'insensitive' } } },
          { album: { name: { contains: query, mode: 'insensitive' } } },
        ],
      },
      include: {
        artist: {
          select: { name: true },
        },
        album: {
          select: { name: true },
        },
      },
      take: 20,
    });
  }

}
