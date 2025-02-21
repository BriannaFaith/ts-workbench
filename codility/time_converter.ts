// Given a time in -hour AM/PM format, convert it to military (24-hour) time.
function timeConversion(s: string): string {
    let [hours, minutes, secondsPeriod] = s.split(':');
    let seconds: string = secondsPeriod.slice(0, 2);
    let period: string = secondsPeriod.slice(2);

    if (period === 'AM') {
        if (hours === '12') {
            hours = '00';
        }
    } else {
        if (hours !== '12') {
            hours = (Number(hours) + 12).toString();
        }
    }

    return `${hours}:${minutes}:${seconds}`;
}

let time: string = '07:05:45PM';
console.log(timeConversion(time));