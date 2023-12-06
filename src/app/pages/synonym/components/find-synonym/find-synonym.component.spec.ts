import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindSynonymComponent } from './find-synonym.component';
import { SynonymService } from '../../../../services/synonym/synonym.service';
import { Globals } from '../../../../common/globals';
import { HttpClientModule } from '@angular/common/http';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzIconTestModule } from '../../../../nz-icon-test.module';
import { FindSynonymResponse } from '../../../../models/synonym/Reponse/FindSynonymResponse';
import { By } from '@angular/platform-browser';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzNotificationService } from 'ng-zorro-antd/notification';

describe('FindSynonymComponent', () => {
  let component: FindSynonymComponent;
  let fixture: ComponentFixture<FindSynonymComponent>;
  let mockSynonymService: jasmine.SpyObj<SynonymService>;
  let mockNotificationService: jasmine.SpyObj<NzNotificationService>;

  beforeEach(async () => {
    mockSynonymService = jasmine.createSpyObj('SynonymService', ['findSynonyms']);
    mockNotificationService = jasmine.createSpyObj('NzNotificationService', ['create']);

    await TestBed.configureTestingModule({
      declarations: [FindSynonymComponent],
      imports: [
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        NzFormModule,
        NzInputModule,
        NzCardModule,
        NzIconTestModule
      ],
      providers: [
        { provide: SynonymService, useValue: mockSynonymService },
        { provide: NzNotificationService, useValue: mockNotificationService },
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

  it('should have an invalid form when empty', () => {
    expect(component.synonymForm.valid).toBeFalsy();
  });

  it('should have a valid form when filled', () => {
    component.synonymForm.setValue({ synonymFrom: 'example' });
    expect(component.synonymForm.valid).toBeTruthy();
  });

  describe('Form Submission', () => {
    it('should call findSynonyms and set foundSynonyms on valid form submission', async () => {
      const mockResponse: FindSynonymResponse = {
        fromSynonym: 'example',
        synonyms: ['synonym1', 'synonym2']
      };
      mockSynonymService.findSynonyms.and.returnValue(Promise.resolve(mockResponse));
  
      component.synonymForm.setValue({ synonymFrom: 'example' });
      await component.submitForm();
  
      expect(mockSynonymService.findSynonyms).toHaveBeenCalledWith(jasmine.objectContaining({
        synonymFrom: 'example'
      }));
      expect(component.foundSynonyms).toEqual(mockResponse);
      expect(component.synonymLoaded).toBeTrue();
    });
    
    it('should display an error notification when findSynonyms throws an error', async () => {
      const error = new Error('Test Error');
      mockSynonymService.findSynonyms.and.throwError(error);
  
      component.synonymForm.setValue({ synonymFrom: 'testSynonym' });
      await component.submitForm();
  
      expect(mockNotificationService.create).toHaveBeenCalledWith(
        'error',
        'Action failed',
        'Add synonym action failed. Message - Error: Test Error!'
      );
    });
  });
  

  it('should display the div if synonyms are loaded', async () => {
    const mockResponse = { fromSynonym: 'test', synonyms: ['synonym1', 'synonym2'] };
    mockSynonymService.findSynonyms.and.returnValue(Promise.resolve(mockResponse));

    await component.submitForm();

    fixture.detectChanges();

    const divElement = fixture.debugElement.query(By.css('div[style*="background: #ECECEC;"]'));
    expect(divElement).toBeTruthy();
  });

  it('should not display any paragraphs in nz-card if synonyms array is empty', async () => {
    const mockResponse = { fromSynonym: 'test', synonyms: [] };
    mockSynonymService.findSynonyms.and.returnValue(Promise.resolve(mockResponse));

    await component.submitForm();

    fixture.detectChanges();

    const nzCardElement = fixture.debugElement.query(By.css('nz-card'));
    expect(nzCardElement).toBeTruthy();
    const pElements = nzCardElement.queryAll(By.css('p'));
    expect(pElements.length).toBe(0);
  });

  
});
