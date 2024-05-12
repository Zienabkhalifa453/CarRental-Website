import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css'
})
export class CommentsComponent {

  rating=0;
@Input()readonly :boolean=false;

  setRating(value:number)
  {

    if(this.readonly)
      {
        return
      }
this.rating=value;
  }

}
