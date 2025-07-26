import { Component } from '@angular/core';
import { DoctoresService } from '../../servicios/doctores.service';
import { doctores } from '../../../models/doctores';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actualizar-doctores',
  imports: [],
  templateUrl: './actualizar-doctores.component.html',
  styleUrl: './actualizar-doctores.component.css'
})
export class ActualizarDoctoresComponent {

  constructor (private doctoresService: DoctoresService, private router: Router) {}

  doctores: doctores[] = [];

  ngOnInit(): void {
    this.doctores=this.doctoresService.getAll();
  }

  irAEditar(id:number) {
    this.router.navigate(['/editar', id]);
  }


}
