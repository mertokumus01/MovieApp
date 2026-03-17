import { Component, Input } from '@angular/core';
import { MovieType } from '../movie';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports : [FormsModule],
  templateUrl: './movie-detail.html',
  styleUrl: './movie-detail.css',
})
export class MovieDetail {
 @Input() movie!: MovieType
}
