import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfilesService } from '../../../core/services/profiles.service';
import { Profile } from '../../../shared/models/profiles';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile-edit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './profile-edit.component.html',
  styleUrl: './profile-edit.component.scss'
})
export class ProfileEditComponent implements OnInit{
  profile: any = {};
  updatedProfile: Profile = {
    id: 0,
    bio: '',
    profile_picture_url: ''
  }
  errorMessage: string = '';

  constructor(private route: ActivatedRoute,
              private pService: ProfilesService) {}

  ngOnInit(): void {
      const profileId = this.route.snapshot.params['id'];
      this.pService.getProfile(profileId).subscribe({
        next: (data:any) => {
          this.profile = data;
        },
        error: (error:any) => {
          this.errorMessage = 'Failed to fetch profile data';
          console.error(error)
        }
      })
  }

  onSubmit() {
    this.pService.updateProfile(this.profile.id, this.updatedProfile).subscribe({
      next: () => {
        console.log('Profile was updated successfully')
      },
      error: (error:any) => {
        this.errorMessage = 'Failed to update profile';
        console.error(error)
      }
    })
  }
}
