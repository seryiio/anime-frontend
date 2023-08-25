import { TestBed } from '@angular/core/testing';

import { GenreAnimeService } from './genre-anime.service';

describe('GenreAnimeService', () => {
  let service: GenreAnimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenreAnimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
