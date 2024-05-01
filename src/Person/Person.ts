import { Gender } from "../Enum/gender";

export abstract class Person {
    protected firstName: string;
    protected lastName: string;
    protected gender: Gender;
    protected dateOfBirth: Date;
    protected email: string;
    protected phoneNumber: string;
    protected Nationally: string; 
    protected address: string;    
    private passportNumber: string;

    constructor(firstName: string, lastName: string,gender:Gender,dateOfBirth:string, email: string, phoneNumber: string, nationality: string, address: string, passportNumber: string){
        
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.Nationally = nationality;
        this.address = address;
        this.passportNumber = passportNumber;
        this.gender = gender;
    }
}
