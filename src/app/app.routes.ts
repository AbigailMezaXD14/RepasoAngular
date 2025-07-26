import { Routes } from '@angular/router';
import { ListarDoctoresComponent } from './componentes/listar-doctores/listar-doctores.component';
import { AgregarDoctorComponent } from './componentes/agregar-doctor/agregar-doctor.component';
import { ConsultaDoctoresComponent } from './componentes/consulta-doctores/consulta-doctores.component';
import { EliminarDoctorComponent } from '../app/componentes/eliminar-doctor/eliminar-doctor.component';
import { ActualizarDoctoresComponent } from '../app/componentes/actualizar-doctores/actualizar-doctores.component';
import { EditarDoctorComponent } from './componentes/editar-doctor/editar-doctor.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';

export const routes: Routes = [
    {path: 'listar', component: ListarDoctoresComponent},
    {path: 'agregar', component: AgregarDoctorComponent},
    {path: 'consulta/:id', component: ConsultaDoctoresComponent},
    {path:'actualizar', component: ActualizarDoctoresComponent},
    {path: 'eliminar', component: EliminarDoctorComponent},
    {path: 'editar/:id', component: EditarDoctorComponent},
    {path: 'contacto', component: FormularioComponent},
    {path: '', redirectTo: 'listar', pathMatch: 'full'},
    {path: '**', redirectTo: 'listar'} //recuerda, para rutas inválidas se regresa aquí
];
