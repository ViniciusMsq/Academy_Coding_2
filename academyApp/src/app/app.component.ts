import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Atividades', url: 'atividades', icon: 'paper-plane'},
  ];
  public labels = ['Academy Coding', 'Unifai', 'Vinicius Mesquini', 'Alexandre Neves'];
  constructor() {}
}
