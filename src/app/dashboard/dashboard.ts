import { Component } from '@angular/core';
import { MovieType } from '../movie';
import { MovieService } from '../movie.service';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'dashboard',
  imports: [RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  movies: MovieType[] = [];
  moviesLength: number = 0;
  constructor(private movieService : MovieService){}

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies():void{
    this.movieService.getMovies()
    .subscribe(movies => {
      this.movies = movies.slice(0,3);
      this.moviesLength = movies.length;
    });
  }


}

