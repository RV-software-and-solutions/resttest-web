import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSynonymComponent } from './main-synonym.component';
import { Globals } from '../../../../common/globals';
import { HttpClientModule } from '@angular/common/http';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { SynonymService } from '../../../../services/synonym/synonym.service';
import { NzIconTestModule } from '../../../../nz-icon-test.module';

describe('MainSynonymComponent', () => {
  let component: MainSynonymComponent;
  let fixture: ComponentFixture<MainSynonymComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainSynonymComponent],
      imports: [
        HttpClientModule,
        NzSpinModule,
        NzIconTestModule,
      ],
      providers: [Globals, SynonymService]
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
