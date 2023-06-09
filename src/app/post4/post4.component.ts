import { Component } from '@angular/core';

@Component({
  selector: 'app-post4',
  template: `
    <div class="post4">
      <h2>Post title</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad odio ullam
        dolores non optio quod debitis commodi deleniti voluptas aliquam atque
        assumenda repellendus eius cum itaque, quos accusamus amet qui!
      </p>
    </div>
  `,
  styles: [
    `
      .post4 {
        padding: 5rem;
        border: 2px solid black;
        background: red;
      }

      h2 {
        font-size: 1rem;
      }
    `,
  ],
})
export class Post4Component {}
