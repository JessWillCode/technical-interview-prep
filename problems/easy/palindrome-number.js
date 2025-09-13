//9. Palindrome Number
//Given an integer x, return true if x is a palindrome, and false otherwise.

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0){
        return false;
    } 
    let arr = []
   while( x > 0 ){
    arr.push(x % 10);
    x = Math.floor(x / 10);
   }
   for(let i = 0; i < arr.length; i++){
    if(arr[i] !== arr[arr.length - 1 - i]){
        return false;
    }
   }
   return true;
};