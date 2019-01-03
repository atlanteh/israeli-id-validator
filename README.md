# israeli-id-validator
A simple Israeli ID validator

## USAGE
```javascript
import isIsraeliIdValid from 'israeli-id-validator';
console.log(isIsraeliIdValid(123456782)) // true
console.log(isIsraeliIdValid(123456785)) // false
console.log(isIsraeliIdValid(1234567856)) // false
console.log(isIsraeliIdValid(12345678)) // false
console.log(isIsraeliIdValid("123456782")) // true
console.log(isIsraeliIdValid("123456785")) // false
console.log(isIsraeliIdValid("023456783")) // true
console.log(isIsraeliIdValid("23456783")) // true 
```