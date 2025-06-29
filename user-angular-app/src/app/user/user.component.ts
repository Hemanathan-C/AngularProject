import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';


const randomeIndex = Math.floor(Math.random() * DUMMY_USERS.length);
interface User {
  name: string;
  avatar: string;
  id: string;
}
@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
    @Input() user!: User;
    @Input() selected!: boolean;
    @Output() select = new EventEmitter();

    get imagePath() {
        return 'assets/users/' + this.user.avatar;
    }

    onSelectUser(){
      console.log('User selected:', this.user.id);
      this.select.emit(this.user.id);
    }
}
