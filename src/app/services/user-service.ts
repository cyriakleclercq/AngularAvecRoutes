import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  message: string = "message du service";
  count2: number = 0
  count = new BehaviorSubject(this.count2)

  constructor(private httpClient: HttpClient) { }

  getMessage = () => {
    return this.message;
  }

  getCount = () => {
    return this.count;
  }

  counter = (param: number) => {
    this.count2 += param
    this.count.next(this.count2)
  }
}
