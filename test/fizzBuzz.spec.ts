/// <reference path="../typings/jasmine/jasmine.d.ts"/>
/// <reference path="../app/src/fizzBuzz.ts"/>

describe('FizzBuzz test suite', () => {

  var rules = [
    new FizzBuzz.WordRule(3, 'Fizz'),
    new FizzBuzz.WordRule(5, 'Buzz'),
    new FizzBuzz.DefaultRule()
  ];
  var fizzBuzzer = new FizzBuzz.FizzBuzzer(rules);

  it('should return Fizz for multiples of 3', function () {
    expect(fizzBuzzer.say(3)).toBe('Fizz');
    expect(fizzBuzzer.say(9)).toBe('Fizz');
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
