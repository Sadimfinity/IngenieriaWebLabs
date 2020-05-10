import { Injectable } from '@angular/core';
let module_result: string;
let roman_numbers = new Map([
 [ 1, 'I' ],
 [ 5, 'V' ],
 [ 10, 'X' ],
 [ 50, 'L' ],
 [ 100, 'C' ],
 [ 500, 'D' ],
 [ 1000, 'M' ]
]);

@Injectable({
  providedIn: 'root'
})

export class RomanNumbersService {

  constructor() {
  }

  convertNumber(number) {  
    let roman_number = '';    
    switch (true) {
      case number < 4: {
        for (let index = 0; index < number; index++){
          roman_number = roman_number.concat(roman_numbers.get(1));
        }
        break;
      }
      case number == 4: {
        roman_number = roman_numbers.get(1).concat(roman_numbers.get(5));
        break;
      }
      case (4 < number && number < 9): {
        roman_number = roman_numbers.get(5)
        for (let index = 0; index < number%5; index++){
          roman_number = roman_number.concat(roman_numbers.get(1));
        }
        break;
      }
      case number == 9: {
        roman_number = roman_numbers.get(1).concat(roman_numbers.get(10));
        break;
      }
      case (10 <= number && number < 40): {
        roman_number = roman_numbers.get(10);
        for (let index = 1; index < Math.floor(number/10); index++) {
          roman_number = roman_number.concat(roman_numbers.get(10));
        }
        roman_number = this.moduleOperation(roman_number, number, 10);
        break;
      }
      case (40 <= number && number < 50): {
        roman_number = roman_numbers.get(10).concat(roman_numbers.get(50));
        roman_number = this.moduleOperation(roman_number, number, 10);
        break;
      }
      case (50 <= number && number < 90): {
        roman_number = roman_numbers.get(50);
        roman_number = this.moduleOperation(roman_number, number, 50);
        break;
      }
      case (90 <= number && number < 100): {
        roman_number = roman_numbers.get(10).concat(roman_numbers.get(100));
        roman_number = this.moduleOperation(roman_number, number, 10)
        break;
      }
      case(100 <= number && number < 400): {
        roman_number = roman_numbers.get(100);
        let index = 1;
        while(index < Math.floor(number/100)){
          roman_number = roman_number.concat(roman_numbers.get(100));
          index++
        }
        roman_number = this.moduleOperation(roman_number, number, 100);
        break;
      }
      case(400<= number && number < 500):{
        roman_number = roman_numbers.get(100).concat(roman_numbers.get(500));
        roman_number = this.moduleOperation(roman_number, number, 100)
        break;
      }
      case(500 <= number && number < 900):{
        roman_number = roman_numbers.get(500);
        roman_number = this.moduleOperation(roman_number, number, 500);
        break;
      }
      case (900 <= number && number < 1000): {
        roman_number = roman_numbers.get(100).concat(roman_numbers.get(1000));
        roman_number = this.moduleOperation(roman_number, number, 100);
        break;
      }
      case number == 1000:
        roman_number = roman_numbers.get(1000);
    }
    return roman_number;

  }

  moduleOperation(roman_number, number, base){
    module_result = this.convertNumber(number%base);
    roman_number = roman_number.concat(module_result)
    return roman_number;
  }

}
