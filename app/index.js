function FizzBuzz(number){

    var fizzbuzz = {
        result: number
    };
    
    var isFizz = ((number % 3) == 0);
    var isBuzz = ((number % 5) == 0);
    var isFizzBuzz = (isFizz && isBuzz);

    if (isFizz){
        fizzbuzz.result = "Fizz";
    }

    if (isBuzz){
        fizzbuzz.result = "Buzz";
    }

    if (isFizzBuzz){
        fizzbuzz.result = "FizzBuzz?";
    }

    return fizzbuzz;
}

module.exports = FizzBuzz;