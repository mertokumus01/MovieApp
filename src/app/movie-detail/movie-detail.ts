import { Component, Input } from '@angular/core';
import { MovieType } from '../movie';
import { FormsModule } from '@angular/forms';
import { MovieService } from '../movie.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports : [FormsModule],
  templateUrl: './movie-detail.html',
  styleUrl: './movie-detail.css',
})
export class MovieDetail {
 @Input() movie!: MovieType
 constructor(
  private movieService: MovieService,
  private route : ActivatedRoute
) {}
  ngOnInit(){
    this.getMovie();
  }

getMovie() : void{
  this.route.paramMap.subscribe(params => {
    const id = Number(params.get('id'));
    this.movieService.getMovie(id)
    .subscribe(movie => this.movie = movie);
  })
}

}
