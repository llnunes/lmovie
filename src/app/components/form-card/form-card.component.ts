import { Component, OnInit } from '@angular/core';
import { MoviePage } from 'src/app/models/movie-page.model';

@Component({
  selector: 'app-form-card',
  templateUrl: './form-card.component.html',
  styleUrls: ['./form-card.component.css']
})
export class FormCardComponent implements OnInit {
  
  //movie = new MoviePage();

  constructor(private movie: MoviePage) { }


  ngOnInit(): void {
  }

}
