import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { AuthService } from '../login/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  isCollapsed = true;
  mostrarMenu:boolean = false;
  gestor:boolean = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.authService.mostrarMenuEmitter.subscribe(mostrar => 
      this.mostrarMenu = mostrar
    );
    this.authService.mostrarBotaoEmitter.subscribe(mostrar =>
      this.gestor = mostrar
    );
  }

  dashboardRoute(){
    this.router.navigate(['/dashboard']);
  }
  cadEquipesRoute(){
    this.router.navigate(['/cadastrar-equipes']);
  }
  cadRecursosRoute(){
    this.router.navigate(['/cadastrar-recursos']);
  }
  cadProjetosRoute(){
    this.router.navigate(['/cadastrar-projetos']);
  }
  cadAtividadesRoute(){
    this.router.navigate(['/cadastrar-atividades']);
  }

}
