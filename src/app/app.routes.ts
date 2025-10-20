import { Routes } from '@angular/router';
import { Safe } from './pages/safe/safe';
import { Birthday } from './pages/birthday/birthday';

export const routes: Routes = [
  { path: '', component: Safe },
  { path: 'birthday', component: Birthday },
  { path: '**', redirectTo: '' }
];
