import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Profile } from '../../shared/models/profiles';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProfilesService {

  constructor(private http:HttpClient) { }

  setProfiles(): Observable<Profile[]> {
    return this.http.get<Profile[]>(`${environment.apiUrl}/profiles`)
  }

  getProfile(id: number): Observable<Profile> {
    return this.http.get<Profile[]>(`${environment.apiUrl}/profiles/${id}`).pipe(
      catchError(this.handleError)
    )
  }

  updateProfile(id: number, updatedProfile: Profile): Observable<Profile> {
    return this.http.patch<Profile[]>(`${environment.apiUrl}/profiles/${id}`, updatedProfile).pipe(
      catchError(this.handleError)
    )
  }

  private handleError(error: any): Observable<any> {
    console.error('API error:', error);
    return throwError(() => error);
  }
}
