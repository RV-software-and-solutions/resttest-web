import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSynonymComponent } from './main-synonym.component';

describe('MainSynonymComponent', () => {
  let component: MainSynonymComponent;
  let fixture: ComponentFixture<MainSynonymComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainSynonymComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainSynonymComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
