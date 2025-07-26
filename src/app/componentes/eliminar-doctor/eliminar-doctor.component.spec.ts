import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarDoctorComponent } from './eliminar-doctor.component';

describe('EliminarDoctorComponent', () => {
  let component: EliminarDoctorComponent;
  let fixture: ComponentFixture<EliminarDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EliminarDoctorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
