import { Booking } from "../../booking/Booking";
import { Mealtype } from "../../booking/mealType/MealType";
import { Employee } from "../../person/Employee";
import { AirplineManager } from "../../person/AirlineStaff/AirlineManager";
import { AirlinePilot } from "../../person/AirlineStaff/AirlinePilot";
import { Passenger } from "../../person/passenger/Passenger";
import { DateTime } from "../dateTime/DateTime";
import { Flight } from "../trip/flight/Flight";

export class Airline {

    constructor(
        private airlineCode: string,
        private airlineName: string,
        private airlineManager: AirplineManager,
        private employees: Employee[],
        private bookings: Booking[]) { }


    public getBooking(): Booking[] {
        return this.bookings;
    }

    public addBooking(...bookings: Booking[]): void {
        for (let booking of bookings) {
            this.bookings.push(booking)
        }
    };


    public getPassengerReturnTickets(flight: Flight){
        let listPassengers: Passenger[] = []
        for (let booking of this.bookings) {
            if (booking.isFlight(flight) && booking.isReturn()) {
                listPassengers.push(booking.getPassenger());
            };
        };
        return listPassengers;
    };

    public isPilot (pilot: AirlinePilot): boolean{
        for (let employee of this.employees) {
            if (employee instanceof AirlinePilot) {
                if (pilot === employee) {
                    return true
                }
            }
        }
        return false
    };


    public getPilotFlight(pilot: AirlinePilot, dateTime: DateTime): number | string{
        let totalFlight: number | string = 0;
        if (this.isPilot(pilot)) {
            for (let booking of this.bookings) {
                totalFlight += booking.getNumberOfFlights(pilot, dateTime);
            }
        } else {
            totalFlight = `Undefined this Pilot`;
        }
        return totalFlight;
    }

    public getTypeOfMeal = (flight: Flight) => {
        let listOfMeal: string[] = [];
        for (let booking of this.bookings) {
            if (booking.isFlight(flight)) {
                listOfMeal.push(Mealtype[booking.getMealType()]);
            };
        };
        return listOfMeal;
    };

   
    public getTotalSalaryOfEmployees = () => {
        let totalSalary: number = 0;
        for (let employee of this.employees) {
            totalSalary += employee.getSalary();
        }
        return totalSalary;
    };
}