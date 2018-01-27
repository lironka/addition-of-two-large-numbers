
module.exports = function (str) {
   let result='';
   let inMemory = '';
   let [str1, str2] = str.split(' ');
   let largest = str1.length > str2.length ? str1 : str2;
   let smallest = largest == str1 ? str2 : str1;

    for (let i = 0;  i < largest.length; i++) {
        let char1 = smallest.substring(smallest.length-1 - i ,smallest.length - i);
        let char2 = largest.substring(largest.length-1 - i ,largest.length - i);

        let sum = ( Number(char1)+ Number(char2) + Number(inMemory) ).toString();
        
        result = sum.substring(sum.length-1 ,sum.length) + result;
        inMemory = sum.substring(sum.length-2 ,sum.length - 1);
    }
    result = inMemory + result;
    return result;
}