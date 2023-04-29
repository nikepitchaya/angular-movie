import { Component, Input } from '@angular/core';
import { Movie } from 'src/interfaces/movie';

@Component({
  selector: 'app-movie-banner',
  templateUrl: './movie-banner.component.html',
  styleUrls: ['./movie-banner.component.scss'],
})
export class MovieBannerComponent {
  @Input() moviesData: Movie[] = [];
  
}
