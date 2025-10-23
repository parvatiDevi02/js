// _______settimeout______
//  console.log("before time out")
//   setTimeout(function(){
//      console.log("after time out")
//   },8000)
// ______________settime interval________________

// let count=0;
// let interval=setInterval(function(){
//     console.log(count);
//     count=count+1;
//     if(count==5)
//     {
//         clearInterval(interval)
//     }
// },5000)
// async function register(){
//     return new Promise((resolve,)=>{
//         setTimeout(() => {
//             console.log("user registered");
//             resolve()
//         },1000);
//     })
// } 
// async function login(){
//     return new Promise((resolve,)=>{
//         setTimeout(() => {
//             console.log("user logged in");
//             resolve()
//         },1000);
//     })
// } 
// async function fetchdata(){
//     return new Promise((resolve,)=>{
//         setTimeout(() => {
//             console.log("fetch data");
//             resolve()
//         },1000);
//     })
// } 
// async function displaydata(){
//     return new Promise((resolve,)=>{
//         setTimeout(() => {
//             console.log("display data");
//             resolve()
//         },1000);
//     })
// } 
// async function user()
// {
//     await register();
//     await login();
//     await fetchdata();
//     await displaydata()
// }
// user();

/*function register(){
    return new Promise((resolve,)=>{
        setTimeout(() => {
            console.log("user registered");
            resolve()
        },1000);
    })
} 
function login(){
    return new Promise((resolve,)=>{
        setTimeout(() => {
            console.log("user logged in");
            resolve()
        },1000);
    })
} 
function fetchdata(){
    return new Promise((resolve,)=>{
        setTimeout(() => {
            console.log("fetchdata");
            resolve()
        },1000);
    })
} 
function displaydata(){
    return new Promise((resolve,)=>{
        setTimeout(() => {
            console.log("display data");
            resolve()
        },1000);
    })
} 
register()
.then(()=>login())
.then(()=>fetchdata())
.then(()=>displaydata())
.catch(()=>console.log("error"))
.finally(()=>console.log("final block is executed"))*/
