export interface ISchedule extends Document {
    text: string
    color: string
    calendarId: string
}

export interface ICalendar {
    userId: string
    date: string
    schedules: ISchedule[]
    _id: string
}