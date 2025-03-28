const names = ["Семен", "Иван", "Петр", "Татьяна"];
const ages = [18, 27, 74, 34];
for (let i = 0; i < names.length; i++) {
  const answer = names[i]+ " "  +  ages[i] +   " лет ";
  console.log(answer);
}
document.body.append.answer

//const namesAndAges= [...names,...ages]
//console.log(namesAndAges.reverse())

 const namesAndAges= [];
 namesAndAges.push ("Семен", "Иван", "Петр", "Татьяна",18, 27, 74, 34)
for ( let i=namesAndAges.length-1;  i>=0; i--){
    console.log(namesAndAges);
}

const fruits =[]
fruits.push("яблоко", "банан", "апельсин")
const fr=fruits.pop()
console.log(fruits)

const veggies=["капуста","спаржа","помидор"]
const fruitsAndVeggies=[...fruits,...veggies]
