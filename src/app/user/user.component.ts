import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input() user: User;
  @Output() select = new EventEmitter<User>();
  @Output() delete = new EventEmitter<number>();

  handleSelect() {
    this.select.emit(this.user);
  }

  handleDelete() {
    this.delete.emit(this.user.id);
  }
}
