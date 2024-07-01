//StudentGradeGenerator by ALVIN KIMUTAI:

const prompt = require('prompt-sync')();

function StudentGradeGenerator(mark){
    if (mark > 79){
        return 'grade A';
    } else if(mark >= 60 && mark <=79) {
        return 'grade B';
    } else if(mark >= 49 && mark <=59) {
        return 'grade C';
    } else if(mark >= 40 && mark <=49) {
        return 'grade D';
    } else {
        return 'grade E';    
    }
}

const userInput = prompt('Enter the student\'s mark');

const mark =parseFloat(userInput);

if (isNaN(mark)) {
    console.log('Invalid Input. Please enter a number.');
} else {
    const grade = StudentGradeGenerator(mark);
    console.log(`The Student's grade is: ${grade} `);
}