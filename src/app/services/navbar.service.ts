import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  visibile:boolean;
  constructor() { this.visibile=true;}
  hide(){this.visibile=false;}
  show(){this.visibile=true;}
}
