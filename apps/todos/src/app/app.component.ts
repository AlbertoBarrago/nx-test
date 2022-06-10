import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@albz-dev/api-interfaces';
import {Todo} from "../../../../libs/api-interfaces/src/lib/todos-interfaces";

@Component({
  selector: 'albz-dev-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  hello$ = this.http.get<Message>('/api/hello');
  todos: Todo[] = [];
  constructor(private http: HttpClient) {
    this.fetch();
  }

  ngOnInit(): void {

  }

  fetch() {
    this.http.get<Todo[]>('/api/todos').subscribe((t) => (this.todos = t));
  }

  addTodo() {
    this.http.post('/api/addTodo', {}).subscribe(() => {
      this.fetch();
    });
  }


}
