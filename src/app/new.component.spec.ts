import { TestBed, async } from '@angular/core/testing';

import { NewComponent } from './new.component';

describe('NewComponent', () => {
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [NewComponent]
      }).compileComponents();
    })
  );

  it(
    'should create the app',
    async(() => {
      console.log('entraaaaa');
      const fixture = TestBed.createComponent(NewComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
    })
  );
});
