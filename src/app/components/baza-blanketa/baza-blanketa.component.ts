import { Component, OnInit, OnDestroy, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Materijal } from 'src/app/models/materijal.model';
import { map } from 'rxjs/operators';
import { MyUser } from 'src/app/models/user.model';

@Component({
  selector: 'app-baza-blanketa',
  templateUrl: './baza-blanketa.component.html',
  styleUrls: ['./baza-blanketa.component.css']
})
export class BazaBlanketaComponent implements OnInit,OnDestroy,AfterViewInit {

@ViewChildren('clild') divs:QueryList<any>
  blanketi:Materijal[]
  user:MyUser;
  constructor(private auth:AuthService) { document.body.classList.add("pozadina-baza-blanketa");
  }
  ngAfterViewInit(): void {
    this.divs.changes.subscribe(t=>{
      this.izracunajSveOcene();
    })
  }
  ngOnDestroy(): void {
    document.body.className='';
  }

  ngOnInit(): void {


    this.auth.user$.subscribe(val=>this.user=val)
    this.auth.sviBlanketi().subscribe(val=>{
      this.blanketi=val.map(eli=>{
        let blanket=eli.payload.doc.data();
        return blanket;
      })
    });


  }


  anyBlanket(){
    if(this.blanketi)
    return this.blanketi.length!=0;
    else return true;
  }

  //FUnkcije za dinamicko postavljanje ocena
   izracunajSveOcene(){

    let divUserRaitings=document.getElementsByClassName("user-raiting");

    for(let i=0;i<divUserRaitings.length;i++)
    {
        let p=divUserRaitings[i];
        console.log(p)
        let divBars=p.querySelectorAll(".bar-container div");
        let brojOcena=p.querySelectorAll(".right div");

        //Ovo je ukupan broj poena
       let divPoeni=this.querySelectorSaberi(".right div",p);


       for(let j=0;j<brojOcena.length;j++){
           if(divPoeni==0){
            (divBars[j] as HTMLElement).style.width=`0%`;
           }
           else
           (divBars[j] as HTMLElement).style.width=`${Number.parseFloat(brojOcena[j].innerHTML)/divPoeni*100}%`;
       }
       this.izracunajBrojZvezdica(this.izracunajProsecnuOcenu(p),p);
      p.getElementsByClassName("opis")[0].innerHTML=divPoeni==0  ? "Blanket jos nije ocenjen" :
       `${this.izracunajProsecnuOcenu(p)} zasnovano na ${divPoeni} ocene.`;



    }
   }


   querySelectorSaberi(string,p){

    return Array.from(p.querySelectorAll(string)).map(x=>Number.parseInt((x as HTMLElement).innerHTML)).reduce((acc,val)=>acc+val,0);
 }
  izracunajBrojZvezdica(prosecnaOcena,p){
     let zvezdice=p.querySelectorAll(".fa-star");
     console.log(prosecnaOcena)
     for(let l=0;l<prosecnaOcena;l++){
         console.log(zvezdice[l]);
         zvezdice[l].classList.add('checked');
     }



 }
  izracunajProsecnuOcenu(p){

     let x=(p,s)=>  parseFloat(p.querySelector(s).innerHTML) ;

     let poeni=parseFloat(this.querySelectorSaberi(".right div",p).toString());
     let f=0;
    if(poeni!=0)
      f=((x(p,".broj5")*5+x(p,".broj4")*4+x(p,".broj3")*3+x(p,".broj2")*2+x(p,".broj1"))/poeni);


    return f.toPrecision(3);

 }


}
