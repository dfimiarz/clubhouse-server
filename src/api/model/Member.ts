export default class Member{

    id: number | null;
    firstname: string; 
    lastname: string; 
    email: string; 
    phone: string; 
    gender: string; 
    pin: string; 
    username: string;
    password: string;
    rank: number;

    constructor (   firstname: string, 
                    lastname: string, 
                    email: string, 
                    phone: string, 
                    gender: string, 
                    pin: string, 
                    username: string,
                    password: string,
                    rank: number ){
        this.id = null,
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.pin = pin;
        this.phone = phone;
        this.gender = gender;
        this.username = username;
        this.password = password;
        this.rank = rank;
    }

}