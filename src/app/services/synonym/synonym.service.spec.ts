import { TestBed } from '@angular/core/testing';

import { SynonymService } from './synonym.service';
import { HttpClientModule } from '@angular/common/http';
import { Globals } from '../../common/globals';
import { NzIconTestModule } from '../../nz-icon-test.module';

describe('SynonymService', () => {
  let service: SynonymService;

  beforeEach(() => {
    TestBed.configureTestingModule(
      {
        imports: [
          HttpClientModule,
          NzIconTestModule
        ],
        providers: [Globals]
      }
    );
    service = TestBed.inject(SynonymService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
