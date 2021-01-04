import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewMediaPage } from './view-media.page';

describe('ViewMediaPage', () => {
  let component: ViewMediaPage;
  let fixture: ComponentFixture<ViewMediaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMediaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewMediaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
