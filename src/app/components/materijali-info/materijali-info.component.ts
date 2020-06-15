import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-materijali-info',
  templateUrl: './materijali-info.component.html',
  styleUrls: ['./materijali-info.component.css']
})
export class MaterijaliInfoComponent implements OnInit {

  constructor() { }
  slideIndex=1;
  ngOnInit(): void {
    this.showSlides(this.slideIndex);
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
