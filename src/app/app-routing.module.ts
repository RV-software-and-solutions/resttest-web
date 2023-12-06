import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';

export const routes : Routes = [
  { path: '', pathMatch: 'full', component: WelcomeComponent },
  { path: 'home', pathMatch: 'full', component: WelcomeComponent },
  { path: 'synonym', loadChildren: () => import('./pages/synonym/synonym.module').then(m => m.SynonymModule)},
  //Wild Card Route for 404 request
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
