import { Component, OnInit } from '@angular/core';
import { ProfilesService } from '../../core/services/profiles.service';
import { Profile } from '../../shared/models/profiles';
import { ProfilesComponent } from '../../components/profiles/profiles.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ProfilesComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit{
  profiles: Profile[] = [];

  constructor(private pService:ProfilesService) {}

  ngOnInit(): void {
      this.pService.getProfiles().subscribe({
        next: (profiles: Profile[]) => {
          this.profiles = profiles
        },
        error: (error) => {
          console.error('Error fetching profiles', error)
        }
      })
  }
}
