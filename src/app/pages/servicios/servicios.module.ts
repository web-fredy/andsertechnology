import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiciosRoutingModule } from './servicios-routing.module';
import { ServiciosComponent } from './servicios.component';
import { HomeModule } from '../home/home.module';


@NgModule({
  declarations: [ServiciosComponent],
  imports: [
    CommonModule,
    HomeModule,
    ServiciosRoutingModule
  ]
})
export class ServiciosModule { }
