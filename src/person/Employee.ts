import { Person } from "./Person";

export class Employee extends Person {

    constructor(
        firstName: string,
        lastName: string,
        age: number,
        email: string,
        address: string,
        protected employeeID: string,
        protected salary: number) {
        super(firstName, lastName, age, email, address);
    }

    public getSalary= ()=> this.salary;
}



