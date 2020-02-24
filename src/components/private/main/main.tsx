import React, { useEffect, useState } from 'react'
import Header from './header/header'
import './styles.scss'
import { useSelector } from 'react-redux'
import { ReducerStateType } from 'types/reducer'
import { getDateNameFromString } from 'utils/getDateNameFromString'
import axios from 'axios'
import { END_POINT } from 'consts/endpoint'
import Loading from 'components/global/loading/loading'
import Dialog from 'components/global/dialog/dialog'
import { ICalendar } from 'types/calendar'


const Presenter: React.FC = () => {

    const selectedDateReducer = useSelector((state: ReducerStateType) => state.selectedDate)
    const selectedDate = selectedDateReducer.date

    const [calendars, setCalendars] = useState<ICalendar[]>([])
    const [dialog, setDialog] = useState({
        show: false,
        title: "",
        text: "",
        callBack: () => { }
    })
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        const fromAndTo: string[] = getFromAndToDateString()
        fetchCalendars(fromAndTo)
    }, [selectedDate])

    return <div className="private__main__container">
        <Header />
        <div className="calendar__container">
            <div className="inner__container">
                <div className="header">
                    <div className="span_container">
                        <span>SUN</span>
                    </div>
                    <div className="span_container">
                        <span>MON</span>
                    </div><div className="span_container">
                        <span>TUE</span>
                    </div><div className="span_container">
                        <span>WED</span>
                    </div><div className="span_container">
                        <span>THU</span>
                    </div><div className="span_container">
                        <span>FRI</span>
                    </div><div className="span_container">
                        <span>SAT</span>
                    </div>
                </div>
                <div className="body">
                    body
            </div>
            </div>
        </div>
        {loading && <Loading />}
        {dialog.show && <Dialog
            title={dialog.title}
            text={dialog.text}
            callBack={dialog.callBack}
        />}
    </div>

    function fetchCalendars(fromAndTo: string[]) {
        axios.get(`${END_POINT}/calendar/${fromAndTo[0]}/${fromAndTo[1]}`, {
            headers: {
                'jwt': localStorage.getItem('treduler')
            }
        })
            .then(res => {
                setLoading(false)
                console.log(res)
                if (res.status === 304) {
                    setDialog({
                        show: true,
                        title: "Error",
                        text: res.data.message,
                        callBack: () => {
                            setDialog({
                                show: false,
                                title: "",
                                text: "",
                                callBack: () => { }
                            })
                        }
                    })
                } else if (res.status === 500) {
                    setDialog({
                        show: true,
                        title: "Error",
                        text: res.data.message,
                        callBack: () => {
                            setDialog({
                                show: false,
                                title: "",
                                text: "",
                                callBack: () => { }
                            })
                        }
                    })
                } else if (res.status === 401) {
                    setDialog({
                        show: true,
                        title: "Error",
                        text: res.data.message,
                        callBack: () => {
                            setDialog({
                                show: false,
                                title: "",
                                text: "",
                                callBack: () => { }
                            })
                        }
                    })
                } else if (res.status === 200) {
                    interface Idata {
                        calendars: ICalendar[]
                    }
                    const { calendars } = res.data as Idata
                    setCalendars(calendars)
                } else {
                    setDialog({
                        show: true,
                        title: "Error",
                        text: "Internal server error occured",
                        callBack: () => {
                            setDialog({
                                show: false,
                                title: "",
                                text: "",
                                callBack: () => { }
                            })
                        }
                    })
                }
            })
            .catch(err => {
                setLoading(false)
                console.log(err)
                setDialog({
                    show: true,
                    title: "Error",
                    text: "Internal server error occured",
                    callBack: () => {
                        setDialog({
                            show: false,
                            title: "",
                            text: "",
                            callBack: () => { }
                        })
                    }
                })
            })
    }

    function getFromAndToDateString(): string[] {
        const selectedYear = selectedDate.getFullYear()
        const selectedMonth = selectedDate.getMonth()

        const firstDayOfSelectedDate = new Date(selectedYear, selectedMonth, 1)
        const lastDayOfSelectedDate = new Date(selectedYear, selectedMonth + 1, 0);

        const firstDayName = getDateNameFromString(firstDayOfSelectedDate.toString())
        const lastDayName = getDateNameFromString(lastDayOfSelectedDate.toString())


        let dayToSubstract = 0;
        let dayToAdd = 0;

        switch (firstDayName) {
            case 'Sunday':
                dayToSubstract = 0
                break;
            case 'Monday':
                dayToSubstract = 1
                break;
            case 'Tuesday':
                dayToSubstract = 2
                break;
            case 'Wednesday':
                dayToSubstract = 3
                break;
            case 'Thursday':
                dayToSubstract = 4
                break;
            case 'Friday':
                dayToSubstract = 5
                break;
            case 'Saturday':
                dayToSubstract = 6
                break;

            default:
                break;
        }
        switch (lastDayName) {
            case 'Sunday':
                dayToAdd = 6
                break;
            case 'Monday':
                dayToAdd = 5
                break;
            case 'Tuesday':
                dayToAdd = 4
                break;
            case 'Wednesday':
                dayToAdd = 3
                break;
            case 'Thursday':
                dayToAdd = 2
                break;
            case 'Friday':
                dayToAdd = 1
                break;
            case 'Saturday':
                dayToAdd = 0
                break;

            default:
                break;
        }

        firstDayOfSelectedDate.setDate(firstDayOfSelectedDate.getDate() - dayToSubstract + 1)
        lastDayOfSelectedDate.setDate(lastDayOfSelectedDate.getDate() + dayToAdd + 1)

        return [firstDayOfSelectedDate.getTime().toString(), lastDayOfSelectedDate.getTime().toString()]

    }
}

export default Presenter