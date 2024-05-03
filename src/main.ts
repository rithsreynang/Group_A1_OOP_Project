// ======================================== Class import ==================
import { Airport } from "./airport/Airport";
import { Airline } from "./airport/airlines/Airline";
import { DateTime } from "./airport/dateTime/DateTime";
import { Gate } from "./airport/gate/Gate";
import { Trip } from "./airport/trip/Trip";
import { Airplane } from "./airport/trip/Airplane/Airplane";
import { BookingFlight } from "./airport/trip/flight/BookingFlight";
import { Flight } from "./airport/trip/flight/Flight";
import { Route } from "./airport/trip/route/Route";
import { FareClass } from "./airport/trip/seatLayout/FareClass";
import { SeatLayout } from "./airport/trip/seatLayout/SeatLayout";
import { Booking } from "./booking/Booking";
import { Baggage } from "./booking/baggage/Baggage";
import { Mealtype } from "./booking/mealType/MealType";
import { Employee } from "./person/Employee";
import { AirlineChef } from "./person/AirlineStaff/AirlineChef";
import { AirplineManager } from "./person/AirlineStaff/AirlineManager";
import { AirlinePilot } from "./person/AirlineStaff/AirlinePilot";
import { AirportController } from "./person/AirportStaff/AirportController";
import { Passenger } from "./person/passenger/Passenger";



// //passenger
let passenger1 = new Passenger("Dany", "Ney",25,"dany@gamil.com","Cambodia","2AB", []);
let passenger2 = new Passenger("Vanny", "Chan",20,"vanny.Chan@gamil.com","Phnom Penh, Cambodia","25AB", []);
let passenger3 = new Passenger("Kemleang", "lor",21,"lor.kemleang168@gamil.com","Phnom Penh, Cambodia","04AB", []);


// Airport staff
let airportController1 = new AirportController("Dyna", "Phung",25,"dany.phung@airport.com", "KPC","01", 1000);
let airportController2 = new AirportController("Sovannarith", "Penh",22,"sovannarith.penh@airport.com", "PP","02", 1000);
let airportController3 = new AirportController("Senghak", "Chhun",22,"senghak.chhun@airport.com", "KPC","03", 1000);
let airportController4 = new AirportController("Chhaiya", "Sophorn",21,"chhaiya.sophorn@airport.com", "BTB","04", 1000);


// // Airline staff
let airlinePilot1 = new AirlinePilot("John","Doe",35,"john.doe@employee.com","KPC","P12345",600);
let airlinePilot2 = new AirlinePilot("Dara","Seav",35,"dara.seav@employee.com","KPS","P12345",600);
let airlinePilot3 = new AirlinePilot("Malen","keov",35,"malen.keov@employee.com","PP","P12345",700);
let airlinePilot4 = new AirlinePilot("Alysa","Chea",35,"alysa.chea@employee.com","PP","P12345",600);


let airlineChef1 = new AirlineChef("Sokkaov", "Sak", 22, "sokkaov.sak@employee.com", "PP" ,"A1", 700);
let airlineChef2 = new AirlineChef("Chhik", "Mora", 25, "Chik.mora@employee.com", "PP", "A2", 700);

let airlineManager1 = new AirplineManager("Samon", "ki",25, "samorn.ki@employee.com","PP" ,"A1", 5000)
let airlineManager2 = new AirplineManager("Sara", "mama",26, "sara.mama@employee.com","KPC" ,"A2", 5000)
let airlineManager3 = new AirplineManager("Liya", "Arn",23, "samorn.ki@employee.com","PP" ,"A1", 5000)


