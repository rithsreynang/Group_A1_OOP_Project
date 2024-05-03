import { AirlinePilot } from "../../../person/AirlineStaff/AirlinePilot";
import { Airline } from "../../airlines/Airline";
import { DateTime } from "../../dateTime/DateTime";
import { Gate } from "../../gate/Gate";
import { Airplane } from "../Airplane/Airplane";
import { Route } from "../route/Route";

export class Flight {
    constructor(private flightNumber: string,
        private airLinePilot: AirlinePilot,
        private airline: Airline,
        private route: Route,
        private gate: Gate,
        private airplane: Airplane) { }

    
    public getflightNumber(): string{
        return this.flightNumber;
    } 
  
    public getGate(): Gate{
        return this.gate;
    }
   
    public getRoute(): Route{
        return this.route;
    }
 
    public getPilot(): AirlinePilot {
        return this.airLinePilot;
    }
}