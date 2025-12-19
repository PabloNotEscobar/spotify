import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TrackModule } from './track/track.module';
import { FileModule } from './file/file.module';
import * as path from 'node:path';
import { ServeStaticModule } from '@nestjs/serve-static';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AlbumsModule } from './albums/albums.module';
import { ArtistsModule } from './artists/artists.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: path.join(__dirname, '..',  '..', '..', 'static'),
      serveRoot: '/static',
      serveStaticOptions: {
        index: false,
      }
    }),
    TrackModule,
    AlbumsModule,
    FileModule,
    ArtistsModule,
    AuthModule,
    UsersModule,

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
