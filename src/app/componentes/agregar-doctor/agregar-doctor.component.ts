import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { doctores } from '../../../models/doctores';
import { DoctoresService } from '../../servicios/doctores.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-agregar-doctor',
  imports: [FormsModule],
  templateUrl: './agregar-doctor.component.html',
  styleUrl: './agregar-doctor.component.css'
})
export class AgregarDoctorComponent {

  doctor: doctores = {
    id: 0,
    nombre:'',
    especialidad:'',
    anios_experiencia:0,
    ciudad:'',
    telefono: 0,
    foto: ''

  }

  constructor (private doctoresService : DoctoresService, private router:Router, private route:ActivatedRoute) {}

  mensajeExito= '';
  esFemenino : boolean = false;

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

  guardar() {
    this.doctoresService.create(this.doctor);
    this.limpiar();
    console.log('Doctor: ',this.doctor);
    console.log('¿Es femenino?: ',this.esFemenino);

  }

  limpiar() {
    this.doctor = {
      id: 0,
    nombre:'',
    especialidad:'',
    anios_experiencia:0,
    ciudad:'',
    telefono: 0,
    foto: ''
    }

  

  this.esFemenino = false;
  this.mensajeExito = '¡Formulario enviado exitosamente!';

  setTimeout(()=> {
    this.mensajeExito = '';
    this.router.navigate(['/listar']);


  }, 3000);
}

}
