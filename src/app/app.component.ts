import { Component } from '@angular/core';

export interface Post {
  title: string;
  text: string;
  id?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  posts: Post[] = [
    { title: 'Angular', text: 'Подробная информация об ангуляре', id: 1 },
    { title: 'React', text: 'Подробная информация о Реакте', id: 2 },
  ];
  updatePosts(post: Post) {
    this.posts.unshift(post);
    console.log('updated post:', post);
  }
}
