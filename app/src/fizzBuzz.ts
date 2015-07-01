module FizzBuzz {

  interface Rule {
    say(n:number, s:string):string;
  }

  export class DefaultRule implements Rule {
    say(n:number, s:string):string {
      return s === '' ? s + n : s;
    }
  }

  export class WordRule implements Rule {
    private _word:string;
    private _divisor:number;

    constructor(divisor:number, word:string){
      this._divisor = divisor;
      this._word = word;
    }

    say(n:number, s:string):string {
      return n % this._divisor === 0 ? s + this._word : s;
    }

  }

  export class FizzBuzzer {
    private _rules:Rule[];

    constructor(rules:Rule[]) {
      this._rules = rules;
    }

    say(n:number) {
      var s = '';
      this._rules.forEach((rule) => {
        s = rule.say(n, s);
      })
      return s;
    }

  }

}
