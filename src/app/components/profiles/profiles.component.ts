import { Component, Input } from '@angular/core';
import { Profile } from '../../shared/models/profiles';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-profiles',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './profiles.component.html',
  styleUrl: './profiles.component.scss'
})
export class ProfilesComponent {
  @Input({required:true}) profile:Profile = new Profile({})
}
