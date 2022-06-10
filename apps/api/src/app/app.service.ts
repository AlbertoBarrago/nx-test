import { Injectable } from '@nestjs/common';
import { Message } from '@albz-dev/api-interfaces';
import {Todo} from "../../../../libs/api-interfaces/src/lib/todos-interfaces";


@Injectable()
export class AppService {
  todos: Todo[] = [{ title: 'Todo 1' }, { title: 'Todo 2' }];
  getMessage(): Message {
    return { message: 'Welcome to api!' };
  }

  getTodo(): Todo[] {
    return this.todos;
  }

  addTodo() {
    this.todos.push({
      title: `New todo ${Math.floor(Math.random() * 1000)}`,
    });
  }
}
