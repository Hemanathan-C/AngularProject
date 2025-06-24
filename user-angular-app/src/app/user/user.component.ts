import { Component, Input } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';


const randomeIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
    @Input({}) name: string = 'Hemanathan';
    @Input() avatar: string = 'avatar.png';

    get imagePath() {
        return 'assets/users/' + this.avatar;
    }
}
