
export class User {
  public readonly id: string;

  public name: string;
  public email: string;
  public password: string;

  constructor(props: Omit<User, 'id'>, id?:string) {
    //Passando as propiedades para o this ex = this.name = name
    Object.assign(this, props)

    if(!id) {
      this.id = String(Math.random())
    }

  }


}