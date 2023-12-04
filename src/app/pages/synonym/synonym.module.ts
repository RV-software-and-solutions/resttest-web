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

@NgModule({
  declarations: [
    AddSynonymComponent
  ],
  imports: [
    CommonModule,
    SynonymRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NzFormModule,
    NzInputModule,
    NzIconModule,
  ],
  providers: [
    SynonymService, Globals,
  ]
})
export class SynonymModule { }
