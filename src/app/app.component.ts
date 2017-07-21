import { Component } from '@angular/core';

declare var test: any;
declare var test2: any;
declare var halloWelt: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app works!';

  f() {
    // test();
    halloWelt();
  }
}

