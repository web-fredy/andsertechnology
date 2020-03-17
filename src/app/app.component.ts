import { Component, OnInit } from '@angular/core';

declare function init_plugin();
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements OnInit{
  title = 'andsergthegnology';

  ngOnInit() {
    init_plugin();
  }
}
