/*
*  Command for start:  NODE_ENV=test mocha 
*/
const calcFirst = require('../myFirst');
const calcFast = require('../myFast');
const calcShort = require('../shortest');
const should = require('should');
// make sure you run it in test env
should(process.env.NODE_ENV).eql('test');


describe('To Sum the large numbers ', () => {
    
    it('To Sum numbers, Simple test', ()=>{
        let num1 = '9007199254740991'; //16
        let num2 = '9007199254740991'; 
        let res  ='18014398509481982';
        calcShort(num1 + ' ' + num2).should.be.equal(res);
    });
    
    it('To Sum numbers, Complete test', ()=>{
        for (let i = 0; i < 50000; i++) {
            let num1 = '' + parseInt(Math.random() * Math.pow(10, 20));
            let num2 = '' + parseInt(Math.random() * Math.pow(10, 20));
            should(calcShort(num1 + ' ' + num2) == calcFirst(num1 + ' ' + num2)).equal(true);
            should(calcShort(num1 + ' ' + num2) == calcFast(num1 + ' ' + num2)).equal(true);
            should(calcFirst(num1 + ' ' + num2) == calcFast(num1 + ' ' + num2)).equal(true);
        }
    });

    context('Performance',()=>{
        let numbers = [];
        let delta1, delta2, delta3 = null;
        
        before('',()=>{
            for (let i = 0; i < 1000000; i++) {
                let str = '' + parseInt(Math.random() * Math.pow(10, 20));
                numbers.push(str + str);
            }
        })
        after('',()=>{
            let max = Math.max(delta1,delta2,delta3);
            console.log('Performance indicator:');
            console.log(`calcShort: ${parseInt(max/delta3 * 100)}%`);
            console.log(`calcFirst: ${parseInt(max/delta1 * 100)}%`);
            console.log(`calcFast: ${parseInt(max/delta2 * 100)}%`);
        });

        it('time calcFirst', ()=>{
            let time = new Date().getTime();
            for (let i = 1; i < numbers.length; i++) {
                calcFirst(numbers[i-1] + ' ' + numbers[i]);
            }
            delta1 = new Date().getTime() - time;
        });

        it('time calcFast', ()=>{
            let time2 = new Date().getTime();
            for (let i = 1; i < numbers.length; i++) { 
                calcFast(numbers[i-1] + ' ' + numbers[i]);
            }
            delta2 = new Date().getTime() - time2;
        });

        it('time calcShort', ()=>{
            let time3 = new Date().getTime();
            for (let i = 1; i < numbers.length; i++) { 
                calcFast(numbers[i-1] + ' ' + numbers[i]);
            }
            delta3 = new Date().getTime() - time3;
        });

    });

});