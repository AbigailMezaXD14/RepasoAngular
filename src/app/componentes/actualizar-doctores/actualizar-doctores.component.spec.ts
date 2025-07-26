import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarDoctoresComponent } from './actualizar-doctores.component';

describe('ActualizarDoctoresComponent', () => {
  let component: ActualizarDoctoresComponent;
  let fixture: ComponentFixture<ActualizarDoctoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActualizarDoctoresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarDoctoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
