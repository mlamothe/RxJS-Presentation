import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, startWith, switchMap, debounceTime } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

// Created using http://json2ts.com/
export interface MovieSearchResults {
  page: number;
  total_results: number;
  total_pages: number;
  results: Movie[];
}

export interface Movie {
  vote_count: number;
  id: number;
  video: boolean;
  vote_average: number;
  title: string;
  popularity: number;
  poster_path: string;
  original_language: string;
  original_title: string;
  genre_ids: number[];
  backdrop_path: string;
  adult: boolean;
  overview: string;
  release_date: string;
}

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.scss']
})
export class MovieSearchComponent {

  private static readonly DebounceTimeMS = 250;
  private static readonly MinChars = 3;

  movieCtrl = new FormControl();
  filteredMovies: Observable<object[]>;

  constructor(private http: HttpClient) {
    this.filteredMovies = this.movieCtrl.valueChanges
      .pipe(
        // Prime the pump with an empty string.
        startWith<string>(''),
        // Add delay before executing the search
        debounceTime(MovieSearchComponent.DebounceTimeMS),
        // If enough characters have been specified, perform the search - oterwise return an empty array.
        switchMap(search => this.isValidSearch(search) ? this.searchMovies(search) : of([])),
      );
  }

  private isValidSearch(search: string) {
    return search && search.length > MovieSearchComponent.MinChars;
  }

  private searchMovies(search: string): Observable<Movie[]> {
    // Perform AJAX request.
    return this.http.get<MovieSearchResults>(this.createSearchUrl(search))
      // Extra movie list from 'results' array property. Sort movies by title.
      .pipe(map(data => data.results.sort(this.sortByTitle)));
  }

  private sortByTitle = (a: Movie, b: Movie): number => {
    if (a.title < b.title) {
      return -1;
    }

    if (a.title > b.title) {
      return 1;
    }

    return 0;
  }

  private createSearchUrl(value: string): string {
    return `https://api.themoviedb.org/3/search/movie?api_key=9a9fe11bf4564e59de1953c466834203&language=en-US&query=${value}&page=1&include_adult=false`;
  }
}
