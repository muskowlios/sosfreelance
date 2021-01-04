import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OtherUserProfilePage } from './other-user-profile.page';

describe('OtherUserProfilePage', () => {
  let component: OtherUserProfilePage;
  let fixture: ComponentFixture<OtherUserProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherUserProfilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OtherUserProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
