import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { RegisterService } from './register.service';

@Controller('register')
export class RegisterController {

  constructor(private readonly userService: RegisterService) {}
  
  @Get('/test')
  test(): string {
    return 'test'
  }

  @Get()
  getUser(): any {
    return this.userService.getAll()
  }

  @Get('/:id')
  findOne(@Param('id') param: string) {
    return this.userService.getById(param)
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() user: CreateUserDto) {
    return this.userService.create(user)
  }
}
