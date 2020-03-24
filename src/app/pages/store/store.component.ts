import { Component, OnInit, OnDestroy } from '@angular/core';

declare function plugin_store(): any;

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styles: []
})
export class StoreComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {
    plugin_store();
  }

  ngOnDestroy(): void{
    plugin_store();
  }

}