// // seat layouts
let seatLayout1 = new SeatLayout(`A1`, FareClass.Business);
let seatLayout2 = new SeatLayout(`A2`, FareClass.Business);
let seatLayout3 = new SeatLayout(`A3`, FareClass.Business);
let seatLayout4 = new SeatLayout(`A4`, FareClass.Business);
let seatLayout5 = new SeatLayout(`A5`, FareClass.Business);
let seatLayout6 = new SeatLayout(`B1`, FareClass.EconomyFlex);
let seatLayout7 = new SeatLayout(`B2`, FareClass.EconomyFlex);
let seatLayout8 = new SeatLayout(`B3`, FareClass.EconomyFlex);
let seatLayout9 = new SeatLayout(`B4`, FareClass.EconomyFlex);
let seatLayout10 = new SeatLayout(`B5`, FareClass.EconomyFlex);
let seatLayout11 = new SeatLayout(`C1`, FareClass.EconomyClassic);
let seatLayout12 = new SeatLayout(`C2`, FareClass.EconomyClassic);
let seatLayout13 = new SeatLayout(`C3`, FareClass.EconomyClassic);
let seatLayout14 = new SeatLayout(`C4`, FareClass.EconomyClassic);
let seatLayout15 = new SeatLayout(`C5`, FareClass.EconomyClassic);

// // Airplane
let airplane1 = new Airplane(`N12345`, [seatLayout1,
    seatLayout2, seatLayout3, seatLayout4, seatLayout5,
    seatLayout6, seatLayout7, seatLayout8, seatLayout9,
    seatLayout10, seatLayout11, seatLayout12, seatLayout13,
    seatLayout14, seatLayout15]);

let airplane3 = new Airplane(`VH-ZZZ`, [seatLayout1,
    seatLayout2, seatLayout3, seatLayout4, seatLayout5,
    seatLayout6, seatLayout7, seatLayout8, seatLayout9,
    seatLayout10, seatLayout11, seatLayout12, seatLayout13,
    seatLayout14, seatLayout15]);

let airplane4 = new Airplane(`RP-C1029`, [seatLayout1,
    seatLayout2, seatLayout3, seatLayout4, seatLayout5,
    seatLayout6, seatLayout7, seatLayout8, seatLayout9,
    seatLayout10, seatLayout11, seatLayout12, seatLayout13,
    seatLayout14, seatLayout15]);

// Airline 
let airline1 = new Airline("YY-LW3", "Cambodia Angkor Airline", airlineManager1, [airlinePilot1, airlinePilot2, airlineChef1], []);
let airline2 = new Airline("BB-MM0", "Chong Chaov Airline", airlineManager2, [airlinePilot1, airlinePilot2, airlineChef1], []);
let airline3 = new Airline("LH-YO2", "Phom Penh airline", airlineManager3, [airlinePilot1, airlinePilot2, airlineChef1], []);

// // Gate 
let gate1 = new Gate("1A","Gate1");
let gate2 = new Gate("2A","Gate2");
let gate3 = new Gate("3A","Gate3");
let gate4 = new Gate("4A","Gate4");
let gate5 = new Gate("1B","Gate5");
let gate6 = new Gate("2B","Gate6");
let gate7 = new Gate("3B","Gate7");
let gate8 = new Gate("4B","Gate8");


// // Airports
let airport1 = new Airport(`Phnom Penh International Airport`, `PNH`, [gate1, gate2, gate3, gate4], airportController1, [airline1, airline2, airline3]);
let airport2 = new Airport(`Don Mueang International Airport`, `DMK`, [gate5, gate6, gate7, gate8], airportController4, [airline1, airline2, airline3]);
let airport3 = new Airport(`Changi Airport Singapore`, `SIN`, [gate1, gate2, gate3, gate4], airportController3, [airline1, airline2, airline3]);

// // date times
let dateTime1 = new DateTime(10, "May", 2023, "12AM");
let dateTime2 = new DateTime(11, "May", 2023, "12AM");
let dateTime3 = new DateTime(12, "May", 2023, "12AM");
let dateTime4 = new DateTime(13, "May", 2023, "12AM");
let dateTime5 = new DateTime(14, "May", 2023, "12AM");
let dateTime6 = new DateTime(15, "May", 2023, "12AM");

