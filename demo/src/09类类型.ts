interface ClockInterface {
    currentTime: Date
    setTime(d: Date): void
}

interface ClockConstructor {
    new(hour: number, minute: number): any
}

class Clock implements ClockInterface {
    currentTime: Date
    constructor(h: Date, m: number) {
        this.currentTime = h
    }
    setTime(d: Date) {
        this.currentTime = d
    }
}