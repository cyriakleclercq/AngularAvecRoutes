import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  @Input() tableau: Array<{ id: number, task: string }> = [];
  @Output() deleteTodo = new EventEmitter<number>();
  @Output() updtateTodo = new EventEmitter<Todo>();
  id: number;
  constructor() { }

  ngOnInit() {
  }

  delete = (id: number) => {
    this.deleteTodo.emit(id);
  }

  edit = (todo) => {
    this.id = todo.id
  }

  valider = (tag, todo) => {
    console.log(todo);

    this.updtateTodo.emit(todo);
    tag.value = ""
    this.id = null
  }
}
