// SpeedDetector by ALVIN KIMUTAI
const prompt = require('prompt-sync')();

function speedDetector (speed){
    if (speed <= 70) {
        return "OK";
    } else {
        const result =(speed-70) / 5;
        const points =Math.floor(result);
        if (points < 12) {
            return `points:${points}`;
        }else {
            return 'License suspended'; 
        }
    }
}

const userInput = prompt('Enter the vehicle\'s speed');
const speed = parseFloat(userInput);

if (isNaN(speed)) {
    console.log('Invalid Input. Please enter a number');
} else{
    const output = speedDetector (speed);
    console.log(output);
}

