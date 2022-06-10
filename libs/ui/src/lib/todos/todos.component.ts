import {Component, Input, OnInit} from '@angular/core';
import {Todo} from "../../../../api-interfaces/src/lib/todos-interfaces";

@Component({
  selector: 'albz-dev-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent {
  @Input() todos: Todo[] = [];

}
