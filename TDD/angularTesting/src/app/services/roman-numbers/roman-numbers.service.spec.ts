import { TestBed } from '@angular/core/testing';

import { RomanNumbersService } from './roman-numbers.service';

describe('RomanNumbersService', () => {
  let service: RomanNumbersService;
  let roman_number: String

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RomanNumbersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should convert 1 to I correctly', () => {
    roman_number = service.convertNumber(1);
    expect(roman_number).toBe('I');
  })

  it('should convert 2 to II correctly', () => {
    roman_number = service.convertNumber(2);
    expect(roman_number).toBe('II');
  })

  it('should convert 3 to III correctly', () => {
    roman_number = service.convertNumber(3);
    expect(roman_number).toBe('III');
  })

  it('should convert 4 to IV correctly', () => {
    roman_number = service.convertNumber(4);
    expect(roman_number).toBe('IV');
  })
  
  it('should convert 5 to V correctly', () => {
    roman_number = service.convertNumber(5);
    expect(roman_number).toBe('V');
  })

  it('should convert 6 to VI correctly', () => {
    roman_number = service.convertNumber(6);
    expect(roman_number).toBe('VI');
  })

  it('should convert 7 to VII correctly', () => {
    roman_number = service.convertNumber(7);
    expect(roman_number).toBe('VII');
  })

  it('should convert 8 to VIII correctly', () => {
    roman_number = service.convertNumber(8);
    expect(roman_number).toBe('VIII');
  })

  it('should convert 9 to IX correctly', () => {
    roman_number = service.convertNumber(9);
    expect(roman_number).toBe('IX');
  })

  it('should convert 10 to X correctly', () => {
    roman_number = service.convertNumber(10);
    expect(roman_number).toBe('X');
  })

  it('should convert 11 to XI correctly', () => {
    roman_number = service.convertNumber(11);
    expect(roman_number).toBe('XI');
  })

  it('should convert 12 to XII correctly', () => {
    roman_number = service.convertNumber(12);
    expect(roman_number).toBe('XII');
  })

  it('should convert 13 to XIII correctly', () => {
    roman_number = service.convertNumber(13);
    expect(roman_number).toBe('XIII');
  })

  it('should convert 14 to XIV correctly', () => {
    roman_number = service.convertNumber(14);
    expect(roman_number).toBe('XIV');
  })

  it('should convert 15 to XV correctly', () => {
    roman_number = service.convertNumber(15);
    expect(roman_number).toBe('XV');
  })

  it('should convert 16 to XVI correctly', () => {
    roman_number = service.convertNumber(16);
    expect(roman_number).toBe('XVI');
  })

  it('should convert 17 to XVII correctly', () => {
    roman_number = service.convertNumber(17);
    expect(roman_number).toBe('XVII');
  })

  it('should convert 18 to XVIII correctly', () => {
    roman_number = service.convertNumber(18);
    expect(roman_number).toBe('XVIII');
  })

  it('should convert 19 to XIX correctly', () => {
    roman_number = service.convertNumber(19);
    expect(roman_number).toBe('XIX');
  })

  it('should convert 20 to XX correctly', () => {
    roman_number = service.convertNumber(20);
    expect(roman_number).toBe('XX');
  })

  it('should convert 21 to XXI correctly', () => {
    roman_number = service.convertNumber(21);
    expect(roman_number).toBe('XXI');
  })

  it('should convert 22 to XXII correctly', () => {
    roman_number = service.convertNumber(22);
    expect(roman_number).toBe('XXII');
  })

  it('should convert 23 to XXIII correctly', () => {
    roman_number = service.convertNumber(23);
    expect(roman_number).toBe('XXIII');
  })

  it('should convert 24 to XXIV correctly', () => {
    roman_number = service.convertNumber(24);
    expect(roman_number).toBe('XXIV');
  })

  it('should convert 25 to XXV correctly', () => {
    roman_number = service.convertNumber(25);
    expect(roman_number).toBe('XXV');
  })

  it('should convert 26 to XXVI correctly', () => {
    roman_number = service.convertNumber(26);
    expect(roman_number).toBe('XXVI');
  })

  it('should convert 27 to XXVII correctly', () => {
    roman_number = service.convertNumber(27);
    expect(roman_number).toBe('XXVII');
  })

  it('should convert 28 to XXVIII correctly', () => {
    roman_number = service.convertNumber(28);
    expect(roman_number).toBe('XXVIII');
  })

  it('should convert 29 to XXIX correctly', () => {
    roman_number = service.convertNumber(29);
    expect(roman_number).toBe('XXIX');
  })

});
