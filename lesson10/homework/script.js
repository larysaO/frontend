let myNumber=document.createElement("p");
myNumber.innerText=100/(25 % 3);
document.body.append(myNumber);

let myString=document.createElement("p");
let year=2024;
myString.innerText= `Hello ${year} world`;
document.body.append(myString);

let isHuman=document.createElement("p");
isHuman.innerText=42 !=="42";
document.body.append(isHuman);

let myNumber2=document.createElement("p");
myNumber2.innerText=parseInt("123smth");
document.body.append(myNumber2)

