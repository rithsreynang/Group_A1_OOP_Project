import { Employee } from "../Employee";

export class airPortController extends Employee{
    constructor(firstName: string, lastName: string, email:string, phone: number, employee_id: string, salary: string){
        super(employee_id, salary, firstName, lastName, email, phone);
    }
}