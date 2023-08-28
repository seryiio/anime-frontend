import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListComponent } from './components/list/list.component';
import { LoginComponent } from './components/login/login.component';
import { AnimeComponent } from './components/anime/anime.component';
import { GenreAnimeComponent } from './components/genre-anime/genre-anime.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'my-list', component: ListComponent },
      { path: 'animes/:id', component: AnimeComponent },
      { path: 'genre/:id', component: GenreAnimeComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
