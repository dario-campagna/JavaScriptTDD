class DefaultRule {

  say(n, s) {
    return s === '' ? s + n : s;
  }

}

class WordRule {

  constructor(divisor, word) {
    this.divisor = divisor;
    this.word = word;
  }

  say(n, s) {
    return n % this.divisor === 0 ? s + this.word : s;
  }

}

class FizzBuzzer {

  constructor(rules) {
    this.rules = rules;
  }

  say(n) {
    return this.rules.reduce((s, rule) => {
      return rule.say(n, s);
    }, '');
  }

}

export {DefaultRule, WordRule, FizzBuzzer}
