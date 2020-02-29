import React, { useState, useEffect } from 'react'
import { ICalendar } from 'types/calendar'
import './styles.scss'
import { useSelector } from 'react-redux'
import { ReducerStateType } from 'types/reducer'

interface IProps {
    calendar: ICalendar
    calendarClicked: (id: string) => void
}

const Calendar: React.FC<IProps> = ({ calendar, calendarClicked }) => {

    const date = new Date(calendar.date)
    const selectedDate = useSelector((state: ReducerStateType) => state.selectedDate.date)
    const [thisMonth, setThisMonth] = useState(false)


    useEffect(() => {
        checkThisCalendarMatchesWithThisMonth()
    })

    return <div onClick={() => {
        calendarClicked(calendar._id)
    }} className={thisMonth ? "private__calendar__container" : "private__calendar__container not_match"}>
        <div className="date__day">
            <span>{date.getDate()}</span>
        </div>
    </div>




    function checkThisCalendarMatchesWithThisMonth(): void {
        if (date.getMonth() === selectedDate.getMonth()) {
            setThisMonth(true)
        } else {
            setThisMonth(false)
        }
    }
}

export default Calendar