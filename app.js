document.querySelector(".card-body").style.color="white";
document.querySelector(".card-header").style.color="white";
document.querySelector(".card").style.background="rgba(20, 20, 50, 0.8)";
document.querySelector(".card-title").style.fontsize="30px";


const member = [];
member[0]= "Austine Tonayam";
member[1]= "susan mwende";
member[2]= "Igah Abiye";
member[3]= "Izima Obisike";
member[4]= "Akorede Giyasat";
member[5]= "Amos Thibault Bikari";
member[6]= "susan chepkosgei";
member[7]= "Aladesuru Oriyomi";
console.log(member[6]);

let myDetails={
    fName:"susan",
    lName:"chepkosgei",
    bestMovie:"Games People Play",
    bestFood:"Pilau Chicken",
    complexion:"dark",
    birthMont:"january",
    state:"Nairobi",
    groupName:"Ares"

}
console.log(myDetails.bestMovie);

let noun="Susan";
let verb="is";
let adjective="beautiful";
console.log(noun + ' '+verb +' '+adjective);
console.log(noun + ' '+verb +' '+" a bright girl");
console.log(noun + ' '+verb +' '+"good in programming");
console.log("She" + ' '+verb +' '+adjective+' '+"like her mother");
console.log(noun + ' '+verb +' '+"going to the market");

function myFunction(x, y){
    return x%y;
}
console.log(myFunction(8, 5));


// program to solve quadratic equation
let root1, root2;

// take input from the user
let a = prompt("Enter the first number: ");
let b = prompt("Enter the second number: ");
let c = prompt("Enter the third number: ");

// calculate discriminant
let discriminant = b * b - 4 * a * c;

// condition for real and different roots
if (discriminant > 0) {
    root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

    // result
    console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
}

// condition for real and equal roots
else if (discriminant == 0) {
    root1 = root2 = -b / (2 * a);

    // result
    console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
}

// if roots are not real
else {
    let realPart = (-b / (2 * a)).toFixed(2);
    let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);

    // result
    console.log(
    `The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`
  );
}
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

const wordBlanks=("the"+" "+myAdjective+" "+myNoun+" "+myVerb+" "+myAdverb);
console.log(wordBlanks);

function calculateArea(r){
    const pi=3.142;
    return pi*r*r;
}
console.log(calculateArea(9));

let p=8200;
let r=(17.5/100);
let t=2.5;
let SI=p*r*t;
console.log(SI);

let x=10;
let y=4;
let z=x%y;
console.log(z);

var meritWeigh=78;
var meritHeight=1.69;
var meritBMI=(meritWeigh*(meritHeight*meritHeight));
console.log(meritBMI);

var nutjobWeigh=92;
var nutjobHeight=1.95;
var nutjobBMI=(nutjobWeigh*(nutjobHeight*nutjobHeight));
console.log(nutjobBMI);

let meritHigherBMI=222.78;
let nutjobHigherBMI=349.83;
console.log(meritHigherBMI>nutjobHigherBMI);

var meritWeigh2=85;
var meritHeight2=1.76;
var meritBMI2=(meritWeigh2*(meritHeight2*meritHeight2));
console.log(meritBMI2);

var nutjobWeigh2=95;
var nutjobHeight2=1.88;
var nutjobBMI2=(nutjobWeigh2*(nutjobHeight2*nutjobHeight2));
console.log(nutjobBMI2);

let meritHigherBMI2=263.29;
let nutjobHigherBMI2=335.77;
console.log(meritHigherBMI2>nutjobHigherBMI2);

