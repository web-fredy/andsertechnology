import { Component, OnInit } from '@angular/core';

declare function plugin_menu(): any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    plugin_menu();
  }

}
