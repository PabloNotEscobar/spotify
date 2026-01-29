import { BadRequestException, Injectable } from '@nestjs/common';
import * as path from 'node:path';
import * as uuid from 'uuid'
import * as fs from 'node:fs';


export enum FileType {
  ARTISTIMAGE = 'artist/image',
  TRACKIMAGE = 'track/image',
  ALBUMIMAGE = 'album/image',
  AUDIO = 'track/audio'
}


@Injectable()
export class FileService {

  private readonly staticRoot = path.resolve(process.cwd(), 'static');

  createFile (type: FileType, file): string {
    try {
      const fileExtension = file.originalname.split('.').pop()
      const fileName = uuid.v4() + '.' + fileExtension
      const filePath = path.resolve(this.staticRoot, type);
      if (!fs.existsSync(filePath)) {
        fs.mkdirSync(filePath, {recursive: true})
      }
      fs.writeFileSync(path.resolve(filePath, fileName), file.buffer)
      return `/static/${type}/${fileName}`
    } catch (e) {
      throw new BadRequestException(`Failed to upload ${type}: ${e.message}`);    }
  }
}