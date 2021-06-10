import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AtividadesPageRoutingModule } from './atividades-routing.module';

import { AtividadesPage } from './atividades.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AtividadesPageRoutingModule
  ],
  declarations: [AtividadesPage]
})
export class AtividadesPageModule {}
