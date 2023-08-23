import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  ngOnInit() {
    const toggleButton = document.querySelector('.sidebar') as HTMLButtonElement;
    const sidebar = document.querySelector('.sidebar__content') as HTMLElement;
    const closeIconSidebar = document.querySelector('.close-icon') as HTMLElement;

    const ButtonProfile = document.querySelector('.icon__profile') as HTMLButtonElement;
    const sideProfile = document.querySelector('.side-profile') as HTMLElement;

    toggleButton.addEventListener('click', () => {
      sidebar.classList.toggle('show-sidebar');
    });
    closeIconSidebar.addEventListener('click', () => {
      sidebar.classList.remove('show-sidebar');
    });
    
    ButtonProfile.addEventListener('click', () => {
      sideProfile.classList.toggle('show-sideProfile');
    });

    window.addEventListener("scroll", () => {
      const header = document.querySelector(".header") as HTMLElement;
      if (window.scrollY > 0) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });
  }

}
