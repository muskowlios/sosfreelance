import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelectDistancePage } from './select-distance.page';

describe('SelectDistancePage', () => {
  let component: SelectDistancePage;
  let fixture: ComponentFixture<SelectDistancePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectDistancePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelectDistancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
