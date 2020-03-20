import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare function plugin_menu(): any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    plugin_menu();
  }

  public tienda(): void{
    this.router.navigate(['/store']);
  }

}
