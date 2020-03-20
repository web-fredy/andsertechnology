import { Component, OnInit } from '@angular/core';

declare function plugin_menu(): any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements OnInit{
  title = 'andsergthegnology';

  ngOnInit(): void{
    plugin_menu();
  }
}
