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
  let mockSynonymService: jasmine.SpyObj<SynonymService>;

  beforeEach(async () => {
    mockSynonymService = jasmine.createSpyObj('SynonymService', ['loadGraphState', 'saveGraphState', 'resetGraphState']);

    await TestBed.configureTestingModule({
      declarations: [MainSynonymComponent],
      imports: [
        HttpClientModule,
        NzSpinModule,
        NzIconTestModule,
      ],
      providers: [Globals, { provide: SynonymService, useValue: mockSynonymService }]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MainSynonymComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call loadGraphState and update states correctly', async () => {
    await component.onLoadGraphState();
    expect(mockSynonymService.loadGraphState).toHaveBeenCalled();
    expect(component.graphStateLoaded).toBeTrue();
    expect(component.actionRunning).toBeFalse();
  });

  it('should call saveGraphState and update states correctly', async () => {
    await component.onSaveGraphState();
    expect(mockSynonymService.saveGraphState).toHaveBeenCalled();
    expect(component.graphStateSaved).toBeTrue();
    expect(component.actionRunning).toBeFalse();
  });

  it('should call resetGraphState and update states correctly', async () => {
    await component.onResetGraphState();
    expect(mockSynonymService.resetGraphState).toHaveBeenCalled();
    expect(component.graphStateCleared).toBeTrue();
    expect(component.actionRunning).toBeFalse();
  });

  it('should reset all states correctly', () => {
    component.resetStates();
    expect(component.graphStateLoaded).toBeFalse();
    expect(component.graphStateSaved).toBeFalse();
    expect(component.graphStateCleared).toBeFalse();
  });
});
