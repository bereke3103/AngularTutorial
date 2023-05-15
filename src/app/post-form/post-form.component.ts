import {
  Component,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { Post } from '../app.component';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss'],
})
export class PostFormComponent {
  //Декоратор Output() Для того, чтобы эти данные отправить родителю
  //To emite -> выбрасывать
  //Нужно обязательно создать экземпляр класса EventEmitter
  @Output() onAdd: EventEmitter<Post> = new EventEmitter<Post>();

  //Этот декоратор применяется к свойству и получает селектор элемента DOM.
  @ViewChild('titleInput') inputRef: ElementRef;

  //Данные для того, чтобы добавить пост
  title = '';
  text = '';

  addPost() {
    if (this.text.trim() && this.title.trim()) {
      const post: Post = {
        title: this.title,
        text: this.text,
      };

      //Теперь используем созданный экземпляр класса onAdd, и вызываем метод emit, чтоб выбросить наружу те данные, которые мы хотим, в нашем случае созданный post
      this.onAdd.emit(post);

      //Для того, чтобы их обновить
      this.title = this.text = '';
    }
  }

  focusTitle() {
    console.log(this.inputRef);
    this.inputRef.nativeElement.focus();
  }
}
