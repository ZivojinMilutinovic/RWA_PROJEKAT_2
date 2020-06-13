import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { MyUser } from 'src/app/models/user.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user:MyUser;
  constructor(public auth:AuthService) { }


  ngOnInit(): void {
    this.auth.user$.subscribe(val=>this.user=val);
  }

}
