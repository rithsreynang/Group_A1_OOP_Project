import { Booking } from "../booking/Booking";
import { AirportController } from "../person/AirportStaff/AirportController";
import { Airline } from "./airlines/Airline";
import { Gate } from "./gate/Gate";

export class Airport {

    constructor(private name: string,
        private airportCode: string,
        private gates: Gate[],
        private airportController: AirportController,
        private airlines: Airline[]) { }


    public getPassengerDetail(bookingReferenceNumber: string): Booking | undefined {
        for (let airline of this.airlines) {
            for (let booking of airline.getBooking()) {
                if (booking.getBookingReferenceNumber() === bookingReferenceNumber) {
                    return booking;
                };
            };
        };
        return undefined;
    };
}