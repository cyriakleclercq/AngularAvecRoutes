import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user-service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  countFromService: number;

  constructor(private userService: UserService) { }
  ngOnInit() {
    this.getCountByService();
  }

  getCountByService = () => {
    this.userService.getCount().subscribe(data => { this.countFromService = data; console.log(data) }
    );
  }

  decCount = () => {
    this.userService.counter(-1);
  }

}
