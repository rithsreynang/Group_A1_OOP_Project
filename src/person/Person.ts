export abstract class Person {
    constructor(
        protected firstName: string,
        protected lastName: string,
        protected age: number,
        private email: string,
        private address: string
    ) { 
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
        this.address = address;
    }
}