import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Globals } from '../../common/globals';
import { SynonymRoutingModule } from './synonym-routing.module';
import { AddSynonymComponent } from './components/add-synonym/add-synonym.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { SynonymService } from '../../services/synonym/synonym.service';
import { FindSynonymComponent } from './components/find-synonym/find-synonym.component';
import { NzCardModule } from 'ng-zorro-antd/card'
import { MainSynonymComponent } from './components/main-synonym/main-synonym.component';
import { NzResultModule } from 'ng-zorro-antd/result';
import { NzSpinModule } from 'ng-zorro-antd/spin';

@NgModule({
  declarations: [
    AddSynonymComponent,
    FindSynonymComponent,
    MainSynonymComponent,
  ],
  imports: [
    CommonModule,
    SynonymRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NzFormModule,
    NzInputModule,
    NzIconModule,
    NzCardModule,
    NzResultModule,
    NzSpinModule,
  ],
  providers: [
    SynonymService, Globals,
  ]
})
export class SynonymModule { }
