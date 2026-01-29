import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthGuard } from '../auth/auth.guard';
import { AuthService } from '../auth/auth.service';
import { User } from '@prisma/client';
import { RolesGuard } from '../roles.guard';
import { Roles } from '../roles.decorator';
import { UserRoles } from '../types';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(AuthGuard, RolesGuard)
  @Roles(UserRoles.admin)
  @Post('create')
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }


  @Get('me')
  @UseGuards(AuthGuard, RolesGuard)
  @Roles(UserRoles.admin)
  findMe(@Request() req, dto: CreateUserDto): Promise<User | null> {
    return this.usersService.getUserById(req.user?.id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.getUserById(+id);
  }


  @Delete(':id')
  logout(@Param('id') id: string) {
    return this.usersService.logout(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
