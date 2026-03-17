import { Component } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'logging',
  imports: [],
  standalone: true,
  templateUrl: './logging.html',
  styleUrl: './logging.css',
})
export class Logging {
  constructor(public loggingService : LoggingService) {}
}
