import { Component, OnInit, OnDestroy } from '@angular/core';
import {NgModel,NgForm} from '@angular/forms'
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { MyUser } from 'src/app/models/user.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as Actions from '../../actions/login.actions'

interface AppState{
  user:MyUser;
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit,OnDestroy {

  user:Observable<MyUser>;
  opcije:string[];
  constructor(private auth:AuthService,private router:Router,private store:Store<AppState>) {  document.body.classList.add("pozadina-register")
             this.user=this.store.select('user');}
  ngOnDestroy(): void {
    document.body.className='';
  }

  ngOnInit(): void {
  this.opcije=["I godina","II godina","III godina","IV godina","Master"];

  }

  async onSubmit(form:NgForm){
     let data=form.value;
     let noviUser:MyUser={
       uid:null,
       email:data.email,
       ime:data.ime,
       prezime:data.prezime,
       password:data.password,
       brojIndeksa:data.indeks,
       godina:data.godina,
       pol:data.pol,
       kime:data.kime

     }

     //this.store.dispatch(Actions.register_user({user:noviUser}));
    await this.auth.createUserEmailAndPassword(noviUser);

    this.router.navigate(['/']);
  }

}
