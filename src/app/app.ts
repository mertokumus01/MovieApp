import { MoviesComponent } from './movies/movies';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ MoviesComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
