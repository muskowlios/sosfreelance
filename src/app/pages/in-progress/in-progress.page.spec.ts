import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InProgressPage } from './in-progress.page';

describe('InProgressPage', () => {
  let component: InProgressPage;
  let fixture: ComponentFixture<InProgressPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InProgressPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InProgressPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
