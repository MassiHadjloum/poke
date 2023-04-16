import { TestBed } from '@angular/core/testing';

import { AutentificationGuard } from './autentification.guard';

describe('AutentificationGuard', () => {
  let guard: AutentificationGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AutentificationGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
