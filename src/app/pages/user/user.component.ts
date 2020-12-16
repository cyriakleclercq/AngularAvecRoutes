import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user-service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  messageFromService: string;
  countFromService: number;

  constructor(private userservice: UserService) { }

  ngOnInit() {
    this.getMessageFromService();
    this.getCountByService();
  }

  getMessageFromService = () => {
    this.messageFromService = this.userservice.getMessage();

  }

  getCountByService = () => {
    this.userservice.getCount().subscribe(data => { this.countFromService = data; console.log(data) }
    );
  }

  incCount = () => {
    this.userservice.counter(+1);
  }

}
