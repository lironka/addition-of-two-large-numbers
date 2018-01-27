module.exports = function (str) {
    let result='';
    let inMemory = '';
    let [str1, str2] = str.split(' ');
    let len1 = str1.length;
    let len2 = str2.length;
    let maxDigitNumber = 15;
    let maxNumber= Math.pow(10, maxDigitNumber);
    let maxLen = Math.max(len1,len2);

    for (let i = 0; i < maxLen; i = i + maxDigitNumber) {
        let countChar = i + maxDigitNumber;
        let indexStart1 = (len1 - countChar) > 0 ? len1 - countChar: 0;
        let indexStart2 = (len2 - countChar) > 0 ? len2 - countChar: 0;
        let char1 = str1.slice(indexStart1, len1 - i);
        let char2 = str2.slice(indexStart2, len2 - i);
        let sum = Number(char1) + Number(char2) + Number(inMemory);
        
        if(sum > maxNumber){
            inMemory = parseInt(sum / maxNumber);
            result = (sum.toString()).slice(1) + result;
            //don't use sum % maxNumber! it misses '0'
        } else {
            inMemory = '';
            result = sum.toString() + result;
        }
        if(maxLen > countChar){
            result = result.padStart(maxDigitNumber,'0');
        }
    }
    result = inMemory + result;
    return result;
};