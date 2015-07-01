import {DefaultRule, WordRule, FizzBuzzer} from '../app/src/fizzBuzz.js'

describe('FizzBuzz test suite', () => {

  var rules = [
    new WordRule(3, 'Fizz'),
    new WordRule(5, 'Buzz'),
    new DefaultRule()
  ];

  var fizzBuzzer = new FizzBuzzer(rules);

  it('should return Fizz for multiples of 3', () => {
    expect(fizzBuzzer.say(3)).toBe('Fizz');
  });

  it('should return Buzz for multiples of 5', () => {
    expect(fizzBuzzer.say(5)).toBe('Buzz');
  });

  it('should return FizzBuzz for multiples of 3 and 5', () => {
    expect(fizzBuzzer.say(15)).toBe('FizzBuzz');
  });

  it('should return given number otherwise', () => {
    expect(fizzBuzzer.say(1)).toBe('1');
  });

});
