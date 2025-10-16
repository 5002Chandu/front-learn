const number=[1,2,3,4,5];
number.forEach((num)=>console.log(num));

const newnumber=[1,2,3];
const doubled=[];
newnumbers.forEach((num)=> doubled.push(num*2));
console.log(doubled);

const users=[
    { name:"alice",active:false},
    { name:"bob",active:false},
    { name:"john",active:false},
];
users.forEach((user)=>(user.active=true));
const userDetails=[
    { name:"alice",email:"alice@email.com"},
    { name:"bob",email:"bob@email.com"},
    { name:"john",email:"john@email.com" },
];
const notifications=[];
userDetails.forEach((user)=>{
    notifications.push(`Email sent to ${user.name} at ${user.email}`);
});
console.log(notifications);