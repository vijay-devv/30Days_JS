// function checkno(number){
//     if (number > 0) {
//         console.log("no is positive");
        
//     } else if (number < 0) {
//         console.log("no is negative");
        
//     }
//     else {
//         console.log("no is zero");
//     }
// }
// checkno(2)
// ----------------------------------------------------------------

// const age =24;

// if (18<=age) {
//     console.log("you are eligible for driving license");
    
// } else {
//     console.log("you are not eligible for driving license");
    
// }

// ----------------------------------------------------------------------------------


// a=10, b=20, c=30

// if (a>b>c) {
//     console.log(`${a} is greter than ${b}and ${c}`);
    
// } else if (b>a>c)
// {
//     console.log(`${b} is greter than ${a}and ${c}`);
// } else {
//     console.log(`${c} is greter than ${a} and ${b}`);
    
// }


// ------------------------------------------------------------

// const weekdays=1

// switch (weekdays) {
//     case 1:console.log("this is sunday");
//     break;
//     case 2:console.log("this is monday");
//     break;

//     case 3: console.log("this is tuesday");
//     break;
    
//     case 4: console.log("this is tuesday");
//     break;

//     case 5: console.log("this is tuesday");
//     break;

//     case 6: console.log("this is tuesday");
//     break;

//     case 7: console.log("this is tuesday");
//     break;


//     default:"please enter correct number"
//         break;
// }




// const score=98 ;

// switch (true) {

//     case(score >= 90):console.log("this is grade A");
//     break;
//     case (score >= 80):console.log("this is grade B");
//     break;
//     case (score >= 60):console.log("this is grade C");
//     break;
//     case (score >= 40):console.log("this is grade D");
//     break;

//     default:console.log("this is grade F");
//     break;
   
// }


// const number = 45;

// const evenodd=number%2==0 ? "even" : "odd";

// console.log(evenodd);



const year = 2000; 

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(`${year} is a leap year.`);
} else {
    console.log(`${year} is not a leap year.`);
}



