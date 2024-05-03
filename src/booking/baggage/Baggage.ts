import { Airport } from "../../airport/Airport";

export class Baggage {
    constructor(
        private baggageId: string,
        private tagNumber: string,
        private weight: number,
        private departureAirport: Airport
    ) { }
}