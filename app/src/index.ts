///<reference path="fizzBuzz.ts"/>

var rules = [
  new FizzBuzz.WordRule(3, 'Fizz'),
  new FizzBuzz.WordRule(5, 'Buzz'),
  new FizzBuzz.DefaultRule(),
];

var fizzBuzzer = new FizzBuzz.FizzBuzzer(rules);

console.log(fizzBuzzer.say(1));
console.log(fizzBuzzer.say(15));
