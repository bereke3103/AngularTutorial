import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  //Way Bindings
  title = 'Way Bindings';

  onInput(event: any) {
    this.title = event.target.value;
  }
}
