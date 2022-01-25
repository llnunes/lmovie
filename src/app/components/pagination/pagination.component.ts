import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MoviePage } from 'src/app/models/movie-page.model';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input("page")
  public page : MoviePage = new MoviePage();

  @Output() pageNumber = new EventEmitter<number>();

  constructor() {
    
  }

  ngOnInit(): void {    
  }

  onChange(page: number){
    this.pageNumber.emit(page);  
  }

  teste(){
    console.log('teste')
  }

}
