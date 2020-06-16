import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Message } from 'src/app/models/message.model';

import * as Actions from "../../actions/message.actions"
interface AppState{
  message:Message
}
@Component({
  selector: 'app-materijali-info',
  templateUrl: './materijali-info.component.html',
  styleUrls: ['./materijali-info.component.css']
})
export class MaterijaliInfoComponent implements OnInit {
  message:Observable<Message>
  constructor(private store:Store<AppState>) {
    this.message=this.store.select("message");
  }
  slideIndex=1;
  alert:Observable<boolean>;;
  ngOnInit(): void {
    this.showSlides(this.slideIndex);
    this.alert=of(true).pipe(delay(5000));
    this.store.dispatch(Actions.message_action());
  }
  plusSlides(n) {
    this.showSlides(this.slideIndex += n);
  }

  // Thumbnail image controls
  currentSlide(n) {
    this.showSlides(this.slideIndex = n);
  }
  showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo");
    let captionText = document.getElementById("caption");
    if (n > slides.length) {this.slideIndex = 1}
    if (n < 1) {this.slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      (slides[i] as HTMLElement).style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active", "");
    }
    (slides[this.slideIndex-1] as HTMLElement).style.display = "block";
    dots[this.slideIndex-1].className += " active";
    captionText.innerHTML = (dots[this.slideIndex-1] as HTMLImageElement ).alt;
  }
}
