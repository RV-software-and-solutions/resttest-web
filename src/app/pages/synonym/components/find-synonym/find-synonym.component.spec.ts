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

describe('FindSynonymComponent', () => {
  let component: FindSynonymComponent;
  let fixture: ComponentFixture<FindSynonymComponent>;
  let mockSynonymService: jasmine.SpyObj<SynonymService>;

  beforeEach(async () => {
    mockSynonymService = jasmine.createSpyObj('SynonymService', ['findSynonyms']);

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
