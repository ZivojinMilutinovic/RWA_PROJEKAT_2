import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Materijal } from 'src/app/models/materijal.model';
import { MyUser } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { Observable, Subscriber, Subject } from 'rxjs';
import { Store } from '@ngrx/store';
import { PitanjeState, selectAllPitanja } from 'src/app/reducers/pitanje.reducer';
import * as Actions from '../../actions/pitanja.actions';
import { Pitanje } from 'src/app/models/Pitanje.model';

@Component({
  selector: 'app-napravi-blanket',
  templateUrl: './napravi-blanket.component.html',
  styleUrls: ['./napravi-blanket.component.css']
})
export class NapraviBlanketComponent implements OnInit,OnDestroy {

  pitanja:Observable<any>;

  skupPitanja:Array<Pitanje>;
  isChecked:boolean;
  subsriptionPitanja;
  isButtonClicked:boolean=false;
  isKocka:boolean=false;
  user:MyUser;
  value:number;
  constructor(public auth:AuthService,private router:Router,private store:Store<PitanjeState>)
  { document.body.classList.add("pozadina-napravi-blanket")
        this.auth.user$.subscribe(u=>this.user=u);

        this.pitanja=this.store.select(selectAllPitanja)

        this.subsriptionPitanja=this.pitanja.subscribe(p=>this.skupPitanja=p);
      }
  ngOnDestroy(): void {
      this.subsriptionPitanja.unsubscribe();
    document.body.className='';
    this.store.dispatch(Actions.CLEAR_ALL());
  }

  promeni(isChecked:boolean){
this.isChecked=isChecked;
console.log(isChecked);
  }
  ngOnInit(): void {

  }
  finalnaProvera(){
    let naziv=  document.getElementById("nazivMaterijala");
    let predmet=  document.getElementById("predmetMaterijala");
    if((document.getElementById("nmaterijala") as HTMLInputElement).value=="")
    {
        console.log("materijali");
        naziv.innerHTML="Ovo je polje obavezno";
        return false;
    }
    if((document.getElementById("pmaterijala") as HTMLInputElement).value=="")
    {
        console.log("predmet");
        predmet.innerHTML="Ovo je polje obavezno";
        return false;
    }

    return true;
    }
    ubaciSve(){
      let pitanja=document.getElementById("skuppitanja") as HTMLInputElement;
      let inputPitanja=document.getElementsByClassName("inputPitanja");
      console.log(inputPitanja);
      let odgovori=document.getElementById("skupodgovora") as HTMLInputElement;
      let inputOdgovori=document.getElementsByClassName("inputOdgovori");
      for(let i=0;i<inputPitanja.length;i++){
        const pitanje:Pitanje={
          id:i.toString(),
          odgovor:(inputOdgovori[i] as HTMLInputElement).value,
          pitanje:(inputPitanja[i] as HTMLInputElement).value
        };
        this.store.dispatch(Actions.ADD_ONE({pitanje}))
          pitanja.value=pitanja.value+(inputPitanja[i] as HTMLInputElement).value+"###";
          odgovori.value=odgovori.value+(inputOdgovori[i] as HTMLInputElement).value+"###";
      }

  }
  prikaziKocku(){
    if(!this.finalnaProvera())
    return;

    this.ubaciSve();

    this.isKocka=true;
  }
  //mora da bude isto kao emitovana vrednost
  napraviPitanja(clicked:boolean){

    if(clicked){


    let brPitanja=document.getElementById("izaberiBrojPitanja");

    let pomocna=(document.querySelector(".brojPitanja")as HTMLInputElement).value;

    if(pomocna==""){
      document.getElementById("greskaBrojPitanja").innerHTML="Molimo unesite broj pitanja";
        return;
    }
    this.value=parseInt(pomocna);
    console.log(this.value);
    if(this.value<1 )
    {
        document.getElementById("greskaBrojPitanja").innerHTML="Molimo unesite broj pitanja";
        return;
    }

    this.isButtonClicked=true;


    let divZaPitanja=document.querySelector(".ZaPitanja");

    for(let i=0;i<this.value;i++){
        let rowDiv=document.createElement("div");
        rowDiv.classList.add("row");

        divZaPitanja.appendChild(rowDiv);

        let col1=document.createElement("div");
        col1.classList.add("col-lg-6");
        col1.classList.add("col-sm-12");
        col1.classList.add("form-group");
        let lbl1=document.createElement("label");
        lbl1.innerHTML=`Pitanje ${i+1}.`;
        let inp1=document.createElement("input");
        inp1.classList.add("form-control");
        inp1.classList.add("inputPitanja");
        col1.appendChild(lbl1);
        col1.appendChild(inp1);

        let col2=document.createElement("div");
        col2.classList.add("col-lg-6");
        col2.classList.add("col-sm-12");
        col2.classList.add("form-group");
        let lbl2=document.createElement("label");
        lbl2.innerHTML=`Odgovor ${i+1}.`;
        let inp2=document.createElement("input");
        inp2.classList.add("form-control");
        inp2.classList.add("inputOdgovori");
        col2.appendChild(lbl2);
        col2.appendChild(inp2);

        rowDiv.appendChild(col1);
        rowDiv.appendChild(col2);




    }
  }
  }
  obrisiPitanje(){
    let divZaPitanja=document.querySelector(".ZaPitanja");
    if(divZaPitanja.childElementCount==1)
    return;
    divZaPitanja.removeChild(divZaPitanja.lastChild);

    this.value--;

    this.store.dispatch(Actions.DELETE_ONE({id:this.value.toString()}))
  }
  dodajPitanje(){
    let divZaPitanja=document.querySelector(".ZaPitanja");
    let rowDiv=document.createElement("div");
    rowDiv.classList.add("row");

    divZaPitanja.appendChild(rowDiv);

    let col1=document.createElement("div");
    col1.classList.add("col-lg-6");
    col1.classList.add("col-sm-12");
    col1.classList.add("form-group");
    let lbl1=document.createElement("label");
    lbl1.innerHTML=`Pitanje ${++this.value}.`;
    let inp1=document.createElement("input");
    inp1.classList.add("form-control");
    col1.appendChild(lbl1);
    col1.appendChild(inp1);

    let col2=document.createElement("div");
    col2.classList.add("col-lg-6");
    col2.classList.add("col-sm-12");
    col2.classList.add("form-group");
    let lbl2=document.createElement("label");
    lbl2.innerHTML=`Odgovor ${this.value}.`;
    let inp2=document.createElement("input");
    inp2.classList.add("form-control");
    col2.appendChild(lbl2);
    col2.appendChild(inp2);

    rowDiv.appendChild(col1);
    rowDiv.appendChild(col2);
  }
 async submitForm(forma:NgForm)
  {



    let odgovori="";
    let pitanja="";
    this.skupPitanja.forEach(el=>{
      odgovori+=el.odgovor+"###";
      pitanja+=el.pitanje+"###";
    })

    this.skupPitanja;
    let data=forma.form.value;

    let materijal:Materijal={
      id:null,
      brojOcenaJedan:0,
      brojOcenaDva:0,
      brojOcenaTri:0,
      brojOcenaCetiri:0,
      brojOcenaPet:0,
      nazivMaterijala:data.nazivMaterijala,
      predmetMaterijala:data.predmetMaterijala,
      userId:this.user.uid,
      odgovoriMaterijala:odgovori,
      pitanjaMaterijala:pitanja
    }
   await this.auth.zapamtiMaterijal(materijal);
    this.router.navigate(['/']);
  }

}
