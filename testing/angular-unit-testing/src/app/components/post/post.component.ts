import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent {
  @Input() post: any;
  @Output() delete = new EventEmitter<void>();
  onDelete(event: Event) {
    event.stopPropagation();
    this.delete.emit();
  }
}
