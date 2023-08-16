import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimeService } from 'src/app/services/AnimeService/anime.service';
import { Anime } from 'src/assets/models/Anime';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  animes: Anime[] = [];
  constructor(private service: AnimeService, private router: Router) { }

  ngOnInit() {
    this.GetAnimes();

    document.addEventListener("DOMContentLoaded", function () {
      const carousel = document.querySelector('.cards') as HTMLElement;
      const prevBtn = document.querySelector('.arrow-left') as HTMLButtonElement;
      const nextBtn = document.querySelector('.arrow-right') as HTMLButtonElement;
      const slideWidth = (document.querySelector('.card') as HTMLElement).clientWidth;

      let currentIndex = 0;

      prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + carousel.children.length) % carousel.children.length;
        updateCarousel();
      });

      nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % carousel.children.length;
        updateCarousel();
      });

      function updateCarousel() {
        const translateValue = -currentIndex * slideWidth;
        carousel.style.transform = `translateX(${translateValue}px)`;
      }
    });
  }

  private GetAnimes() {
    this.service.getAnimes().subscribe(data => {
      this.animes = data;
    })
  }
}
