export class User {
  
    public password: string;
    constructor(
        public pseudo: string,
        public tel: string
    ) {}
    getPassword(){
      return this.password;
    }
    getPseudo(){
      return this.pseudo;
    }
    getTel(){
      return this.tel;
    }
  
  }