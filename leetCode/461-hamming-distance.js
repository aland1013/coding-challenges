/*
The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

Given two integers x and y, calculate the Hamming distance.

Note:
0 ≤ x, y < 231.

Example:

Input: x = 1, y = 4

Output: 2

Explanation:
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑

The above arrows point to positions where the corresponding bits are different.
*/

const hammingDistance = (x, y) => {
    let hd = 0;
    
    x = (x >>> 0).toString(2).split('');
    y = (y >>> 0).toString(2).split('');
    
    while(x.length > 0 || y.length > 0) {
        const a = x.length > 0 ? x.pop() : 0;
        const b = y.length > 0 ? y.pop() : 0;
        
        if (a != b) hd++;
    }
    
    return hd;
};