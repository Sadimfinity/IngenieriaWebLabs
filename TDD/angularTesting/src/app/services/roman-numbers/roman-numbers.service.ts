import { Injectable } from '@angular/core';

let roman_number: string;
let roman_numbers = new Map([
 [ 1, 'I' ],
 [ 5, 'V' ],
 [ 10, 'X' ],
 [ 20, 'XX' ],
 [ 30, 'XXX' ],
 [ 40, 'XL' ],
 [ 50, 'L' ],
 [ 60, 'LX' ],
 [ 70, 'LXX' ],
 [ 80, 'LXXX' ],
 [ 90, 'XC' ],
 [ 100, 'C' ]
]);

@Injectable({
  providedIn: 'root'
})

export class RomanNumbersService {

  constructor() {
  }

  convertNumber(number) {  
    roman_number = '';    
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
      case number == 10: {
        roman_number = roman_numbers.get(10)
        break;
      }
      case (10 < number && number < 100): {
        for (let index = 0; index < Math.floor(number/10); index++) {
          roman_number = roman_number.concat(roman_numbers.get(10))
        }
        let aux = roman_number;
        let result = this.convertNumber(number%10);
        roman_number = aux;
        roman_number = roman_number.concat(result);
      }
    }
    return roman_number;

  }

}
