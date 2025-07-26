import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaDoctoresComponent } from './consulta-doctores.component';

describe('ConsultaDoctoresComponent', () => {
  let component: ConsultaDoctoresComponent;
  let fixture: ComponentFixture<ConsultaDoctoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultaDoctoresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaDoctoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
