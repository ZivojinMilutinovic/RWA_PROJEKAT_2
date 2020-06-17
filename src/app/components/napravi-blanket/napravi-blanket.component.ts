import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-napravi-blanket',
  templateUrl: './napravi-blanket.component.html',
  styleUrls: ['./napravi-blanket.component.css']
})
export class NapraviBlanketComponent implements OnInit,OnDestroy {

  isChecked:boolean;
  isButtonClicked:boolean=false;
  constructor() { document.body.classList.add("pozadina-napravi-blanket")}
  ngOnDestroy(): void {
    document.body.className='';
  }

  promeni(isChecked:boolean){
this.isChecked=isChecked;
console.log(isChecked);
  }
  ngOnInit(): void {

  }
  //mora da bude isto kao emitovana vrednost
  napraviPitanja(clicked:boolean){

    if(clicked){

      let value;
    let brPitanja=document.getElementById("izaberiBrojPitanja");

    value=(document.querySelector(".brojPitanja")as HTMLInputElement).value;

    console.log(value);
    if(value<1 || value=="")
    {
        document.getElementById("greskaBrojPitanja").innerHTML="Molimo unesite broj pitanja";
        return;
    }

    this.isButtonClicked=true;


    let divZaPitanja=document.querySelector(".ZaPitanja");

    for(let i=0;i<value;i++){
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

}
