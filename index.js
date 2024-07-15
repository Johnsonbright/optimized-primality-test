// Give a natural number 'n' determine if the number is prime or not

function prime(n) {
  if(n < 2) {
    return false
  }
  for (let i = 2; i <= Math.sqrt(n); i++){
    if(n % i === 0) {
      return false
    }
    
  }
return true
};
console.log(prime(-1))
console.log(prime(2))
console.log(prime(3))
console.log(prime(4))
console.log(prime(4))

// Big O = O(sqrt(n))