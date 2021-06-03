import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadAtividadesComponent } from './cad-atividades/cad-atividades.component';
import { CadEquipesComponent } from './cad-equipes/cad-equipes.component';
import { CadProjetosComponent } from './cad-projetos/cad-projetos.component';
import { CadRecursosComponent } from './cad-recursos/cad-recursos.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"login", component: LoginComponent},
  {path:"dashboard", component: DashboardComponent, canActivate:[AuthGuard]},
  {path:"dashboard/:id/:equipe", component: DashboardComponent, canActivate:[AuthGuard]},
  {path:"cadastrar-equipes", component: CadEquipesComponent, canActivate:[AuthGuard]},
  {path:"cadastrar-projetos", component: CadProjetosComponent, canActivate:[AuthGuard]},
  {path:"cadastrar-recursos", component: CadRecursosComponent, canActivate:[AuthGuard]},
  {path:"cadastrar-atividades", component: CadAtividadesComponent,canActivate:[AuthGuard]} 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
