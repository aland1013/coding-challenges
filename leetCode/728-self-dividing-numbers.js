/*
A self-dividing number is a number that is divisible by every digit it contains.

For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.

Also, a self-dividing number is not allowed to contain the digit zero.

Given a lower and upper number bound, output a list of every possible self dividing number, including the bounds if possible.

Example 1:
Input: 
left = 1, right = 22
Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]
Note:

The boundaries of each input argument are 1 <= left <= right <= 10000.
*/

const selfDividingNumbers = (left, right) => {
  let result = [];

  for (let n = left; n <= right; n++) {
    if (n < 10) {
      result.push(n);
    } else {
      let arr = n.toString().split('');
      let isSelfDividing = true;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0 || n % arr[i] !== 0) {
          isSelfDividing = false;
          break;
        }
      }
      if (isSelfDividing) result.push(n);
    }
  }

  return result;
};
