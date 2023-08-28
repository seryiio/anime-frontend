import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenreAnimeComponent } from './genre-anime.component';

describe('GenreAnimeComponent', () => {
  let component: GenreAnimeComponent;
  let fixture: ComponentFixture<GenreAnimeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenreAnimeComponent]
    });
    fixture = TestBed.createComponent(GenreAnimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
