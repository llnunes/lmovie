import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {
  
  @Input('fill')  
  public fill:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
