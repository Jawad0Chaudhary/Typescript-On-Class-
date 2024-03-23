//COMPARISON OPERATOR'
//"Equals ()=="
let a:number = 10;
let b:number = 12;
console.log(a == b);

let c:number = 10;
let d:number = 10;
console.log (c == d);
//Logical Operator
//Less than (<)
console.log(a < b);
//Greater than
console.log(b > a);

let e:string = "osama";
let f:string = "OSAMA";
console.log(e != f); // Not Equal
console.log(e == f); //Equal's tp

let g:number = 5;
let h:number = 5;
console.log(g < h);

//And Operator "&&"
a = 10;
b = 20;
c = 5;
console.log((a < b)&&(a > c))
console.log((b > a)&&(c > a))

//Or Operator "||"
a = 20;
b = 10;
c = 8;
console.log((a > b)||(c > a));
console.log((a < b)||(c > b));

//Nor Operator "!"
a=5;
b=6;
console.log(!(a == b))