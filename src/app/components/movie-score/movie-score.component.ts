import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-score',
  templateUrl: './movie-score.component.html',
  styleUrls: ['./movie-score.component.css']
})
export class MovieScoreComponent implements OnInit {

  @Input("score")
  public score: number = 0;
  @Input("count")
  public count: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
