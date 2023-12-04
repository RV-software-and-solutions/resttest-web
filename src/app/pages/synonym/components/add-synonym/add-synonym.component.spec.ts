import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSynonymComponent } from './add-synonym.component';

describe('AddSynonymComponent', () => {
  let component: AddSynonymComponent;
  let fixture: ComponentFixture<AddSynonymComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddSynonymComponent]
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
