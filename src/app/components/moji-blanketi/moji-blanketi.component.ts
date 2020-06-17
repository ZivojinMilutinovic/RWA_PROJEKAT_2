import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { MyUser } from 'src/app/models/user.model';
import { Observable } from 'rxjs';
import { Materijal } from 'src/app/models/materijal.model';

@Component({
  selector: 'app-moji-blanketi',
  templateUrl: './moji-blanketi.component.html',
  styleUrls: ['./moji-blanketi.component.css']
})
export class MojiBlanketiComponent implements OnInit,OnDestroy {

  blanketi:Materijal[];
  blanketZaPrikaz:Materijal=null;
  pitanja:string[];
  odgovori:string[];
  constructor(public auth:AuthService) {
    document.body.classList.add("pozadina-moji-blanketi");
  }
  ngOnDestroy(): void {
    document.body.className='';
  }

  ngOnInit(): void {
    this.auth.user$.subscribe(user=>{
      //izdvojimo data iz objekta uz pomoc mapiranja
     this.auth.uzmiBlanketeZaKorisnika(user.uid).subscribe(val=>this.blanketi=val.map(el=>{
       let blanket=el.payload.doc.data();
       return blanket;
     }));
    },err=>{});

  }
  postaviBlanketZaPrikaz(blanket:Materijal){
    this.blanketZaPrikaz=blanket;
    this.pitanja=blanket.pitanjaMaterijala.split("###");
    this.odgovori=blanket.odgovoriMaterijala.split("###");
    this.pitanja.pop();
    this.odgovori.pop();
  }

}
