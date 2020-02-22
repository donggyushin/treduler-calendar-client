export interface ReducerScheduleType {
    text: string
    color: string
}

export interface ReducerCalendarType {
    userId: string
    dayName: string
    date: Date
    schedules: ReducerScheduleType[]
}

export interface ReducerCalendarsType {
    calendars: ReducerCalendarType[]
}

export interface ReducerUserType {
    email: string
    name: string
    profile: string
    phone: string
    isLoggedIn: boolean
}

export interface ReducerSelectedDate {
    date: Date
}

export interface ReducerStateType {
    user: ReducerUserType
    calendars: ReducerCalendarsType
    selectedDate: ReducerSelectedDate
}