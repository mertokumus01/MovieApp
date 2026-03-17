import { Component, signal } from '@angular/core';
import { Logging } from "./logging/logging";
import { RouterOutlet, RouterLink} from '@angular/router';
import { Navbar } from "./navbar/navbar";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Logging, RouterOutlet, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
