import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-d3-button',
  templateUrl: './d3-button.component.html',
  styleUrls: ['./d3-button.component.css']
})
export class D3ButtonComponent implements OnInit {

  @Output() clicked=new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }
  click(){

    this.clicked.emit(true);
  }

}
