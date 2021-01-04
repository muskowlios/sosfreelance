import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AskAroundYouPage } from './ask-around-you.page';

describe('AskAroundYouPage', () => {
  let component: AskAroundYouPage;
  let fixture: ComponentFixture<AskAroundYouPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AskAroundYouPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AskAroundYouPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
