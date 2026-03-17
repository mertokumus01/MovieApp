import { MoviesComponent } from './movies/movies';
import { Component, signal } from '@angular/core';
import { Logging } from "./logging/logging";
import { AppRoutingModule } from './app-routing-module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MoviesComponent, Logging,AppRoutingModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
