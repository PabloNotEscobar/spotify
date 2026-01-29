import { Injectable } from '@nestjs/common';
import {PrismaService} from "../prisma.service";

@Injectable()
export class SearchService {
    constructor(private prisma: PrismaService) {
    }

    // src/tracks/tracks.service.ts
    async search(query: string) {
        console.log(query)
        if (!query || query.trim() === '') {
            return [];
        }

        const searchTerm = `%${query}%`;



        return this.prisma.$queryRaw`
          SELECT DISTINCT t.*, 
            CASE
              WHEN t.name ILIKE ${searchTerm} THEN 1
              WHEN a.name ILIKE ${searchTerm} THEN 2
              ELSE 3
            END as sort_priority
          FROM "Track" t
          LEFT JOIN "Artist" a ON t."artistId" = a.id
          LEFT JOIN "Album" al ON t."albumId" = a.id
          WHERE
            t.name ILIKE ${searchTerm}
            OR a.name ILIKE ${searchTerm}
            OR al.name ILIKE ${searchTerm}
          ORDER BY sort_priority
          LIMIT 20
        `;

    }
}
