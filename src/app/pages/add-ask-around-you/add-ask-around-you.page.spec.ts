import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddAskAroundYouPage } from './add-ask-around-you.page';

describe('AddAskAroundYouPage', () => {
  let component: AddAskAroundYouPage;
  let fixture: ComponentFixture<AddAskAroundYouPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAskAroundYouPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddAskAroundYouPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
