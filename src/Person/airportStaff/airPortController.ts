import { Employee } from "../Employee";

export class airPortController extends Employee{
    constructor(firstName: string, lastName: string, email:string, phone: string, employee_id: string, salary: number){
        super(employee_id, salary, firstName, lastName, email, phone);
    }
}