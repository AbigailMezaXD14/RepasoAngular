import { Component } from '@angular/core';
import { DoctoresService } from '../../servicios/doctores.service';
import { doctores } from '../../../models/doctores';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-editar-doctor',
  imports: [FormsModule],
  templateUrl: './editar-doctor.component.html',
  styleUrl: './editar-doctor.component.css'
})
export class EditarDoctorComponent {

  doctor: doctores={
    id:0,
    nombre: '',
    especialidad: '',
    anios_experiencia: 0,
    ciudad: '',
    telefono: 0,
    foto: ''
  };

  mensajeExito:string = "";

  esFemenino:boolean=false;

  constructor (private doctoresService: DoctoresService, private router:Router, private route:ActivatedRoute) {}



  ngOnInit():void {
    this.route.paramMap.subscribe(params => {
      const id= Number(params.get('id'));
      const encontrado = this.doctoresService.getById(id);

      if(encontrado !== null) {
        this.doctor = { ... encontrado};
      } 
      else {
        this.mensajeExito="Empleado no encontrado";
      }
    });  
  }

  actualizar():void {
    this.doctoresService.update(this.doctor);
    this.mensajeExito=`¡Empleado con id ${this.doctor.id} actualizado!`;

  setTimeout( () => {
    this.mensajeExito="";
    this.router.navigate(['/actualizar']);
  }, 3000);

  }

  asignarFotoAleatoria(){
    let genero;
    const id = Math.floor(Math.random()*100);
    if(this.esFemenino){
      genero= 'women';
    } else {
      genero= 'men';
    }
    this.doctor.foto = `https://randomuser.me/api/portraits/${genero}/${id}.jpg`;
  }

}
