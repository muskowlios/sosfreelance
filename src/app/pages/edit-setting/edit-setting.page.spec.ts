import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditSettingPage } from './edit-setting.page';

describe('EditSettingPage', () => {
  let component: EditSettingPage;
  let fixture: ComponentFixture<EditSettingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSettingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditSettingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
