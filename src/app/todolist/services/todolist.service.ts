import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodolistService {

  constructor(private http: HttpClient) { }

  getTodo(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${environment.uri}`)
  }

  create(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(`${environment.uri}`, todo)
  }

  update(todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(`${environment.uri}/${todo.id}`, todo)
  }

  delete(id: number) {
    return this.http.delete(`${environment.uri}/${id}`)
  }
}
