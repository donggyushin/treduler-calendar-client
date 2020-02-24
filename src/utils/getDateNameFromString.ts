import { dayName } from 'types/day'
export const getDateNameFromString = (dateString: string): dayName => {
    var days: dayName[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var d = new Date(dateString);
    var dayName = days[d.getDay()];
    return dayName
}