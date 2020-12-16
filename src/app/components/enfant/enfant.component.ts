import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-enfant',
  templateUrl: './enfant.component.html',
  styleUrls: ['./enfant.component.css']
})
export class EnfantComponent implements OnInit {

  @Input() tableau: Array<{ message: string, id: number }>
  @Output() deenfant = new EventEmitter<string>();
  @Output() supp = new EventEmitter<Array<object>>();
  constructor() { }

  ngOnInit() {
    this.sendParent();
  }

  suppr = (value: any) => {
    this.tableau = this.tableau.filter((t) => t.id != value.id)

    this.supp.emit(this.tableau);
  }

  sendParent = () => {
    this.deenfant.emit("message provenant de l'enfant");
  }

}
