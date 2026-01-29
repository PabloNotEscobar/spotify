import { Module } from '@nestjs/common';
import { ColorThemeService } from './color-theme.service';

@Module({
  controllers: [],
  providers: [ColorThemeService],
})
export class ColorThemeModule {}
