import {
  Component,
  ContentChild,
  ElementRef,
  Input,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { Post } from '../app.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  // Для того, чтобы убрать хеширование стилей
  encapsulation: ViewEncapsulation.None,
})
export class PostComponent implements OnInit {
  //Input -> декоратор, означающий, что он принимает от родителя (для данного случае от App.Component.ts)

  @ContentChild('info', { static: true }) ElementRef: ElementRef;

  @Input() myPost: Post;
  constructor() {}
  ngOnInit(): void {
    console.log(this.ElementRef.nativeElement);
  }
}
