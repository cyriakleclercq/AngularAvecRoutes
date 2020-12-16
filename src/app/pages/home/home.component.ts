import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tab: Array<{ message: string, id: number }> = [];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  push = (value) => {
    if (value != "") {
      this.tab.push({ message: value, id: Date.now() });

    }
  }

  clear = (nom) => {
    nom.value = ""
  }

  getOutput = (message: string) => {
    console.log(message);

  }

  getNewTab(newtab) {
    this.tab = newtab
  }

}