// // routes
let route1 = new Route(dateTime1, dateTime3, airport2, airport1);
let route2 = new Route(dateTime2, dateTime4, airport3, airport1);
let route3 = new Route(dateTime6, dateTime5, airport1, airport3);
let route4 = new Route(dateTime1, dateTime3, airport1, airport2);

// // Flights
let flight1 = new Flight("CX123", airlinePilot1, airline1, route1, gate1, airplane1);
let flight2 = new Flight("SQ456", airlinePilot2, airline2, route2, gate2, airplane3);
let flight3 = new Flight("AA789", airlinePilot2, airline3, route3, gate3, airplane4);
let flight4 = new Flight("EK101", airlinePilot4, airline3, route4, gate4, airplane3);

// ----------------------------Booking------------------------

// // booking flight
let bookingFlight1 = new BookingFlight(flight1, seatLayout1);
let bookingFlight2 = new BookingFlight(flight2, seatLayout2);
let bookingFlight3 = new BookingFlight(flight3, seatLayout10);
let bookingFlight4 = new BookingFlight(flight4, seatLayout12);
let bookingFlight5 = new BookingFlight(flight2, seatLayout5);

// // trips
let trip1 = new Trip([bookingFlight1, bookingFlight2, bookingFlight3]);
let trip2 = new Trip([bookingFlight3, bookingFlight4, bookingFlight5]);
let trip3 = new Trip([bookingFlight1, bookingFlight2, bookingFlight3]);
let trip4 = new Trip([bookingFlight3, bookingFlight4, bookingFlight5]);


// // baggage 
let baggage1 = new Baggage("5678901234", "T220", 25, airport1 );
let baggage2 = new Baggage("5678901234", "T222", 30, airport1 );
let baggage3 = new Baggage("5678901234", "T224", 50, airport2 );
let baggage4 = new Baggage("5678901234", "T226", 10, airport2 );
let baggage5 = new Baggage("5678901234", "T228", 20, airport3 );
let baggage6 = new Baggage("5678901234", "T230", 40, airport3 );


// // bookings 
let booking1 = new Booking(`AB456C`, passenger1, [baggage1, baggage2], Mealtype.Halal, trip1, trip4);
let booking2 = new Booking(`AB456D`, passenger2, [baggage3, baggage4], Mealtype.DairyFree, trip3, trip4);
let booking3 = new Booking(`AB456E`, passenger3, [baggage6, baggage5], Mealtype.Kosher, trip3);

// // add booking to passengers
passenger1.addBooking(booking1);
passenger2.addBooking(booking2);
passenger3.addBooking(booking3);


// // add booking to ariline 
airline1.addBooking(booking1, booking2, booking3);
airline2.addBooking(booking1, booking3);
airline3.addBooking(booking3);


// ------------------------------------Testing --------------------------------



/* 
User story1 ===> As an airport controller, I need to get the full details of a passenger’s trip from their Booking 
Reference Number (flights, bags, customer information…)
*/

// console.log(airport1.getPassengerDetail('AB456C'));

/* 
User story2 ===> As an airline manager, I want to know for a given flight, how many passengers have return 
tickets.
*/

// console.log(airline1.getPassengerReturnTickets(flight1));

/* 
User story3 ===> As an airline pilot, I want to know, for a given date, how many flights I have to join.
*/

// console.log(airline1.getPilotFlight(airlinePilot1,dateTime1));

/* 
User story4 ===>  As an airline chef, I need to know, for a given flight, how many of each meal type I need to 
prepare
*/

// console.log(airline1.getTypeOfMeal(flight1));

/* 
User story5 ===> As a passenger, I want to know which gate my plane is waiting at.
 */

// console.log(airline1.getTotalSalaryOfEmployees())

/*
User story6 ===> As a passenger, I want to know, for a given date and flight number what is the gate number I need to go to
 */
console.log(passenger1.getGateNumber("CX168",dateTime2));
