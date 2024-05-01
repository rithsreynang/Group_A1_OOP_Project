
export abstract class Person {
    constructor(
        protected firstName: string,
        protected lastName: string,
        protected email: string,
        protected phone: string,
        protected employee_id: string,
        protected salary: number,
    ) { }
}