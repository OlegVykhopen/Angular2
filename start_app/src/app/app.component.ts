import { Component } from '@angular/core';
import {LifecycleComponent} from "./lifecycle.component";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']/*,
  directives: [LifecycleComponent]*/
})
export class AppComponent {
  title = 'app works!';
}
