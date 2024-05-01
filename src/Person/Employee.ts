import { Person } from "./Person";
import { DepartmantType } from "../Enum/DepartmentType";


export class Employee extends Person {
    private employeeID: number;
    protected salary: number; 
    private position: string;
    private hireDate: Date;
    
}
