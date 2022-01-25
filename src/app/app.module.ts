import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/template/header/header.component';

import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { FormComponent } from './pages/form/form.component';
import { ListingComponent } from './pages/listing/listing.component';
import { FormCardComponent } from './components/form-card/form-card.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { MovieScoreComponent } from './components/movie-score/movie-score.component';
import { MovieStarsComponent } from './components/movie-stars/movie-stars.component';
import { StarComponent } from './components/star/star.component';
import { PaginationComponent } from './components/pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,    
    HeaderComponent, FormComponent, ListingComponent, FormCardComponent, MovieCardComponent, MovieScoreComponent, MovieStarsComponent, StarComponent, PaginationComponent,    
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    AngularSvgIconModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
