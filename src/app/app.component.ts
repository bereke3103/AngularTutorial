import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  //!eventBindings
  inputValue = 'inpueValue';
  keyUpValue = 'keyUp';
  title = 'Dynamic title';
  img = 'https://logowik.com/content/uploads/images/react7473.logowik.com.webp';

  constructor() {
    setTimeout(() => {
      //одностороняя связка
      //вот здесь мы html bind-им с typescrt-ом
      this.img =
        'https://w7.pngwing.com/pngs/620/322/png-transparent-angularjs-ruby-on-rails-typescript-web-application-icon-hacker-angle-triangle-logo.png';
    }, 5000);
  }

  //!eventBindings
  onInput(event: any) {
    console.log('event:', event);
    this.inputValue = event.target.value;
  }

  onKeyUp(event: any) {
    this.keyUpValue = event.target.value;
  }
}
