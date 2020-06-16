import { Component, OnInit, Input } from '@angular/core';
import { Message } from 'src/app/models/message.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';



@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {




  @Input() tekst:Message;
  constructor() { }

  ngOnInit(): void {
  }

}
