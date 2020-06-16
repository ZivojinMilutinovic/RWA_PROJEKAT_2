import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { MyUser } from 'src/app/models/user.model';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user:MyUser;
  constructor(public auth:AuthService,public navService:NavbarService) { }

  isAdmin():boolean{
    return this.user.role=='admin';
  }

  ngOnInit(): void {
    this.auth.user$.subscribe(val=>this.user=val);
  }
    vratikIme():string{

      if(this.user==null)
       return '';
       else return this.user.kime;
    }
}
