function function1(name, call1, call2, call3) {
  console.log("Hello " + name);
  console.log(call1(name));
  console.log(call2(name));
  console.log(call3(name));
}
    
const function2 = name => " hai " + name;
const function3 = name => "helloo " + name;
const function4 = name => "have a nice day " + name;
function1("parvathi devi", function2, function3, function4);
