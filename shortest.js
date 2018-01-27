module.exports = function (str) {
    let result='';
    let inMemory = '';
    let [str1, str2] = str.split(' ');
    let len1 = str1.length;
    let len2 = str2.length;

    for (let i = 0; i < Math.max(len1,len2); i++) {
        let char1 = str1[len1 - 1 - i] || 0;
        let char2 = str2[len2 - 1 - i] || 0;
        let sum = Number(char1)+ Number(char2) + Number(inMemory);
        inMemory = parseInt(sum / 10);
        result = (sum % 10).toString() + result;
    }
     result = inMemory ? inMemory + result: result;
     return result;
 }