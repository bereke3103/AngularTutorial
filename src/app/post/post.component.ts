import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../app.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent {
  //Input -> декоратор, означающий, что он принимает от родителя (для данного случае от App.Component.ts)

  @Input() myPost: Post;
  constructor() {}
}
