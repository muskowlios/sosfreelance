import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyIssuePage } from './my-issue.page';

describe('MyIssuePage', () => {
  let component: MyIssuePage;
  let fixture: ComponentFixture<MyIssuePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyIssuePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyIssuePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
