import { Component, OnInit, OnDestroy } from '@angular/core';

declare function plugin_menu(): any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {
    plugin_menu();
  }
  ngOnDestroy(): void {
    plugin_menu();
  }

}
