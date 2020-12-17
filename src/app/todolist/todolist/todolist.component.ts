import { Component, OnInit } from '@angular/core';
import { TodolistService } from '../services/todolist.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  todolist: Array<{ id: number, task: string }> = [];
  constructor(private todoservice: TodolistService) { }

  ngOnInit() {
    this.getTodoList();
  }

  getTodoList = () => {
    this.todoservice.getTodo().subscribe(data => {
      this.todolist = data; console.log(data);
    });
  }

  add = (todo: string) => {
    console.log(todo);
    this.todoservice.create({ id: Date.now(), task: todo }).subscribe(data => { console.log(data); this.getTodoList() });

  }

  delete = (id) => {
    console.log(id);
    this.todoservice.delete(id).subscribe(data => console.log(data));
    this.getTodoList();
  }

  update = (todo) => {
    console.log(todo);
    this.todoservice.update(todo).subscribe(data => console.log(data));
    this.getTodoList();
  }
}
