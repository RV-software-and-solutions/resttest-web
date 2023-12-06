import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindSynonymComponent } from './find-synonym.component';
import { SynonymService } from '../../../../services/synonym/synonym.service';
import { Globals } from '../../../../common/globals';
import { HttpClientModule } from '@angular/common/http';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzIconTestModule } from '../../../../nz-icon-test.module';

describe('FindSynonymComponent', () => {
  let component: FindSynonymComponent;
  let fixture: ComponentFixture<FindSynonymComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FindSynonymComponent],
      imports: [
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        NzFormModule,
        NzInputModule,
        NzIconTestModule
      ],
      providers: [
        SynonymService,
        FormBuilder,
        Globals,
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FindSynonymComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
