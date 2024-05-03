import { Employee } from "../Employee";

export class AirlineChef extends Employee {
    constructor(
        firstName: string,
        lastName: string,
        age: number,
        email: string,
        address: string,
        employeeID: string,
        salary: number,
    ) {
        super(firstName, lastName,age, email,address, employeeID, salary)
    }
}