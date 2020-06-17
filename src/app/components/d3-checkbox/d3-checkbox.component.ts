import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-d3-checkbox',
  templateUrl: './d3-checkbox.component.html',
  styleUrls: ['./d3-checkbox.component.css']
})
export class D3CheckboxComponent implements OnInit {

  isChecked=false;
  @Output() checked=new EventEmitter<boolean>();
  constructor() { }

  promeni(){
    this.isChecked=!this.isChecked;
    this.checked.emit(this.isChecked);
  }
  ngOnInit(): void {
    this.checked.emit(this.isChecked);
  }

}
