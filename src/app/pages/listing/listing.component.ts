import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { Event } from '@angular/router';
import { Axios as axios } from 'axios';
import { Observable } from 'rxjs';
import { MoviePage } from 'src/app/models/movie-page.model';
import { Movie } from 'src/app/models/movie.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

  public page: MoviePage = new MoviePage();
  pagina: number = 0

  constructor(private _http: HttpClient) {
  }

  ngOnInit(): void {
    this.carregarMovies();
  }

  carregarMovies() {
    this._http.get<MoviePage>(`${environment.apiUrl}/movies?size=12&page=${this.pagina}&sort=title`).
      subscribe(
        recursos => {
          this.page = recursos;
        }
      );
  }

  atualizarPageNumber(event: number){
    this.pagina = event;
    this.carregarMovies();
  }
}
