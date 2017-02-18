const assert = require('chai').assert
const FizzBuzz = require('../app')

describe('FizzBuzz', function(){
    it('if the number is divisible by three, you instead say "Fizz"', function(){
        const fizzbuzz = FizzBuzz(3)

        assert.equal("Fizz", fizzbuzz.result);
    })

    it('if the number is divisible by five, you instead say "Buzz"', function(){
        const fizzbuzz = FizzBuzz(5)

        assert.equal("Buzz", fizzbuzz.result);
    })

    it('for numbers which are multiples of both three and five print "FizzBuzz?"', function(){
        const fizzbuzz = FizzBuzz(15)

        assert.equal("FizzBuzz?", fizzbuzz.result);
    })
});