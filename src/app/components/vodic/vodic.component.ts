import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-vodic',
  templateUrl: './vodic.component.html',
  styleUrls: ['./vodic.component.css']
})
export class VodicComponent implements OnInit,OnDestroy {

  constructor(public navService:NavbarService) { }
  ngOnDestroy(): void {
   this.navService.show();
  }

  ngOnInit(): void {
    this.navService.hide();
  }

}
