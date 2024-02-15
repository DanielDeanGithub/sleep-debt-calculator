const getSleepHour  = day => {
    day = day.toLowerCase();

    switch (day) {
        case 'monday':
            return 6
            break;
        case 'tuesday':
            return 7
            break;
        case 'wednesday':
            return 6
            break;
        case 'thursday':
            return 6
            break;
        case 'friday':
            return 7
            break;
        case 'saturday':
            return 8
            break;
        case 'sunday':
            return 6
            break;
        default:
            console.log('Error: Invalid input')
            break;
    }
};

const getActualSleepHours = () => {
    const weekdays = ['monday','tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    let total = 0;
    weekdays.forEach(day => {
        total += getSleepHour(day);
    });
    return total;
};

const getIdealSleepHours = () => {
    const idealHours = 8;
    return 8 * 7;
};