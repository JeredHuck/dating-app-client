import { Component, Input } from '@angular/core';
import { User } from '../../shared/models/user';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  @Input({required:true}) user:User = new User({})
}
