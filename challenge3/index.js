// Net Salary Calculator by ALVIN KIMUTAI

const prompt = require('prompt-sync')();

function calculateNetSalary( basicSalary, benefits) {
    
    const grossSalary = basicSalary +benefits;

    let PAYE;
    if (grossSalary < 24000){
         PAYE = grossSalary*10/100
    } else if(24001<= grossSalary && grossSalary <=32333){
         PAYE =grossSalary*25/100;
    }else if(32334<= grossSalary && grossSalary <=500000){
         PAYE =grossSalary*30/100;
    }else if(500001<= grossSalary && grossSalary <=800000){
         PAYE =grossSalary*32.5/100;
    } else {
         PAYE =grossSalary*35/100;
    }

    let NHIF;
     if (grossSalary < 599){
         NHIF = 150;
     }else if(6000<=grossSalary && grossSalary<=7999 ){ 
         NHIF = 300;
     }else if(8000<=grossSalary && grossSalary<=11999 ){ 
         NHIF = 400;
     }else if(12000<=grossSalary && grossSalary<=14999 ){ 
         NHIF = 500;
     }else if(15000<=grossSalary && grossSalary<=19999 ){ 
         NHIF = 600;
     }else if(20000<=grossSalary && grossSalary<=24999){ 
         NHIF = 750;
     }else if(25000<=grossSalary && grossSalary<=29999 ){ 
         NHIF = 850;
     }else if(30000<=grossSalary && grossSalary<=34999){ 
         NHIF = 900;
     }else if(35000<=grossSalary && grossSalary<=39999){ 
         NHIF = 950;
     }else if(40000<=grossSalary && grossSalary<=44999){ 
         NHIF = 1000;
     }else if(45000<=grossSalary && grossSalary<=49999){ 
         NHIF = 1100;
     }else if(50000<=grossSalary && grossSalary<=59999){ 
         NHIF = 1200;
     }else if(60000<=grossSalary && grossSalary<=69999){ 
         NHIF = 1300;
     }else if(70000<=grossSalary && grossSalary<=79999){ 
         NHIF = 1400;
     }else if(80000<=grossSalary && grossSalary<=89999){ 
         NHIF = 1500;
     }else if(90000<=grossSalary && grossSalary<=99999){ 
         NHIF = 1600;
     }
     else { 
         NHIF = 1700;
     }

     //NSSF
     const NSSF = 6/100 *grossSalary

     const netSalary = grossSalary - PAYE - NHIF - NSSF;

     return {
        grossSalary: grossSalary,
        PAYE: PAYE,
        NHIF: NHIF,
        NSSF: NSSF,
        netSalary: netSalary
     };
}

const basicSalary = parseFloat(prompt('Enter Basic Salary: '));

const benefits = parseFloat(prompt('Enter Benefits: '));

const result = calculateNetSalary( basicSalary, benefits);

console.log(result);