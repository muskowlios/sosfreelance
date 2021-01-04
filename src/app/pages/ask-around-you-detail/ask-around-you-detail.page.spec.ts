import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AskAroundYouDetailPage } from './ask-around-you-detail.page';

describe('AskAroundYouDetailPage', () => {
  let component: AskAroundYouDetailPage;
  let fixture: ComponentFixture<AskAroundYouDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AskAroundYouDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AskAroundYouDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
