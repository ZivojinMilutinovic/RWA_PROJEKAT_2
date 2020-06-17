import { Component, OnInit, OnDestroy } from '@angular/core';
import {NgModel,NgForm} from '@angular/forms'
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { MyUser } from 'src/app/models/user.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as Actions from '../../actions/login.actions'
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize, tap } from 'rxjs/operators';

interface AppState{
  user:MyUser;
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit,OnDestroy {

  ref=null;
  task;
  myFilePath='';
  user:Observable<MyUser>;
  opcije:string[];
  constructor(private auth:AuthService,private router:Router,private store:Store<AppState>,private afStorage:AngularFireStorage)
  {  document.body.classList.add("pozadina-register")
             this.user=this.store.select('user');}
  ngOnDestroy(): void {
    document.body.className='';
  }

  ngOnInit(): void {
  this.opcije=["I godina","II godina","III godina","IV godina","Master"];

  }

  onFileSelected(event:Event){
      let fileName=(document.getElementById("inputFile") as HTMLInputElement).files[0].name;
      document.getElementById("fileLabel").innerText=fileName;
     this.ref=(event.target as HTMLInputElement).files[0];
  // create a reference to the storage bucket location

  }

  async onSubmit(form:NgForm){
    //ovde moramo da resimo sa slikom
     let data=form.value;

     if(this.ref!=null){
      let downloadUrl;
      const randomId = Math.random().toString(36).substring(2);
      const fileRef=this.afStorage.ref(`/UsersPictures/${randomId}`);

      await this.afStorage.upload(`/UsersPictures/${randomId}`, this.ref);
      await  fileRef.getDownloadURL().toPromise().then(val=>this.myFilePath=val)

     }
     let noviUser:MyUser={
      uid:null,
      email:data.email,
      ime:data.ime,
      prezime:data.prezime,
      password:data.password,
      brojIndeksa:data.indeks,
      godina:data.godina,
      pol:data.pol,
      kime:data.kime,
      role:'',
      filePath:this.myFilePath
    }






     //this.store.dispatch(Actions.register_user({user:noviUser}));
    await this.auth.createUserEmailAndPassword(noviUser);

    this.router.navigate(['/']);
  }

}
