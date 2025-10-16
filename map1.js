const numbers=[1,2,3,4,5];
const doubled=numbers.map((num)=>num*2);
console.log(doubled);

const fruits=["orange","grapes","dragon fruit"];
const upperFruits=fruits.map((fruit)=>fruit.toUpperCase());
console.log(upperFruits);

const prices=[20,30,40];
const priceTags=prices.map((price)=>"$"+ price);
console.log(priceTags);

const users=[
    { name:"Lilly",age:25},
    { name:"Milliee", age:20},
    { name:"Lunaa",ahe:22},
];
const names=users.map((user)=>user.name);
console.log(names);
 
const rectangles=[
    { width:20,height:6 },
    { width:8,height:3},
    { width:15,height:10},
];
const areas=rectangles.map((rect)=>rect.width*rect.height);
console.log(areas);