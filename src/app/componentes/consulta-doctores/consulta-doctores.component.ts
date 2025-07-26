import { Component } from '@angular/core';
import { doctores } from '../../../models/doctores';
import { ActivatedRoute } from '@angular/router';
import { DoctoresService } from '../../servicios/doctores.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-consulta-doctores',
  imports: [CommonModule],
  templateUrl: './consulta-doctores.component.html',
  styleUrl: './consulta-doctores.component.css'
})
export class ConsultaDoctoresComponent {

  id!: number;
  doctor!: doctores | null;

  constructor(private route: ActivatedRoute, private servicio: DoctoresService) {}

  ngOnInit(){
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
      this.doctor = this.servicio.getById(this.id);
    })
  }

}
