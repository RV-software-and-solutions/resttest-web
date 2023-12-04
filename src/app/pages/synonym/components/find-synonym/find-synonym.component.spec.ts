import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindSynonymComponent } from './find-synonym.component';

describe('FindSynonymComponent', () => {
  let component: FindSynonymComponent;
  let fixture: ComponentFixture<FindSynonymComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FindSynonymComponent]
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
