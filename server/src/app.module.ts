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
import { FavoriteTracksModule } from './favorite-tracks/favorite-tracks.module';
import { ColorThemeService } from './color-theme/color-theme.service';
import { ColorThemeModule } from './color-theme/color-theme.module';
import { SearchModule } from './search/search.module';

@Module({
  imports: [
    // ServeStaticModule.forRoot({
    //   rootPath: path.join(__dirname, '..',  '..', '..', 'static'),
    //   serveRoot: '/static',
    //   serveStaticOptions: {
    //     index: false,
    //   }
    // }),
    TrackModule,
    AlbumsModule,
    FileModule,
    ArtistsModule,
    AuthModule,
    UsersModule,
    FavoriteTracksModule,
    ColorThemeModule,
    SearchModule,
  ],
  controllers: [AppController],
  providers: [AppService, ColorThemeService],
})
export class AppModule {}
