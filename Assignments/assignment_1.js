// let args = process.argv.slice(2);
// const [num1, num2, operator] = args;
// function evaluation(num1, num2, operator) {
//   switch (operator) {
//     case '+':
//       console.log(num1 + num2);
//       break;
//     case '-':
//       console.log(num1 - num2);
//       break;
//     case '*':
//       console.log(num1 * num2);
//       break;
//     case '/':
//       if (num2 === 0) {
//         console.log('Error: Cannot divide by zero');
//       } else {
//         console.log(num1 / num2);
//       }
//       break;
//     default:
//       console.log('Error: Invalid operator');
//   }
// }
// evaluation(+num1,+num2, operator);

let args= process.argv.slice(2);

const [num1, num2, operator] =args;
 function evaluation(num1, num2, operator){
    switch (operator){
        case '+':
           console.log(num1 + num2);
        break;
        case '-':
         console.log(num1 - num2);
         break;
        case '*':
          console.log(num1 * num2);
        break;
        case '/':
          if(num2 === 0){
            console.log( "can't devided by zero")
          }else{
            console.log(num1 / num2);
          }
          break;
          default :
          console.log("Invalid operator")   
    }
 }
 evaluation(+num1, +num2, operator);