//StudentGradeGenerator
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
console.log(StudentGradeGenerator(40));