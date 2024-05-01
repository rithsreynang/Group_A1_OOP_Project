import { Employee } from "../Employee";
import { Gender } from "../../Enum/gender";

export class airlineManager extends Employee{
    constructor(
        employee_id: number,
        salary: number, 
        position: string, 
        hireDat: Date ,
        firstName: string, 
        lastName: string,
        gender:Gender,
        dateOfBirth:string, 
        email: string, 
        phoneNumber: string, 
        nationality: string, 
        address: string, 
        passportNumber: string){
            super(employee_id, salary, position, hireDat, firstName, lastName, gender, dateOfBirth, email, phoneNumber, nationality, address, passportNumber);
            
        }
}