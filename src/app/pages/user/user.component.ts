import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user-service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  messageFromService: string;
  constructor(private userservice: UserService) { }

  ngOnInit() {
    this.getMessageFromService();
  }

  getMessageFromService = () => {
    this.messageFromService = this.userservice.getMessage();

  }

}
