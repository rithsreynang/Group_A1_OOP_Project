import { Employee } from "../Employee";
export class AirlineManager extends Employee {
    constructor(
        firstName: string,
        lastName: string,
        email: string,
        phone: string,
        employee_id: string,
        salary: number,
    ) { 
        super( firstName, lastName,email,phone,employee_id,salary );
    }
}