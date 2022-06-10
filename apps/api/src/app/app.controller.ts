import {Controller, Get, Post} from '@nestjs/common';

import { Message } from '@albz-dev/api-interfaces';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getMessage(): Message {
    return this.appService.getMessage();
  }

  @Get('todos')
  getData() {
    return this.appService.getTodo();
  }

  @Post('addTodo')
  addTodo() {
    return this.appService.addTodo();
  }
}
