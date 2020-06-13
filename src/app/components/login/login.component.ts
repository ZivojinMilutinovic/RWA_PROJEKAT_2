import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm,NgModel } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,OnDestroy {
greska:boolean;
  constructor(private auth:AuthService,
    private router:Router) { document.body.classList.add("pozadina-login")}
  ngOnDestroy(): void {
    document.body.className='';
  }

  ngOnInit(): void {
  }
onSubmit(form:NgForm){
let data=form.value;
this.auth.ulogujSe(data.email,data.password).then(
  val=>{
    if(val==true)
    this.router.navigate(['/']);
    else{
      this.greska=true;

    }
  }
);

}
}
