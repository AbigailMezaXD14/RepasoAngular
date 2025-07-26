import { Component } from '@angular/core';
import { DoctoresService } from '../../servicios/doctores.service';
import { doctores } from '../../../models/doctores';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listar-doctores',
  imports: [],
  templateUrl: './listar-doctores.component.html',
  styleUrl: './listar-doctores.component.css'
})
export class ListarDoctoresComponent {

  misDoctores!:doctores[];

  constructor (private doctoresService: DoctoresService) {}

  ngOnInit(): void {
    this.misDoctores=this.doctoresService.getAll();
    console.log(this.doctoresService);

    let doc;
    doc = this.doctoresService.getById(1794);
    console.log(doc);

    



  }

  


}
