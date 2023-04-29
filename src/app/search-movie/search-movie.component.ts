import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Movie } from 'src/interfaces/movie';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.scss'],
})
export class SearchMovieComponent {
  jsonDataResult: Movie[] = [];
  moviesData: Movie[] = [];
  movieName: string = '';
  constructor(private http: HttpClient) {
    this.http.get<Movie[]>('assets/json/movies.json').subscribe((res) => {
      this.jsonDataResult = res;
      this.moviesData = this.jsonDataResult;
    });
  }
  ngOnInit(): void {
    // console.log(this.moviesData)
  }
  searchMovie(): void {
    if (this.movieName) {
      this.moviesData = this.jsonDataResult.filter(
        (e) => e?.title === this.movieName
      );
    }
  }
}
