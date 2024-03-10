// Lesson: Writing your first tests
export function max(a, b) {
 return (a > b ? a : b);
}

// Exercise
export function fizzBuzz(n) {
  if (n % 3 === 0 && n % 5 === 0) return 'FizzBuzz';
  if (n % 3 === 0) return 'Fizz';
  if (n % 5 === 0) return 'Buzz';
  return n.toString();
}

export function factorial(n) {
  if (n < 0) {
    return "Error: number must be greater than zero";
  }
  
  if (n === 0) {
    return 1;
  }

  let result = 1;
  for(let i=2; i<=n; i++) {
    result *= i;
  }
  return result;
}
