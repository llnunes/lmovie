import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/models/movie.model';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Score } from 'src/app/models/score.model';

@Component({
  selector: 'app-form-card',
  templateUrl: './form-card.component.html',
  styleUrls: ['./form-card.component.css']
})
export class FormCardComponent implements OnInit {

  public movie: Movie;
  public formGroup: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private _http: HttpClient) {
    this.movie = new Movie();
    this.formGroup = this.formBuilder.group({})
  }

  ngOnInit(): void {
    const movieId = this.route.snapshot.paramMap.get('id') as string;

    this.carregarMovie(movieId);
    this.formGroup = this.formBuilder.group({
      email: new FormControl('', [Validators.email, Validators.required]),
      score: new FormControl('', [Validators.required])
    })
  }

  carregarMovie(movieId: string) {
    this._http.get<Movie>(`${environment.apiUrl}/movies/${movieId}`).
      subscribe(
        recursos => {
          this.movie = recursos;
        }
      );
  }

  handleSubmit() {
      let id = this.movie.id as number;
      
      const score = new Score(this.formGroup.value.email, id, this.formGroup.value.score);

      const url = `${environment.apiUrl}/scores`;
      return this._http.put<Score>(url, score).subscribe(() => {
        this.navigateToList();
      })
  }

  navigateToList(): void {
    this.router.navigate(['/']);
  }
}
