### Weekone code challenge
## Introduction
> The wk1 code challenge composed of three code challenges which were:
1. Writing a program for a student Grade Calculator
2. Writing a program for a speed detector
3. Net salary calculator
> Tackling each challenge involved creating a directory for each challenge and creating an index.js file and an index.html for each challenge.
> Linking of the html file with the js file was neccesary for each case so as to access the console via the web browser.  
## Writing a program for a student Grade Calculator (challenge1)
> This involved assigning a parameter "mark" to a function StudentGradeGenerator() and using the if, else if and else statements to define the conditions to be met 
for a certain "grade" to be outputed.
To run this code one has to console.log() the function with the mark parameter
## Writing a program for a speed detector
> This involved assigning a parameter "speed" to a function speedDetector() and using if and else statements. i.e. if () was used to print "ok" and else contained another another if and else to either print the points or if the points exceeded 12 points it could print "license suspended"
To run the code one has to console.log() the the function speedDetector() inputing the vehicle speed.
## Writing a program for a net salary calculator
> Since the parameters to be inputec were: 'basicSalary and benefits', obtaining of the gross salary was done by adding basic salary + benefits
> Next the calculation of PAYE was done using if, else if and else statements taking into consideration amount of gross salary and multiplying a suitable rate to the gross salary to obtain PAYE
>On calculating the NHIF, if else if and else were also used where the gross salary was taken into consideration and for different gross salary ranges it gave the appropriate NHIF deduction
>NSSF was 6% of gross salary
> The net salary was calculated as netSalary = grossSalary-PAYE-NHIF-NSSF
> Finally all the values were returned i.e. grossSalary, PAYE, NHIF, NSSF, and netSalary
The code Above requires the one console.log() the function calculateNetSalary() inputing the basic salary and benefits