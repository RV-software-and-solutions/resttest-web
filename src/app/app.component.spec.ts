import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { RouterTestingModule } from "@angular/router/testing";
import { NzIconTestModule } from './nz-icon-test.module';
import { NzIconModule } from 'ng-zorro-antd/icon';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
        NzLayoutModule,
        RouterTestingModule,
        NzIconModule,
        NzIconTestModule
      ],
      providers: [
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
