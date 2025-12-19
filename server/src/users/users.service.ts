import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../prisma.service';
import { User } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {
  }

  create(dto: CreateUserDto): Promise<User> {
    return this.prisma.user.create({
      data: {...dto}
    });
  }

  getUserById(id: number): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: {id}
    });
  }

  findOneByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: {email}
    });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
