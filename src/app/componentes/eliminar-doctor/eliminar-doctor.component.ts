import { Component } from '@angular/core';
import { DoctoresService } from '../../servicios/doctores.service';
import { doctores } from '../../../models/doctores';

@Component({
  selector: 'app-eliminar-doctor',
  imports: [],
  templateUrl: './eliminar-doctor.component.html',
  styleUrl: './eliminar-doctor.component.css'
})
export class EliminarDoctorComponent {

  constructor (private doctoresService : DoctoresService) {}
  
  msjEliminado: String = "";
  timeoutID:any;

   
  doctores: doctores[] =[];

  ngOnInit(): void {
    this.cargarDoctores();
  }

  cargarDoctores(): void {
    this.doctores = this.doctoresService.getAll();
  }

eliminarDoctor(id:number){
  this.doctoresService.delete(id);
  console.log(`Empleado con ID ${id} eliminado`);
  this.cargarDoctores();
  this.msjEliminado=`Empleado con ID ${id} eliminado`;
  clearTimeout(this.timeoutID);
  this.timeoutID=setTimeout(()=> {
    this.msjEliminado="";
  }, 3000);


}




}
