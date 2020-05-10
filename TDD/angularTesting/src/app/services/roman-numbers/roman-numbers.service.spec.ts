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

  it('should convert 40 to XL correctly', () => {
    roman_number = service.convertNumber(40);
    expect(roman_number).toBe('XL');
  })

  it('should convert 41 to XLI correctly', () => {
    roman_number = service.convertNumber(41);
    expect(roman_number).toBe('XLI');
  })

  it('should convert 42 to XLII correctly', () => {
    roman_number = service.convertNumber(42);
    expect(roman_number).toBe('XLII');
  })

  it('should convert 43 to XLIII correctly', () => {
    roman_number = service.convertNumber(43);
    expect(roman_number).toBe('XLIII');
  })

  it('should convert 44 to XLIV correctly', () => {
    roman_number = service.convertNumber(44);
    expect(roman_number).toBe('XLIV');
  })

  it('should convert 45 to XLV correctly', () => {
    roman_number = service.convertNumber(45);
    expect(roman_number).toBe('XLV');
  })

  it('should convert 46 to XXVI correctly', () => {
    roman_number = service.convertNumber(46);
    expect(roman_number).toBe('XLVI');
  })

  it('should convert 47 to XLVII correctly', () => {
    roman_number = service.convertNumber(47);
    expect(roman_number).toBe('XLVII');
  })

  it('should convert 48 to XLVIII correctly', () => {
    roman_number = service.convertNumber(48);
    expect(roman_number).toBe('XLVIII');
  })

  it('should convert 49 to XLIX correctly', () => {
    roman_number = service.convertNumber(49);
    expect(roman_number).toBe('XLIX');
  })

  it('should convert 50 to L correctly', () => {
    roman_number = service.convertNumber(50);
    expect(roman_number).toBe('L');
  })

  it('should convert 81 to LXXXI correctly', () => {
    roman_number = service.convertNumber(81);
    expect(roman_number).toBe('LXXXI');
  })

  it('should convert 82 to LXXXII correctly', () => {
    roman_number = service.convertNumber(82);
    expect(roman_number).toBe('LXXXII');
  })

  it('should convert 83 to LXXXIII correctly', () => {
    roman_number = service.convertNumber(83);
    expect(roman_number).toBe('LXXXIII');
  })

  it('should convert 84 to LXXXIV correctly', () => {
    roman_number = service.convertNumber(84);
    expect(roman_number).toBe('LXXXIV');
  })

  it('should convert 85 to LXXXV correctly', () => {
    roman_number = service.convertNumber(85);
    expect(roman_number).toBe('LXXXV');
  })

  it('should convert 86 to LXXXVI correctly', () => {
    roman_number = service.convertNumber(86);
    expect(roman_number).toBe('LXXXVI');
  })

  it('should convert 87 to LXXXVII correctly', () => {
    roman_number = service.convertNumber(87);
    expect(roman_number).toBe('LXXXVII');
  })

  it('should convert 88 to LXXXVIII correctly', () => {
    roman_number = service.convertNumber(88);
    expect(roman_number).toBe('LXXXVIII');
  })

  it('should convert 89 to LXXXIX correctly', () => {
    roman_number = service.convertNumber(89);
    expect(roman_number).toBe('LXXXIX');
  })

  it('should convert 90 to XC correctly', () => {
    roman_number = service.convertNumber(90);
    expect(roman_number).toBe('XC');
  })

  it('should convert 91 to LXXXI correctly', () => {
    roman_number = service.convertNumber(91);
    expect(roman_number).toBe('XCI');
  })

  it('should convert 92 to LXXXII correctly', () => {
    roman_number = service.convertNumber(92);
    expect(roman_number).toBe('XCII');
  })

  it('should convert 98 to LXXXVIII correctly', () => {
    roman_number = service.convertNumber(98);
    expect(roman_number).toBe('XCVIII');
  })

  it('should convert 99 to LXXXIX correctly', () => {
    roman_number = service.convertNumber(99);
    expect(roman_number).toBe('XCIX');
  })

  it('should convert 100 to C correctly', () => {
    roman_number = service.convertNumber(100);
    expect(roman_number).toBe('C');
  })

  it('should convert 101 to CI correctly', () => {
    roman_number = service.convertNumber(101);
    expect(roman_number).toBe('CI');
  })

  it('should convert 102 to CII correctly', () => {
    roman_number = service.convertNumber(102);
    expect(roman_number).toBe('CII');
  })

  it('should convert 110 to CX correctly', () => {
    roman_number = service.convertNumber(110);
    expect(roman_number).toBe('CX');
  })

  it('should convert 120 to CX correctly', () => {
    roman_number = service.convertNumber(120);
    expect(roman_number).toBe('CXX');
  })

  it('should convert 130 to CXXX correctly', () => {
    roman_number = service.convertNumber(130);
    expect(roman_number).toBe('CXXX');
  })

  it('should convert 140 to CXL correctly', () => {
    roman_number = service.convertNumber(140);
    expect(roman_number).toBe('CXL');
  })

  it('should convert 150 to CL correctly', () => {
    roman_number = service.convertNumber(150);
    expect(roman_number).toBe('CL');
  })

  it('should convert 160 to CLX correctly', () => {
    roman_number = service.convertNumber(160);
    expect(roman_number).toBe('CLX');
  })

  it('should convert 170 to CLXX correctly', () => {
    roman_number = service.convertNumber(170);
    expect(roman_number).toBe('CLXX');
  })

  it('should convert 180 to CLXXX correctly', () => {
    roman_number = service.convertNumber(180);
    expect(roman_number).toBe('CLXXX');
  })

  it('should convert 190 to CXC correctly', () => {
    roman_number = service.convertNumber(190);
    expect(roman_number).toBe('CXC');
  })

  it('should convert 199 to CXCIX correctly', () => {
    roman_number = service.convertNumber(199);
    expect(roman_number).toBe('CXCIX');
  })

  it('should convert 200 to CC correctly', () => {
    roman_number = service.convertNumber(200);
    expect(roman_number).toBe('CC');
  })

  it('should convert 201 to CCI correctly', () => {
    roman_number = service.convertNumber(201);
    expect(roman_number).toBe('CCI');
  })

  it('should convert 202 to CCII correctly', () => {
    roman_number = service.convertNumber(202);
    expect(roman_number).toBe('CCII');
  })

  it('should convert 210 to CCX correctly', () => {
    roman_number = service.convertNumber(210);
    expect(roman_number).toBe('CCX');
  })

  it('should convert 220 to CCX correctly', () => {
    roman_number = service.convertNumber(220);
    expect(roman_number).toBe('CCXX');
  })

  it('should convert 230 to CXXX correctly', () => {
    roman_number = service.convertNumber(230);
    expect(roman_number).toBe('CCXXX');
  })

  it('should convert 240 to CXL correctly', () => {
    roman_number = service.convertNumber(240);
    expect(roman_number).toBe('CCXL');
  })

  it('should convert 250 to CL correctly', () => {
    roman_number = service.convertNumber(250);
    expect(roman_number).toBe('CCL');
  })

  it('should convert 260 to CCLX correctly', () => {
    roman_number = service.convertNumber(260);
    expect(roman_number).toBe('CCLX');
  })

  it('should convert 270 to CCLXX correctly', () => {
    roman_number = service.convertNumber(270);
    expect(roman_number).toBe('CCLXX');
  })

  it('should convert 280 to CCLXXX correctly', () => {
    roman_number = service.convertNumber(280);
    expect(roman_number).toBe('CCLXXX');
  })

  it('should convert 290 to CCXC correctly', () => {
    roman_number = service.convertNumber(290);
    expect(roman_number).toBe('CCXC');
  })

  it('should convert 299 to CCXCIX correctly', () => {
    roman_number = service.convertNumber(299);
    expect(roman_number).toBe('CCXCIX');
  })

  it('should convert 300 to CCC correctly', () => {
    roman_number = service.convertNumber(300);
    expect(roman_number).toBe('CCC');
  })

  it('should convert 301 to CCCI correctly', () => {
    roman_number = service.convertNumber(301);
    expect(roman_number).toBe('CCCI');
  })

  it('should convert 302 to CII correctly', () => {
    roman_number = service.convertNumber(302);
    expect(roman_number).toBe('CCCII');
  })

  it('should convert 310 to CCCX correctly', () => {
    roman_number = service.convertNumber(310);
    expect(roman_number).toBe('CCCX');
  })

  it('should convert 320 to CCCX correctly', () => {
    roman_number = service.convertNumber(320);
    expect(roman_number).toBe('CCCXX');
  })

  it('should convert 330 to CXXX correctly', () => {
    roman_number = service.convertNumber(330);
    expect(roman_number).toBe('CCCXXX');
  })

  it('should convert 340 to CCCXL correctly', () => {
    roman_number = service.convertNumber(340);
    expect(roman_number).toBe('CCCXL');
  })

  it('should convert 350 to CCCL correctly', () => {
    roman_number = service.convertNumber(350);
    expect(roman_number).toBe('CCCL');
  })

  it('should convert 360 to CCCLX correctly', () => {
    roman_number = service.convertNumber(360);
    expect(roman_number).toBe('CCCLX');
  })

  it('should convert 370 to CCCLXX correctly', () => {
    roman_number = service.convertNumber(370);
    expect(roman_number).toBe('CCCLXX');
  })

  it('should convert 380 to CCCLXXX correctly', () => {
    roman_number = service.convertNumber(380);
    expect(roman_number).toBe('CCCLXXX');
  })

  it('should convert 390 to CCCXC correctly', () => {
    roman_number = service.convertNumber(390);
    expect(roman_number).toBe('CCCXC');
  })

  it('should convert 399 to CXCIX correctly', () => {
    roman_number = service.convertNumber(399);
    expect(roman_number).toBe('CCCXCIX');
  })

  it('should convert 400 to CD correctly', () => {
    roman_number = service.convertNumber(400);
    expect(roman_number).toBe('CD');
  })

  it('should convert 401 to CDI correctly', () => {
    roman_number = service.convertNumber(401);
    expect(roman_number).toBe('CDI');
  })

  it('should convert 402 to CII correctly', () => {
    roman_number = service.convertNumber(402);
    expect(roman_number).toBe('CDII');
  })

  it('should convert 410 to CDX correctly', () => {
    roman_number = service.convertNumber(410);
    expect(roman_number).toBe('CDX');
  })

  it('should convert 420 to CDX correctly', () => {
    roman_number = service.convertNumber(420);
    expect(roman_number).toBe('CDXX');
  })

  it('should convert 430 to CXXX correctly', () => {
    roman_number = service.convertNumber(430);
    expect(roman_number).toBe('CDXXX');
  })

  it('should convert 440 to CDXL correctly', () => {
    roman_number = service.convertNumber(440);
    expect(roman_number).toBe('CDXL');
  })

  it('should convert 450 to CDL correctly', () => {
    roman_number = service.convertNumber(450);
    expect(roman_number).toBe('CDL');
  })

  it('should convert 460 to CDLX correctly', () => {
    roman_number = service.convertNumber(460);
    expect(roman_number).toBe('CDLX');
  })

  it('should convert 470 to CDLXX correctly', () => {
    roman_number = service.convertNumber(470);
    expect(roman_number).toBe('CDLXX');
  })

  it('should convert 480 to CDLXXX correctly', () => {
    roman_number = service.convertNumber(480);
    expect(roman_number).toBe('CDLXXX');
  })

  it('should convert 490 to CDXC correctly', () => {
    roman_number = service.convertNumber(490);
    expect(roman_number).toBe('CDXC');
  })

  it('should convert 499 to CXCIX correctly', () => {
    roman_number = service.convertNumber(499);
    expect(roman_number).toBe('CDXCIX');
  })

  it('should convert 500 to D correctly', () => {
    roman_number = service.convertNumber(500);
    expect(roman_number).toBe('D');
  })

  it('should convert 501 to DI correctly', () => {
    roman_number = service.convertNumber(501);
    expect(roman_number).toBe('DI');
  })

  it('should convert 502 to CII correctly', () => {
    roman_number = service.convertNumber(502);
    expect(roman_number).toBe('DII');
  })

  it('should convert 510 to DX correctly', () => {
    roman_number = service.convertNumber(510);
    expect(roman_number).toBe('DX');
  })

  it('should convert 520 to DX correctly', () => {
    roman_number = service.convertNumber(520);
    expect(roman_number).toBe('DXX');
  })

  it('should convert 530 to CXXX correctly', () => {
    roman_number = service.convertNumber(530);
    expect(roman_number).toBe('DXXX');
  })

  it('should convert 540 to DXL correctly', () => {
    roman_number = service.convertNumber(540);
    expect(roman_number).toBe('DXL');
  })

  it('should convert 550 to DL correctly', () => {
    roman_number = service.convertNumber(550);
    expect(roman_number).toBe('DL');
  })

  it('should convert 560 to DLX correctly', () => {
    roman_number = service.convertNumber(560);
    expect(roman_number).toBe('DLX');
  })

  it('should convert 570 to DLXX correctly', () => {
    roman_number = service.convertNumber(570);
    expect(roman_number).toBe('DLXX');
  })

  it('should convert 580 to DLXXX correctly', () => {
    roman_number = service.convertNumber(580);
    expect(roman_number).toBe('DLXXX');
  })

  it('should convert 590 to DXC correctly', () => {
    roman_number = service.convertNumber(590);
    expect(roman_number).toBe('DXC');
  })

  it('should convert 599 to DXCIX correctly', () => {
    roman_number = service.convertNumber(599);
    expect(roman_number).toBe('DXCIX');
  })

  it('should convert 600 to DC correctly', () => {
    roman_number = service.convertNumber(600);
    expect(roman_number).toBe('DC');
  })

  it('should convert 601 to DCI correctly', () => {
    roman_number = service.convertNumber(601);
    expect(roman_number).toBe('DCI');
  })

  it('should convert 602 to CII correctly', () => {
    roman_number = service.convertNumber(602);
    expect(roman_number).toBe('DCII');
  })

  it('should convert 610 to DCX correctly', () => {
    roman_number = service.convertNumber(610);
    expect(roman_number).toBe('DCX');
  })

  it('should convert 620 to DCX correctly', () => {
    roman_number = service.convertNumber(620);
    expect(roman_number).toBe('DCXX');
  })

  it('should convert 630 to CXXX correctly', () => {
    roman_number = service.convertNumber(630);
    expect(roman_number).toBe('DCXXX');
  })

  it('should convert 640 to DCXL correctly', () => {
    roman_number = service.convertNumber(640);
    expect(roman_number).toBe('DCXL');
  })

  it('should convert 650 to DCL correctly', () => {
    roman_number = service.convertNumber(650);
    expect(roman_number).toBe('DCL');
  })

  it('should convert 660 to DCLX correctly', () => {
    roman_number = service.convertNumber(660);
    expect(roman_number).toBe('DCLX');
  })

  it('should convert 670 to DCLXX correctly', () => {
    roman_number = service.convertNumber(670);
    expect(roman_number).toBe('DCLXX');
  })

  it('should convert 680 to DCLXXX correctly', () => {
    roman_number = service.convertNumber(680);
    expect(roman_number).toBe('DCLXXX');
  })

  it('should convert 690 to DCXC correctly', () => {
    roman_number = service.convertNumber(690);
    expect(roman_number).toBe('DCXC');
  })

  it('should convert 699 to DCXCIX correctly', () => {
    roman_number = service.convertNumber(699);
    expect(roman_number).toBe('DCXCIX');
  })

  it('should convert 700 to DCC correctly', () => {
    roman_number = service.convertNumber(700);
    expect(roman_number).toBe('DCC');
  })

  it('should convert 701 to DCCI correctly', () => {
    roman_number = service.convertNumber(701);
    expect(roman_number).toBe('DCCI');
  })

  it('should convert 702 to CII correctly', () => {
    roman_number = service.convertNumber(702);
    expect(roman_number).toBe('DCCII');
  })

  it('should convert 710 to DCCX correctly', () => {
    roman_number = service.convertNumber(710);
    expect(roman_number).toBe('DCCX');
  })

  it('should convert 720 to DCCX correctly', () => {
    roman_number = service.convertNumber(720);
    expect(roman_number).toBe('DCCXX');
  })

  it('should convert 730 to CXXX correctly', () => {
    roman_number = service.convertNumber(730);
    expect(roman_number).toBe('DCCXXX');
  })

  it('should convert 740 to DCCXL correctly', () => {
    roman_number = service.convertNumber(740);
    expect(roman_number).toBe('DCCXL');
  })

  it('should convert 750 to DCCL correctly', () => {
    roman_number = service.convertNumber(750);
    expect(roman_number).toBe('DCCL');
  })

  it('should convert 760 to DCCLX correctly', () => {
    roman_number = service.convertNumber(760);
    expect(roman_number).toBe('DCCLX');
  })

  it('should convert 770 to DCCLXX correctly', () => {
    roman_number = service.convertNumber(770);
    expect(roman_number).toBe('DCCLXX');
  })

  it('should convert 780 to DCCLXXX correctly', () => {
    roman_number = service.convertNumber(780);
    expect(roman_number).toBe('DCCLXXX');
  })

  it('should convert 790 to DCCXC correctly', () => {
    roman_number = service.convertNumber(790);
    expect(roman_number).toBe('DCCXC');
  })

  it('should convert 799 to DCCXCIX correctly', () => {
    roman_number = service.convertNumber(799);
    expect(roman_number).toBe('DCCXCIX');
  })

  it('should convert 800 to DCCC correctly', () => {
    roman_number = service.convertNumber(800);
    expect(roman_number).toBe('DCCC');
  })

  it('should convert 801 to DCCCI correctly', () => {
    roman_number = service.convertNumber(801);
    expect(roman_number).toBe('DCCCI');
  })

  it('should convert 802 to CII correctly', () => {
    roman_number = service.convertNumber(802);
    expect(roman_number).toBe('DCCCII');
  })

  it('should convert 810 to DCCCX correctly', () => {
    roman_number = service.convertNumber(810);
    expect(roman_number).toBe('DCCCX');
  })

  it('should convert 820 to DCCCX correctly', () => {
    roman_number = service.convertNumber(820);
    expect(roman_number).toBe('DCCCXX');
  })

  it('should convert 830 to CXXX correctly', () => {
    roman_number = service.convertNumber(830);
    expect(roman_number).toBe('DCCCXXX');
  })

  it('should convert 840 to DCCCXL correctly', () => {
    roman_number = service.convertNumber(840);
    expect(roman_number).toBe('DCCCXL');
  })

  it('should convert 850 to DCCCL correctly', () => {
    roman_number = service.convertNumber(850);
    expect(roman_number).toBe('DCCCL');
  })

  it('should convert 860 to DCCCLX correctly', () => {
    roman_number = service.convertNumber(860);
    expect(roman_number).toBe('DCCCLX');
  })

  it('should convert 870 to DCCCLXX correctly', () => {
    roman_number = service.convertNumber(870);
    expect(roman_number).toBe('DCCCLXX');
  })

  it('should convert 880 to DCCCLXXX correctly', () => {
    roman_number = service.convertNumber(880);
    expect(roman_number).toBe('DCCCLXXX');
  })

  it('should convert 890 to DCCCXC correctly', () => {
    roman_number = service.convertNumber(890);
    expect(roman_number).toBe('DCCCXC');
  })

  it('should convert 899 to DCCCXCIX correctly', () => {
    roman_number = service.convertNumber(899);
    expect(roman_number).toBe('DCCCXCIX');
  })

  it('should convert 900 to CM correctly', () => {
    roman_number = service.convertNumber(900);
    expect(roman_number).toBe('CM');
  })

  it('should convert 901 to CMI correctly', () => {
    roman_number = service.convertNumber(901);
    expect(roman_number).toBe('CMI');
  })

  it('should convert 902 to CII correctly', () => {
    roman_number = service.convertNumber(902);
    expect(roman_number).toBe('CMII');
  })

  it('should convert 910 to CMX correctly', () => {
    roman_number = service.convertNumber(910);
    expect(roman_number).toBe('CMX');
  })

  it('should convert 920 to CMX correctly', () => {
    roman_number = service.convertNumber(920);
    expect(roman_number).toBe('CMXX');
  })

  it('should convert 930 to CXXX correctly', () => {
    roman_number = service.convertNumber(930);
    expect(roman_number).toBe('CMXXX');
  })

  it('should convert 940 to CMXL correctly', () => {
    roman_number = service.convertNumber(940);
    expect(roman_number).toBe('CMXL');
  })

  it('should convert 950 to CML correctly', () => {
    roman_number = service.convertNumber(950);
    expect(roman_number).toBe('CML');
  })

  it('should convert 960 to CMLX correctly', () => {
    roman_number = service.convertNumber(960);
    expect(roman_number).toBe('CMLX');
  })

  it('should convert 970 to CMLXX correctly', () => {
    roman_number = service.convertNumber(970);
    expect(roman_number).toBe('CMLXX');
  })

  it('should convert 980 to CMLXXX correctly', () => {
    roman_number = service.convertNumber(980);
    expect(roman_number).toBe('CMLXXX');
  })

  it('should convert 990 to CMXC correctly', () => {
    roman_number = service.convertNumber(990);
    expect(roman_number).toBe('CMXC');
  })

  it('should convert 999 to CMXCIX correctly', () => {
    roman_number = service.convertNumber(999);
    expect(roman_number).toBe('CMXCIX');
  })

});
