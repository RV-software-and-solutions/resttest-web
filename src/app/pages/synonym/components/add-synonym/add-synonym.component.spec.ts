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
  let mockSynonymService: jasmine.SpyObj<SynonymService>;
  let mockNotificationService: jasmine.SpyObj<NzNotificationService>;

  beforeEach(async () => {

    mockSynonymService = jasmine.createSpyObj('SynonymService', ['addNew']);
    mockNotificationService = jasmine.createSpyObj('NzNotificationService', ['create']);

    await TestBed.configureTestingModule({
      declarations: [AddSynonymComponent],
      providers: [Globals, FormBuilder,
        { provide: SynonymService, useValue: mockSynonymService },
        { provide: NzNotificationService, useValue: mockNotificationService }
      ],
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

  describe('Form Submission', () => {
    it('should call SynonymService.addNew and show success notification on valid form submission', async () => {
      // Arrange
      component.synonymForm.setValue({ synonymFrom: 'testFrom', synonymTo: 'testTo' });

      // Act
      await component.submitForm();

      // Assert
      expect(mockSynonymService.addNew).toHaveBeenCalledWith(jasmine.objectContaining({
        synonymFrom: 'testFrom',
        synonymTo: 'testTo'
      }));

      // Assert
      expect(mockNotificationService.create).toHaveBeenCalledWith(
        'success',
        'Synonym added',
        'Synonym from testFrom to testTo added!'
      );
    });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an invalid form when empty', () => {
    expect(component.synonymForm.valid).toBeFalsy();
  });

  it('should have a valid form when filled', () => {
    component.synonymForm.setValue({ synonymFrom: 'example', synonymTo: 'example1' });
    expect(component.synonymForm.valid).toBeTruthy();
  });
});
