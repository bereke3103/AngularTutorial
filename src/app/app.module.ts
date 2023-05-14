import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { PostComponent } from './post/post.component';
import { PostFormComponent } from './post-form/post-form.component';

@NgModule({
  //Сюда мы передаем все компоненты, созданные нами
  declarations: [AppComponent, PostComponent, PostFormComponent],
  imports: [
    BrowserModule,
    //Way Bindings
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
