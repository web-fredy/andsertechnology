import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

declare function plugin_home(): any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    plugin_home();
  }

  public tienda(): void{
    this.router.navigate(['/store']);
  }

  ngOnDestroy(): void{
    plugin_home();
  }
  
}
