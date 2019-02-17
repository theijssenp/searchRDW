import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KentekenDetailsComponent } from './kenteken-details.component';

describe('KentekenDetailsComponent', () => {
  let component: KentekenDetailsComponent;
  let fixture: ComponentFixture<KentekenDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KentekenDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KentekenDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
