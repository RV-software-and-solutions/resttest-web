import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSynonymComponent } from './add-synonym.component';
import { Globals } from '../../../../common/globals';
import { HttpClientModule } from '@angular/common/http';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { SynonymService } from '../../../../services/synonym/synonym.service';
import { NzIconTestModule } from '../../../../nz-icon-test.module';

describe('AddSynonymComponent', () => {
  let component: AddSynonymComponent;
  let fixture: ComponentFixture<AddSynonymComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddSynonymComponent],
      providers: [SynonymService, Globals, FormBuilder, NzNotificationService],
      imports: [
        NzFormModule,
        NzInputModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        NzIconTestModule,
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddSynonymComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
