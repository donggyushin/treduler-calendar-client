export interface ISchedule extends Document {
    text: string
    color: string
    calendarId: string
}

export interface ICalendar {
    userId: string
    date: Date
    schedules: ISchedule[]
}