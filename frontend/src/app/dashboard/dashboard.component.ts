import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  id = this.route.snapshot.params.id;
  nome = this.route.snapshot.params.nome;


  ngOnInit(): void {
  }

}
