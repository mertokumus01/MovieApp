import { Component, signal } from '@angular/core';
import { Logging } from "./logging/logging";
import { RouterOutlet, RouterLink} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Logging, RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
