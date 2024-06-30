// SpeedDetector by ALVIN KIMUTAI

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

console.log(speedDetector(80));