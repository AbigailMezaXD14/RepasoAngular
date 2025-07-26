import { Injectable } from '@angular/core';
import formato from '../../data/formato.json';
import { doctores } from '../../models/doctores';


@Injectable({
  providedIn: 'root'
})
export class DoctoresService {

  Doctores:doctores[]=formato;

  constructor() { }

  ngOnInit(): void {

  }

  getAll():doctores[] {

    const recuperaDatos : doctores[] = JSON.parse(localStorage.getItem('doctores') ?? '[]');

    if(recuperaDatos.length === 0) {
      this.Doctores=formato;
    } else {
      this.Doctores=recuperaDatos;
    }

    return this.Doctores;

  }

  getById(idDoc: number): doctores | null {
    const encontrado = this.Doctores.find(doc => doc.id === idDoc);
    
    return encontrado || null;
  }




  create(doctor: doctores): void {
    this.Doctores.push(doctor);

    localStorage.setItem('doctores', JSON.stringify(this.Doctores));
  }


  update(doctorsito: doctores): void {
    const index = this.Doctores.findIndex(doc => doc.id === doctorsito.id);

    if(index !== -1) {
      this.Doctores[index] = doctorsito;

      localStorage.setItem('doctores', JSON.stringify(this.Doctores));
    }


  }



  delete(idDoc: number): void {
    const index = this.Doctores.findIndex(doc => doc.id === idDoc);
    if (index !== -1){
      this.Doctores.splice(index, 1);

      localStorage.setItem('doctores', JSON.stringify(this.Doctores));
    }
  }


}
