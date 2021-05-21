import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadEquipesComponent } from './cad-equipes/cad-equipes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"login", component: LoginComponent},
  {path:"dashboard/:id", component: DashboardComponent, canActivate:[AuthGuard]},
  {path:"dashboard", component: DashboardComponent, canActivate:[AuthGuard]},
  {path:"cadastrar-equipes", component: CadEquipesComponent} 



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
