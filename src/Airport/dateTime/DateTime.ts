export class DateTime {
    constructor(
        private day: number,
        private month: string,
        private year: number,
        private time: string
    ) {
        this.day = day;
        this.month = month;
        this.year = year;
        this.time = time;
    }

    
    // is equal
    public isEqual = (date: DateTime) => this.day === date.day && this.month === date.month && this.year === date.year;
}
