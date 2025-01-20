import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-user',
  imports: [FormsModule, MatCardModule, MatButtonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  userName = '';
  passWord = '';

  // favoriteFramework = '';

  // showFramework() {
  //   alert(this.favoriteFramework);
  // }
}
