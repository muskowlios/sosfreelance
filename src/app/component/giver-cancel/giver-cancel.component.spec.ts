import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GiverCancelComponent } from './giver-cancel.component';

describe('GiverCancelComponent', () => {
  let component: GiverCancelComponent;
  let fixture: ComponentFixture<GiverCancelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiverCancelComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GiverCancelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
