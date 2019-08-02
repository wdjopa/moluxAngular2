export class User {

  public tel: string;
  public score: number;
  public points: number;
  public parties: number;

  constructor(
    public pseudo: string,
    public password: string
  ) { }
  
  getPassword() {
    return this.password;
  }
  
  getPseudo() {
    return this.pseudo;
  }
  
  getTel() {
    return this.tel;
  }

}