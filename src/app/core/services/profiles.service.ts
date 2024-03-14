import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Profile } from '../../shared/models/profiles';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProfilesService {

  constructor(private http:HttpClient) { }

  getProfiles(): Observable<Profile[]> {
    return this.http.get<Profile[]>(`${environment.apiUrl}/profiles`)
  }
}
