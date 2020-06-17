import { Component, OnInit } from '@angular/core';
import { MyUser } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { of } from 'rxjs';
import { take, takeLast } from 'rxjs/operators';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent implements OnInit {


   obrisi:boolean;
  users:MyUser[]
  constructor(private service:AuthService,private afStorage:AngularFireStorage) {this.obrisi=false; }

  ngOnInit(): void {
    this.service.getAllUsers().subscribe(val=>this.users=val.map(el=>{
      let user=el.payload.doc.data() ;
      return user;
    }))
  }
   anyUsers(){
     if(this.users)
     return this.users.length!=0;
     else return false;
   }

   toogleObrisi(){
        this.obrisi=!this.obrisi;
   }
   obrisiUsera(id){
     this.toogleObrisi();
     this.service.obrisiUsera(id);
   }
   vratiSrc(fileName){


     if(fileName=='')
       return "../../../assets/AppPictures//no_image.gif";
       else{

      return fileName;
       }

   }
}
