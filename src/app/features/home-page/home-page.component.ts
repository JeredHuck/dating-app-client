import { Component, OnInit } from '@angular/core';
import { Profile } from '../../shared/models/profiles';
import { UsersService } from '../../core/services/users.service';
import { User } from '../../shared/models/user';
import { UsersComponent } from '../../components/users/users.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [UsersComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit{
  profiles: Profile[] = [];
  users: User[] = [];

  constructor(private uService:UsersService) {}

  ngOnInit(): void {
      this.uService.setUsers().subscribe({
        next: (users: User[]) => {
          this.users = users
        },
        error: (error) => {
          console.error('Error fetching users', error)
        }
      })
  }
}
