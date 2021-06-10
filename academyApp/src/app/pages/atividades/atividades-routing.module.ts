import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AtividadesPage } from './atividades.page';

const routes: Routes = [
  {
    path: '',
    component: AtividadesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AtividadesPageRoutingModule {}
