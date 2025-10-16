const numbers=[1,2,3,4,5];
const sum=numbers.reduce((total,num)=>total+num,0);
console.log(sum);

const scores=[25,36,45,85,90];
const maxScore=scores.reduce((max,score)=>Math.max(max,score),scores[0]);
console.log(maxScore);

const words=["Helloo","Elee","!"];
const sentence=words.reduce((text,word)=>text+" "+word," ");
console.log(sentence.trim());

const cart=[
    { item:"Book",price:25,quantity:3},
    { item:"pen",price:30,quantity:5},
    { item:"Notebook",price:8,quantity:1},
];
const total=cart.reduce((sum,item)=>sum+item.price*item.quantity);
console.log(cart);