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
    private word:string;
    private divisor:number;

    constructor(divisor:number, word:string){
      this.divisor = divisor;
      this.word = word;
    }

    say(n:number, s:string):string {
      return n % this.divisor === 0 ? s + this.word : s;
    }

  }

  export class FizzBuzzer {
    private rules:Rule[];

    constructor(rules:Rule[]) {
      this.rules = rules;
    }

    say(n:number) {
      return this.rules.reduce((s:string, rule:Rule) => {
        return rule.say(n, s)
      }, '');
    }

  }

}
