import { TestBed } from '@angular/core/testing';
import { TitleService } from '../../../src/app/services/title.service';

describe('TitleService', () => {
  let service: TitleService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TitleService]
    });
    service = TestBed.inject(TitleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return correct app title', () => {
    expect(service.getTitle()).toBe('Angular App');
  });

  it('should update title', () => {
    service.setTitle('New Title');
    expect(service.getTitle()).toBe('New Title');
  });
});