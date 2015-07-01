/// <reference path="../typings/jasmine/jasmine.d.ts"/>
///<reference path="../app/src/fizzBuzz.ts"/>

describe('FizzBuzz test suite', () => {

  var fizzBuzzer = new FizzBuzz.FizzBuzzer();

  it('should return Fizz for multiples of 3', function(){
    expect(fizzBuzzer.say(3)).toBe('Fizz');
  });

});
