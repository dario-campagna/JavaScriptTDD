import FizzBuzzer from '../app/src/fizzBuzz.js'

describe('FizzBuzz test suite', () => {

  var fizzBuzzer = new FizzBuzzer();

  it('should return Fizz for multiples of 3', () => {
    expect(fizzBuzzer.say(3)).toBe('Fizz');
  })

  it('should return given number otherwise', () => {
    expect(fizzBuzzer.say(1)).toBe(1);
  });

});
