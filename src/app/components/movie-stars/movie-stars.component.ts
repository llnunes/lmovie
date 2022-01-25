import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-stars',
  templateUrl: './movie-stars.component.html',
  styleUrls: ['./movie-stars.component.css']
})
export class MovieStarsComponent implements OnInit {
 
  @Input("score")
  public score: number = 3.5;
  
  fills:number [] = [];

  constructor() { }

  ngOnInit(): void {
    this.fills = this.getFills(this.score);
  }

  getFills(score: number): number[] {
    const fills = [0, 0, 0, 0, 0];
    const integerPart = Math.floor(score);

    for (let i = 0; i < integerPart; i++) {
      fills[i] = 1;
    }

    const diff = score - integerPart;
    if (diff > 0) {
      fills[integerPart] = 0.5;
    }

    return fills;
  }
}
