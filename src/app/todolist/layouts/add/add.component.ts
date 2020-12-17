import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  @Output() newTodo = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  add = (todo: any) => {
    this.newTodo.emit(todo.value);
    todo.value = "";
  }
}
