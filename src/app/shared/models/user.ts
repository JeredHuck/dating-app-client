export class User {
  id : number = 0;
  username : string;
  email : string;

  constructor (user : any) {
    this.id = user.id || 0;
    this.username = user.username || "";
    this.email = user.email || "";
  }
}
