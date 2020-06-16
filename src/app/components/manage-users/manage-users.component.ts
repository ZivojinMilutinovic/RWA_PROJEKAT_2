import { Component, OnInit } from '@angular/core';
import { MyUser } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent implements OnInit {


   obrisi:boolean;
  users:MyUser[]
  constructor(private service:AuthService) {this.obrisi=false; }

  ngOnInit(): void {
    this.service.getAllUsers().subscribe(val=>this.users=val.map(el=>{
      let user=el.payload.doc.data() ;
      return user;
    }))
  }
   anyUsers(){
     return this.users.length!=0;
   }

   toogleObrisi(){
        this.obrisi=!this.obrisi;
   }
   obrisiUsera(id){
     this.service.obrisiUsera(id);
   }
}
