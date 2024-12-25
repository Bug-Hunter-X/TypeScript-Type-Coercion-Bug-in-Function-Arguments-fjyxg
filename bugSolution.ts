function printNumber(num: number): void {
  console.log(num);
}

function printNumberSafe(num: number | string): void {
  if (typeof num === 'string') {
    const parsedNum = parseFloat(num);
    if (isNaN(parsedNum)) {
      console.error("Invalid number string provided");
      return;
    } else {
      console.log(parsedNum);
    }
  } else {
    console.log(num);
  }
}

printNumberSafe(123); // Correctly prints 123
printNumberSafe("123"); // Correctly prints 123
printNumberSafe("abc"); // Prints an error message
