//arrow function-shorthand of the main function//remove function,brackets,return
/*const pavan= (e,d)=>e+d;//assiging the function
console.log(pavan(4,89));
const riya= e=>e+4;//with function name
console.log(riya(4));*/
/*function add(a,b){
    c=a+b;
    return c;
}
console.log(add(3,4));*/
//call back-a function passed as an argument to another function
/*function function1(name,call){
    console.log("joyy boyyy" + name);
    console.log(call(name));
}
const function2 = name =>"hello"+name;
const function3 = name =>"bye"+name;
function1('parvathii',function2);
function1('deviii',function3);*/
/*function function1(a,b,call){
    call(a,b);
}
function function2(a,b){
    console.log('multiplication',a*b);
    console.log('divison',a/b);
}
function1(20,4,function2);*/
/*const riya= e=>e+4;//single function 
console.log(riya(4));
const parvathi= (e,d)=>e+d;//without assigning
console.log(parvathi(20,40));
function add(a,b){//using function
    c=a+b;
    return c;
}
console.log(add(3,4));
function languages(){
    console.log("java")
    console.log("python")
    console.log("c")
    console.log("c++")
    console.log("js")
    console.log("react")
}
languages();*/
function function1(name, call1, call2, call3) {
  console.log("Hello " + name);
  console.log(call1(name));
  console.log(call2(name));
  console.log(call3(name));
}

const function2 = name => "Good Morning " + name;
const function3 = name => "Good Night " + name;
const function4 = name => "Good Evening " + name;

function1("Kusuma", function2, function3, function4);
