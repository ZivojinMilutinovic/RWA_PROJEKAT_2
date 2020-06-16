import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import {switchMap} from 'rxjs/operators'
import { User } from 'firebase';
import { auth } from 'firebase';
import { Router } from '@angular/router';
import { MyUser } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$:Observable<MyUser | null>;
  constructor(private afAuth:AngularFireAuth
    ,private afs:AngularFirestore,private router:Router) {
      //posto je observer ovde dolazi tok podataka i mi uzimamo jedan
      //on stalno osluskuje tok podataka kada dolaze novi observeri
      //to je jedan od prednosti Observer patterna
      this.user$=this.afAuth.authState.pipe(
        switchMap(user=>{
          if(user){
            return afs.doc<MyUser>('users/'+user.uid).valueChanges();//ovde osluskujemo promene od usera koje nam salje
          }
          else return of(null);//vracamo observable od null
        })
      )
     }//zavrsetak konstruktora

     async googleSignIn(){
       const provider=new auth.GoogleAuthProvider();
       const crediential=await this.afAuth.signInWithPopup(provider);

       return this.updateUserData(crediential.user);
     }
     async createUserEmailAndPassword(data){
     let crediential= await this.afAuth.createUserWithEmailAndPassword(data.email,data.password).catch(err=>
      {
        console.log("Takav korisnik postoji vec");

        return null;
      })
      if(crediential!=null)
     return this.updateUserData(crediential.user,data);
     else{
       this.router.navigate(['/']);//ako postoji prosledimo korisnika na pocetnu stranu
     }
     }

     //Pravi se kolekcija u bazi users da bi smo pratili svakog usera
     private updateUserData(user:User,data?:MyUser | null){



       const userRef:AngularFirestoreDocument<any> =this.afs.doc("users/"+user.uid);//kreira dokument
        data.uid=user.uid;
        data.role="";
       return userRef.set(data,{merge:true});//da li da ih spoji sa prethodnim
     }
     async ulogujSe(email,password){
        let credientials=await this.afAuth.signInWithEmailAndPassword(email,password).catch(
          err=>{console.log("Netacan email ili password");
        return null;}
        );
          if(credientials==null)
          return false;
          else return true;

     }
     async signOut(){
       await this.afAuth.signOut();
       this.router.navigate(['/']);
     }

     getAllUsers(){
     return  this.afs.collection<MyUser>("users").snapshotChanges();
     }
     obrisiUsera(id){
       this.afs.doc(`users/${id}`).delete().then(()=>console.log("Korisnik uspesno obrisan"))
       .catch(err=>console.log("Greska se javila "+err));
     }
}
