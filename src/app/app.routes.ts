import { Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies';
import { Dashboard } from './dashboard/dashboard';

export const routes: Routes = [
  {path:'',redirectTo:'/dashboard',pathMatch:'full'},
  {path:'dashboard',component:Dashboard },
  {path:'movies',component: MoviesComponent}
];
