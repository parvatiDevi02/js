    a='10';
    b='10';
     if(a===b){
        console.log("a and b are equal");
    }
    console.log("Type of a:",typeof a);
   // condition? True block:False block;
    a='18';
    b='18';
    if (a<=18 && b<=18) 
        console.log("not allow");
    else 
        console.log("allow");
      ///-----------LOOPS---------------///
arr=[1,2,3,4,5,6,7,8,9,10]
for(i=0;i<9;i++){

  console.log(arr[i])
  i=i+1
} 
arr=[21,26,343,45,38,444,99,14,63,56]
let i=0;
while (i<10) {
  if(arr[i]%2 ==0){
    console.log(arr[i]+'even')
  }
  else{
    console.log(arr[i]+'odd')
  }
  i=i+1
}
function phone(){
  console.log("lift the phone")
}
phone();
function subjects(){
    console.log("EMI")
    console.log("NMC")
    console.log("SCT")
    console.log("WSN")
    console.log("MS")
    console.log("NICT")
}
subject();
let num = [23, 56, 46, 346, 568, 20, 89, 77, 30, 54];

for (let i = 0; i < 7; i++) {
  let result = num[i] * 3;
  console.log(result);
}
let arr=[2,3,4,5,6,7,8,9]
console.log(arr.at(-2))
let numbers1=[2,3,4,5,6,7,8]
numbers.push('20');
console.log(numbers);
let number2=[2,3,4,5,6,7,8]
numbers.pop('3');
console.log(numbers);
let number3=[2,3,4,5,6,7,8]
numbers.push('37','40');
console.log(numbers);
let number4=[2,3,4,5,6,7,8]
numbers.unshift('30');//add the element in first position
console.log(numbers);
let numbers5=[2,3,4,5,6,7,8]
numbers.shift();//add the element in first position
console.log(numbers);
let numbers6=[2,3,4,5,6,7,8]
for(let y of numbers){
  console.log(y)
}
let numbers=[2,3,4,5,6,7,8]
for (let i in numbers) {
  console.log(numbers[i])
}




