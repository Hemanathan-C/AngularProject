import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';


const randomeIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
    @Input() name: string = 'Hemanathan';
    @Input() avatar: string = 'avatar.png';
    @Input() id: string = "u1";

    @Output() select = new EventEmitter();

    get imagePath() {
        return 'assets/users/' + this.avatar;
    }

    onSelectUser(){
      this.select.emit(this.id);
    }
}
