import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/interfaces/movie';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
})
export class MovieDetailComponent {
  title: string = '';
  jsonDataResult: Movie[] = [];
  moviesData: Movie[] = [];
  @ViewChild('imgThumbNail') imgThumbNail: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  async ngOnInit() {
    await this.route.queryParams.subscribe((params) => {
      this.title = params['title'];
    });
    await this.http
      .get<Movie[]>('assets/json/movies.json')
      .subscribe(async (res) => {
        this.jsonDataResult = await res;
        this.setData();
      });
  }
  async setData() {
    this.moviesData = await this.jsonDataResult.filter(
      (e) => e.title == this.title
    );
    console.log(this.moviesData[0])
    this.imgThumbNail.nativeElement.style.setProperty(
      'height',
      `${this.moviesData[0].thumbnail_height}px`
    );
    this.imgThumbNail.nativeElement.style.setProperty(
      'width',
      `${this.moviesData[0].thumbnail_width}px`
    );
  }
}
