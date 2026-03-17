import { Movies } from './../movie.datasource';
import { Component } from '@angular/core';
import { MovieType } from '../movie';
import { FormsModule } from '@angular/forms';
import { MovieDetail } from '../movie-detail/movie-detail';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.html',
  standalone: true,
  imports: [FormsModule, MovieDetail],
  styleUrls: ['./movies.css'],
})
export class MoviesComponent {
  title = 'Movies List';
  movies: MovieType[] = [];
  selectedMovie!: MovieType;

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.getMovies();
  }

  onSelect(movie: MovieType): void {
    this.selectedMovie = movie;
  }

  getMovies(): void {
   this.movieService.getMovies().subscribe(movies =>
    this.movies = movies
   );
  }
}
