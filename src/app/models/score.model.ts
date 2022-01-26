export class Score {
    email: string = '';
    movieId: number = 0;
    score: number = 0;

    constructor(email: string, movieId: number, score: number) {
        this.email = email;
        this.movieId = movieId;
        this.score = score;
    }
}