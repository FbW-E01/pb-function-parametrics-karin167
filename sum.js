// Create a function sum which accepts any amount of numbers and return the sum of their addition
//Have 3 ways :

//A
// const sum3 = (...args) =>  args.reduce((acc,v)=>acc+v);
 

//B
//const sum2 = (...args) =>{
// let res=0;
//  args.forEach(value=>res+=value);
// return res;
// }


//C
const sum = (...args) =>{
  let res=0;
  for(let i=0;i<args.length;i++){
    res+=args[i];
  }
  return res
}

console.log(sum(1)); // -> 1
console.log(sum(5, 15)); // -> 20
console.log(sum(25, 25, 50)); // -> 100
console.log(sum(1)); // -> 1
console.log(sum(1, 15)); // -> 16
console.log(sum(25, 25, 20)); // -> 70


