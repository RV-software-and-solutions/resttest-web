import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSynonymComponent } from './components/add-synonym/add-synonym.component';
import { FindSynonymComponent } from './components/find-synonym/find-synonym.component';
import { MainSynonymComponent } from './components/main-synonym/main-synonym.component';

const moduleName: string = "synonym";

const routes: Routes = [
  { path: '', component: MainSynonymComponent },
  { path: 'add', component: AddSynonymComponent },
  { path: 'find', component: FindSynonymComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SynonymRoutingModule { }
