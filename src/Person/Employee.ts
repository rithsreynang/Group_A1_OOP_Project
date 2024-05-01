import { Person } from "./Person";
import { Gender } from "../Enum/gender";

export class Employee extends Person {
    protected employeeID: number;
    protected salary: number; 
    protected position: string;
    protected hireDate: Date;

    constructor(employee_id: number, salary: number, position: string, hireDat: Date ,firstName: string, lastName: string,gender:Gender,dateOfBirth:string, email: string, phoneNumber: string, nationality: string, address: string, passportNumber: string){
        super(  firstName, 
                lastName,
                gender,
                dateOfBirth, 
                email, 
                phoneNumber, 
                nationality, 
                address, 
                passportNumber)
                this.employeeID = employee_id;
                this.salary = salary;
                this.position = position;
                this.hireDate = hireDat;
    }
    public getSalary() {
        return this.salary;
    }
}