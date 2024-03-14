export class Profile {
  id : number;
  bio : string;
  profile_picture_url : string;

  constructor(profile : any) {
    this.id = profile.id || 0;
    this.bio = profile.bio || "";
    this.profile_picture_url = profile.profile_picture_url || "";
  }
}
