import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  message: string = "message du service";

  constructor(private httpClient: HttpClient) { }

  getMessage = () => {
    return this.message;
  }
}
