import { Injectable } from '@angular/core';
import { MovieType } from './movie';
import { Movies } from './movie.datasource';
import { Observable, of } from 'rxjs';
import { Logging } from './logging/logging';
import { LoggingService } from './logging.service';
@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(public loggingService: LoggingService) {}
  getMovies(): Observable<MovieType[]> {
    this.loggingService.addMessage('MovieService: listing movies');
    return of(Movies);
  }
}
