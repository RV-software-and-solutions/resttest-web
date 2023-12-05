import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

export const routes : Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'home', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'synonym', loadChildren: () => import('./pages/synonym/synonym.module').then(m => m.SynonymModule)},
  //Wild Card Route for 404 request
  // { path: '**', pathMatch: 'full', component: PageNotFoundComponent }
];