const numbers=[1,2,3,4,5,6];
const evens=numbers.filter((num)=>num%2==0);
console.log(evens);

const words=["cat","monkey","dog","butterfly"];
const longwords=words.filter((word)=>word.length > 4);
console.log(longwords);

const prices=[50,23,200.500,89];
const affordable=prices.filter((price) => price< 100);
console.log(affordable);

const people=[
    { name:"alice",age:23},
    { name:"bob",age:32 },
    { name:"jane",age:19},
    {name:"john",age:16},
];
const adults=people.filter((person)=>person.age>=18);
console.log(adults);

