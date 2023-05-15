import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

export interface Post {
  title: string;
  text: string;
  id?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    setTimeout(() => {
      //Для того, чтобы он поменялся, нужно внутри декоратора @Component добавить ChangeDetectionStrategy.Default..
      //Но, для того, чтобы менялся объект для оптимизации, вместо Default нужно использовать onPush.
      console.log('timeout is over');
      this.posts[0] = {
        title: 'changed',
        text: 'text',
        id: 33,
      };
    }, 3000);
  }
  posts: Post[] = [
    { title: 'Angular', text: 'Подробная информация об ангуляре', id: 1 },
    { title: 'React', text: 'Подробная информация о Реакте', id: 2 },
  ];
  updatePosts(post: Post) {
    this.posts.unshift(post);
    console.log('updated post:', post);
  }
}
