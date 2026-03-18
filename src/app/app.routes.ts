import { Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies';
import { Dashboard } from './dashboard/dashboard';
import { MovieDetail } from './movie-detail/movie-detail';

export const routes: Routes = [
  {path:'',redirectTo:'/dashboard',pathMatch:'full'},
  {path:'dashboard',component:Dashboard },
  {path:'movies',component: MoviesComponent},
  {path:'detail/:id',component: MovieDetail}
];
