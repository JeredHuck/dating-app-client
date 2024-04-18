export class User {
  id : number = 0;
  username : string;
  email : string;
  profile!: Profile;
  constructor (user : any) {
    this.id = user.id || 0;
    this.username = user.username || "";
    this.email = user.email || "";
  }
}

export interface Profile {
  id : number;
  bio : string;
  profile_picture_url : string;
}
