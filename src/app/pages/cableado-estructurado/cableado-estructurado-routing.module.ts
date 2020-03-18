import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CableadoEstructuradoComponent } from './cableado-estructurado.component';


const routes: Routes = [
  {path: '', component: CableadoEstructuradoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CableadoEstructuradoRoutingModule { }
