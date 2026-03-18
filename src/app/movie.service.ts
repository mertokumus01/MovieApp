import { Injectable } from '@angular/core';
import { MovieType } from './movie';
import { Movies } from './movie.datasource';
import { Observable, of } from 'rxjs';
import { Logging } from './logging/logging';
import { LoggingService } from './logging.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(
    private loggingService: LoggingService,
    private http: HttpClient
  ) {}
  getMovies(): Observable<MovieType[]> {
    this.loggingService.addMessage('MovieService: listing movies');
    return of(Movies);
  }

  getMovie(id: number): Observable<MovieType>{
  this.loggingService.addMessage('MovieService: get detail by id='+id)
  return of(Movies.find(movie => movie.id === id)!);
}

update(movie:MovieType): Observable<any>{
  this.loggingService.addMessage('MovieService: update movie id='+movie.id)
  const index = Movies.findIndex(m => m.id === movie.id);
  if (index !== -1) {
    Movies[index] = movie;
    return of({ success: true });
  } else {
    return of({ success: false, message: 'Movie not found' });
  }
}
}
