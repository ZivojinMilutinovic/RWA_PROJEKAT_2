import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Materijal } from 'src/app/models/materijal.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-komentarisi-blanket',
  templateUrl: './komentarisi-blanket.component.html',
  styleUrls: ['./komentarisi-blanket.component.css']
})
export class KomentarisiBlanketComponent implements OnInit,OnDestroy {


  blanket:Materijal;
  pitanja:string[];
  odgovori:string[];
  private sub:Subscription;
  constructor(private route:ActivatedRoute,private auth:AuthService,private renderer:Renderer2,
    private router:Router) {document.body.classList.add("pozadina-komentarisi-blanket") }
  ngOnDestroy(): void {
    document.body.className='';
    this.sub.unsubscribe();
  }

  ngOnInit(): void {
    this.sub=this.route.params.subscribe(params=>{

      this.auth.vratiBlanket(params['id']).subscribe(val=>{
        this.blanket=val.payload.data();
        this.pitanja=this.blanket.pitanjaMaterijala.split("###");
        this.odgovori=this.blanket.odgovoriMaterijala.split("###");

        this.pitanja.pop();

        this.odgovori.pop();

      })
    })
    this.funkcijaZaZvezdice();
  }
//funkcije za zvezdice
funkcijaZaZvezdice(){
  let stars=document.getElementsByClassName("fa-star");


  let inputOcena=document.getElementById("ocena");
  for(let i=0;i<stars.length;i++){

  this.renderer.listen(stars[i],"mouseover",()=>{
    let ind=parseInt(stars[i].id);
    (inputOcena as HTMLInputElement).value=ind.toString();

    for(let j=0;j<ind;j++)
    {

    stars[j].classList.add("checked");
    }
  });
  this.renderer.listen(stars[i],"mouseleave",()=>{
    for(let j=0;j<stars.length;j++)
    stars[j].classList.remove("checked");
  })


  }
}
dodeliOcenuBlanketu(ocena:number){
 if(ocena==1){
   this.blanket.brojOcenaJedan+=1;
 }
 else if(ocena==2){
  this.blanket.brojOcenaDva+=1;
}
else if(ocena==3){
  this.blanket.brojOcenaTri=1;
}
else if(ocena==4){
  this.blanket.brojOcenaCetiri+=1;
}
else if(ocena==5){
  this.blanket.brojOcenaPet+=1;
}
}
async oceniBlanket(ocena:HTMLInputElement){
let oc=parseInt(ocena.value);
this.dodeliOcenuBlanketu(oc);
await this.auth.azurirajBlanket(this.blanket.id,this.blanket);
this.router.navigate(['/baza-blanketa']);
}
}
