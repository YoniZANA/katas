export class Fizzbuzz {
  private FIZZ = "FIZZ";
  private BUZZ = "BUZZ";

  generate(number1: number, number2: number): string {
    return this.evaluateNumbers(number1, number2);
  }

  private evaluateNumber(number: number) {
    let result = "";
    if (this.isMultiple(number, 3)) {
      result += this.FIZZ;
    }
    if (this.isMultiple(number, 5)) {
      result += this.BUZZ;
    }
    if (!result) {
      result += number.toString();
    }
    return result;
  }

  private isMultiple(number: number, multiple: number) {
    return number % multiple === 0;
  }

  private evaluateNumbers(number1: number, number2: number) {
    let result: string = "";
    while (number1 <= number2) {
      result += this.evaluateNumber(number1++);
    }
    return result;
  }
}
