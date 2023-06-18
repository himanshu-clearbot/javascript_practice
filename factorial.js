// function Factorial(n) {
//     ans=1;
    
//     for (i = 2; i <= n; i++)
//         ans = ans * i;
//     return ans;
// }
// console.log(Factorial(5));

// recursive method down one 

function factorial(n) {
    if (n === 0) {
      return 1; 
    } 
    else
    {
      return n * factorial(n - 1);
    }
  }
console.log(factorial(3));