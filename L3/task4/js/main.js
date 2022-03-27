'use strict'
//task1
let a = 1, b = 1;
let c = ++a; // a=2
let d = b++; // b=1 /постфиксная форма 

//task 2
let v = 2;
let x = 1 + (v *= 2);//(2*2=4)/ 4+1=5

//task 3
"" + 1 + 0//'10'
"" - 1 + 0//-1
true + false//1
6 / "3"//2
"2" * "3"//6
4 + 5 + "px"//"9px"
"$" + 4 + 5//"$45"
"4" - 2//2
"4px" - 2//nan
7 / 0//infinity
"  -9  " + 5//-95
"  -9  " - 5//-14
null + 1//1
undefined + 1//nan
" \t \n" - 2//-2

//task4

let n = +prompt("Первое число?", 1);
let i = +prompt("Второе число?", 2);

alert(n + i); // 12

//task5
5 > 4//true
"ананас" > "яблоко"//false
"2" > "12"//true
undefined == null //true
undefined === null //false
null == "\n0\n"//false
null === +"\n0\n"//false

