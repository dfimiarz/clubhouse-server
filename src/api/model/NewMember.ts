export default class NewMember{

    firstname: string; 
    lastname: string; 
    email: string; 
    phone: string; 
    gender: string; 
    pin: string;
    rank: number;

    constructor (   firstname: string, 
                    lastname: string, 
                    email: string, 
                    phone: string, 
                    gender: string, 
                    pin: string,
                    rank: number ){
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.pin = pin;
        this.phone = phone;
        this.gender = gender;
        this.rank = rank;
    }

}