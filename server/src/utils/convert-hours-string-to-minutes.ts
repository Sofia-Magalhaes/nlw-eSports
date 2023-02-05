/**
 * 
 * 18:00 => ["18","00"] => [18,00] -> 1080
 */

export function convertHourStringToMinutes(hourString: string) {
    const [hour, minutes] = hourString.split(':').map(Number);

    const minutesAmount = hour * 60 + minutes;

    return minutesAmount;

    

    
}