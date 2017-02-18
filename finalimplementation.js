console.log(
    Array.apply(0, Array(100)).map(function(x,y){
        var number = y + 1;

        var isFizz = ((number % 3) == 0);
        var isBuzz = ((number % 5) == 0);
        var isFizzBuzz = (isFizz && isBuzz);

        if (isFizzBuzz) return 'FizzBuzz';
        if (isFizz) return 'Fizz';
        if (isBuzz) return 'Buzz';

        return(number);
    }).join("\n"));