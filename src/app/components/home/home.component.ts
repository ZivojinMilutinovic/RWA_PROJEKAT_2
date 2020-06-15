import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy{

  user;
  constructor(public auth:AuthService) {document.body.classList.add("pozadina-home") }

  ngOnInit(): void {
    this.auth.user$.subscribe(val=>this.user=val)
  }
  ngOnDestroy(){
    document.body.className='';
  }

}
