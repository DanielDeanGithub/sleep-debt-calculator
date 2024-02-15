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
    return idealHours * 7;
};

const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();

    if (actualSleepHours === idealSleepHours) return console.log('You got the perfect ammount of sleep.');
    if (actualSleepHours > idealSleepHours) return console.log(`You got ${actualSleepHours - idealSleepHours} more hours sleep than needed.`);
    return console.log(`You got ${idealSleepHours - actualSleepHours} less hours sleep then needed.`);
};

calculateSleepDebt();