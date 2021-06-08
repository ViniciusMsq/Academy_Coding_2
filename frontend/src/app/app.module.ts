import {HttpClientModule} from '@angular/common/http';

import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AuthService } from './login/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CadRecursosComponent } from './cad-recursos/cad-recursos.component';
import { CadEquipesComponent } from './cad-equipes/cad-equipes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import { CadProjetosComponent } from './cad-projetos/cad-projetos.component';
import { CadAtividadesComponent } from './cad-atividades/cad-atividades.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { DonutChartComponent } from './donut-chart/donut-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent,
    DashboardComponent,
    CadRecursosComponent,
    CadEquipesComponent,
    CadProjetosComponent,
    CadAtividadesComponent,
    BarChartComponent,
    DonutChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    NgApexchartsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    HttpClientModule,
    AuthService,
    DashboardComponent,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
