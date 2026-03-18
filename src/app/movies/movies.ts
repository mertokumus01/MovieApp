import { Component } from '@angular/core';
import { MovieType } from '../movie';
import { FormsModule } from '@angular/forms';
import { MovieService } from '../movie.service';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.html',
  standalone: true,
  imports: [FormsModule, RouterLink],
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
