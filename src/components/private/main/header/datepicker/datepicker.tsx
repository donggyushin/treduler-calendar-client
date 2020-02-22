import 'date-fns';
import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import './styles.scss'
import { useSelector, useDispatch } from 'react-redux';
import { ReducerStateType } from 'types/reducer';
import { putSelectedDate } from 'actions/selectedDate'

export default function MaterialUIPickers() {
    // The first commit of Material-UI
    // const [selectedDate, setSelectedDate] = React.useState<Date | null>(
    //     new Date(),
    // );

    const dispatch = useDispatch()

    const handleDateChange = (date: Date | null) => {
        // setSelectedDate(date);
        if (date) {
            dispatch(putSelectedDate(date))
        }
    };

    const selectedDate = useSelector((state: ReducerStateType) => state.selectedDate.date);

    return (
        <div className="datepicker__container">
            <div className="month">{selectedDate && selectedDate.getMonth() + 1}</div>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>

                <KeyboardDatePicker
                    margin="normal"
                    id="date-picker-dialog"
                    label="Date picker dialog"
                    format="MM/dd/yyyy"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                />


            </MuiPickersUtilsProvider>
        </div>
    );
}