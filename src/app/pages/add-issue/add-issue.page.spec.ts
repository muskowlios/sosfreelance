import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddIssuePage } from './add-issue.page';

describe('AddIssuePage', () => {
  let component: AddIssuePage;
  let fixture: ComponentFixture<AddIssuePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddIssuePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddIssuePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
