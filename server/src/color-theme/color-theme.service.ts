import { Injectable } from '@nestjs/common';
const ColorThief = require('colorthief');
import * as path from 'node:path';

@Injectable()
export class ColorThemeService {
  async getDominantColor(url: string): Promise<string> {
    const relativeUrl = url.startsWith('/') ? url.slice(1) : url;
    const fullPath = path.resolve(process.cwd(), relativeUrl);

    const color = await ColorThief.getColor(fullPath);

    const rgbToHex = (r: number, g: number, b: number) => '#' + [r, g, b]
      .map(x => x.toString(16).padStart(2, '0'))
      .join('');

    return rgbToHex(color[0], color[1], color[2]);
  }
}
