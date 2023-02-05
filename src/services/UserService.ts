import { IUser } from './../models/IUser';


export class UserService{
    private static users:IUser[] = [
        { sno: 1, name: "Parma Ram", age: 25 },
      { sno: 2, name: "Deepak", age: 28 },
      { sno: 3, name: "Mohan", age: 21 },
    ]

    public static getAllUsers() {
        return this.users
    }
}
