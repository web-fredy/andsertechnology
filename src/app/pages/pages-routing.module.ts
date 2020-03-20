import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreComponent } from './store/store.component';


const routes: Routes = [
  {
    path: 'store',
    component: StoreComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./store/store.module').then(m => m.StoreModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
