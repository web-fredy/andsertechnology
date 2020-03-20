import { Component, OnInit } from '@angular/core';

declare function plugin_store(): any;

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styles: []
})
export class StoreComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    plugin_store();
  }

}
