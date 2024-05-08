// what is the type of operator in java script 
// let a = 3;
// console.log(typeof a);
// end 
// what is the result of type of null 
// let a = null;
// console.log(typeof a);
// object 
// end
// convert a number into string 
// let number = 4;
// number = number+"";
// console.log(typeof number);
// end 
// convert a string into Number
// let str = "56";
// str = +str;
// console.log(typeof str);
// end 
// convert a string into Number
// let str = "56";
// str = Number(str)
// console.log(typeof str);
// end 
// explain the concept of truthy and falsy in javascript 
// falsy value 
// let a = 0;
// let b = "";
// let c = null;
// let d = undefined;
// if(a & b&c&d){
//     console.log("true");
// }
// else{
//     console.log("false");
// }
// end
// non empty field is truthy values in javascript
// let a = "@@";
// let b = 8;
// if(a){
//     console.log("true");
// } 
// else{
//     console.log("false");
// }
// end 

// end 
// parseInt and parsefloat in java script 
// let a = "5.44";
// a = parseInt(a);
// console.log(a,typeof a);
// let a = "5.44";
// a = parseFloat(a);
// console.log(a,typeof a);
// end 
// what is the purspose of nan in java script 
// let a = "@";
// console.log(isNaN(a));
// end 
// example 
// let a = "@2";
// a = parseInt(a);
// console.log(a);
// end 
// more on data types 
// concate in java script 
// let a = "5" + 5 +5;
// console.log(a);
// end 
// end 
// implicit and explicit in java script 
// implicit
// let a = "5" - 5;
// console.log(a);
// end 
// explicit
// let a = Number("5");
// console.log(a, typeof a);
// end 
// end 
// // question of opertor in java script 
// console.log("5" - 5);
// console.log("5" * 5);
// console.log("5" / 5);
// console.log("5" + 5);
// console.log(true + 5);
// // end 
// expression in java script 
// let a  = 7;
// is is expression 
// end 
// assignment opearator  in java script is used to assgin valur to a variable
// let a = 3;
// end 
// airthmetic opertor in jav script 
// console.log(5+5);
// console.log(5*5);
// console.log(5**2);
// console.log(5-5);
// console.log(5/5);
// console.log(5%5);
// end
// comparison operator in jav script 
// it return result in true or false 
// is compae only value 
// console.log(5==5);
// end 
// it compare value and data type 
// console.log(5==="5");
// end  
// not equal value and data type 
// console.log(5!=="5");
// end 
// greater than or equal to 
// console.log(5>=5);
// end 
// less than or equal to 
// console.log(5<=2);
// end
// end 
// logical operator in java script 
// logical and 
// if both operands are true tehen is return true else false 
// let a = 6;
// let b= "6";
// console.log(a == b && a===b);
// end 
// logical or
// if one operand is true then it return true else false 
// let a ="6";
// let b = 6;
// console.log(a==b || a === b);
// console.log(0||3||5);
// end  
// end 
// let a = false;
// console.log(!a);
// end 
// interview question 
// write a program that determines if a person is eligible to drive based on their age being greatore than or equal to 18 and having a valid driver's lincence
// let personAge = 13;
// let drivingLisence = true;
// if(personAge>=18 && drivingLisence == true){
//     console.log(`person age is ${personAge} and person have their lisence . person is eligible to drive`);
// }
// else{
//     console.log("your are not eligible to drive");
// }
// end 
// write a program to check if a person is eligible to drive or not . age must be equal to or greater than 18 with ternary operator 
// let age = 17;
// let eligible = (age>=18) ? ("you are eligible"):("your are not eligible");
// console.log(eligible);
// end
// let score = 81;
// if(score==33){
//     console.log(`the student score is ${score} and the student is pass`);
// }
// else if(score<33){
//     console.log(`the student score is ${score} and the student is fail`);
// }
// else if(score > 33 & score <= 60){
//     console.log(`the student score is ${score} and the student is pass , grade of student is c`);
// }
// else if(score > 60 & score <= 80){
//     console.log(`the student score is ${score} and the student is pass , grade of student is b`);
// }
// else if(score > 80 & score <= 100){
//     console.log(`the student score is ${score} and the student is pass , grade of student is A+`);
// }
// let temp = 22;
// if(temp >=32){
//     console.log(` the temp is ${temp } and got to the hill station`);
// }
// else{
//     console.log(`the temp is ${temp} and ghar me tv dekho`);
// }
// let personAge =18;
// let citizen = false;
// let resister = false;
// if(personAge<18 && citizen == false && resister == false){
//     console.log("you are not eligible to vote");
// }
//  else if(personAge>=18 && citizen == false){
//     console.log("you are not eligible due to the citizenship");
// }
// else if(personAge>=18 && citizen == true && resister == false){
//     console.log("you are not eligible due to the nit resister");
// }
// else if(personAge>=18 && citizen == true && resister == true){
//     console.log(`your age is ${personAge}, citizenship is ${citizen}, resister ${resister} you are eligible to vote`);
// }
// else{
//     console.log("no condition match");
// }
// write a program to check if a number is odd or even
// let num = 0;
// if(num%2 ==0){
//     console.log(`number is ${num} and your number is even`);

// }
// else{
//     console.log(`number is ${num} and your number is odd`);

// }  
// end 
// write a program to check if a number is prime or not prime 
// function primeOrNot(num) {
//     let isPrime = true;
//     for(let i = 2; i<num; i++){
//         if(num % i === 0){
//             isPrime = false;
//             break;

//         }
//     }
//     if(isPrime){
//         console.log(`your number is ${num} and your number is prime`);
//     }
//     else{
//         console.log(`your number is ${num} and your numbe is not prime`);
//     }
// }
// primeOrNot(9)
// end
// write a program to check if a number is postive , negative or zero
// let num = 2;
// if(num > 0){
//     console.log("number is postive");
// }
// else if(num <0){
//     console.log("number is negative");
// }
// else{
//     console.log("number is zero");
// }
// end  


// end 
// switch statement intrview question 
// let day = "tuesday";
// switch(day){
//     case "monday":
//         console.log("go to your duty");
//         break;
//         case "tuesday":
//             console.log("got to the hanuman temple");
//             break;
//             case "sunday":
//                 console.log("it is holiday");
//                 break;
//                 default :
//                 console.log("no condition match");
// }
// make a simple caluclator with switch statement
// function caluclator(a,b,operator){
//     switch(operator){
//         case "+":
//             console.log(`the sum of ${a} and ${b} is equal to ${a+b}`);
//             break;
//             case "-":
//             console.log(`the substraction of ${a} and ${b} is equal to ${a-b}`);
//             break;
//             case "*":
//                 console.log(`the multiplication of ${a} and ${b} is equal to ${a*b}`);
//                 break;
//                 case "/":
//                 console.log(`the divisible of ${a} and ${b} is equal to ${a/b}`);
//                 break;
//                 case "**":
//                 console.log(`the exponnetiations of ${a} and ${b} is equal to ${a**b}`);
//                 break;
//                 case "%":
//                 console.log(`the reminder of ${a} and ${b} is equal to ${a%b}`);
//                 break;
//                 default:
//                     console.log("no opertor match");
//     }
// } 
// caluclator(4,8,"+")
// caluclator(2,8,"*")
// caluclator(9,8,"-")
// caluclator(9,2,"**")
// caluclator(9,45,"/")
// caluclator(9,45,"%")
// end 
// end 
// while loop in java script 
// let i = 5;
// while(i<10){
//     console.log( i);
//     i++
// }

// end
// do while loop in java script 
// let postiveNumber;
// do{
//      postiveNumber = prompt("enter your number");
//      postiveNumber = Number(postiveNumber);
// }while(postiveNumber<0 || isNaN(postiveNumber))
// console.log("you entered a postive number");
// end 
// for loop interview question
//  let table = 5;
//  for(let i = 1; i<=10; i++){
//     console.log(`${table} * ${i} = ${table*i}`);
//  }
// find sum of 1 to 10 number 
// let sum = 0;
// for(let i = 1; i<=10; i++){
//     sum
//     += i;
// }
// console.log(sum);
// end 

// end 
// function section start 
// write a program to greet some person 
// function greet(name){
//     console.log(`hello ${name} , welcome to our institue`);
// }
// greet("aditya")
// greet("ram")
// greet("sham")
// end 
// function expression 
// named function expression 
// let a = function sum(a,b){
//     console.log(a+b);
// }
// a(4,5)
// end 
// without name function expresson 
// let a = function (){
//     console.log("hello");
// }
// a()
// end 
// immediately invokded function 
// (
//     function(a,b){
//         console.log(a+b);
//     }
// )(2,5)

// end

// end 
// ecmaScript 2015 new feature 
// difference between let var nd const 
// var a= 5;
// {
//     var a = 6;
//     console.log(a)
// }
// console.log(a);
// let a= 4;
// {
//     let a = 5;
//     console.log(a);
// }
// console.log(a);
// const a = 4;
// a = 3;
// console.log(a);
// we can not update the const value 
// end 
// default parameter in java script 
// function sum(a,b=5){
//     console.log(a+b);
// }
// sum(3)
// end 
// fat arrow function 
// let greet = (name) => {
//     console.log(`hello ${name}, welcome To our institue`);
// }
// greet("aditya")
// end 
// if function body consist single expression the braces and the return keyword can be omitted
// let sum = (a,b) => a+b;
// console.log(sum(7,9));

// end 
// function intrview question 
// otp genreator in java script 
// let optGenerator = (limit) => {
//     let otp = "";
//     let randomOtp ;
//     for(let i = 1; i<=limit; i++){
//         randomOtp = Math.floor(Math.random() * 10);
//         otp+= randomOtp
//     }
//     return `Otp : ${otp}`
// }
// console.log(optGenerator(6));
// end 
// fabonacci series in java script
// let fabonacciSeries = (n) => {
//     let arrayOutput = [0,1];
//     for(let i = 2; i<n; i++){
//         arrayOutput.push(arrayOutput[i-1] + arrayOutput[i-2]);
//     }
//     return arrayOutput;
// } 
// console.log(fabonacciSeries(10));
// end 
// for(let i = 100; i>=0; i--){
// if(i == 0){
//     console.log("0 bottel on the table");
// }
// console.log(`the bottel of beer on table ${i}, take one bottel and now bottel on table ${i-1}`);
// }
// let getMilk = (bottels,balance= 100,price=20,) => {
//     let buyPrice = bottels * price;
//     let saving = balance - buyPrice;
//     return `the total balance is ${balance}, the price of one bottel is ${price}, the saving is ${saving} the buying bottel is ${buyPrice/price}`
// }
// console.log(getMilk(4));
// write a program 2 person are saying make me table of own need 
// let makeTable = (name,table) =>{
//     for(let i = 1; i<=10; i++){
//         console.log(`the table of ${name}: ${table} * ${i} = ${table*i}`); 
//     }
// }
// makeTable("aditya",5);
// makeTable("ram",10);
// end 

// end 
// array in java script 
// crearing an array 
// let persons = ["aditya","ram","sham","kartik"];
// end
// accessing the array element
// let persons = ["aditya","ram","sham","kartik"];
// console.log(persons[2]); 

// end 
// updating the array value
// let persons = ["aditya","ram","sham","kartik"];
// persons[2] = "Vini";
// console.log(persons);
// end 
// // for of loop in array 
// let person = ["aditya","ram","shayam"];
// for(item of person){
//     console.log(`Mr.${item}`);
// }
// // end 
// for in loop in array 
// let person = ["aditya","ram","shayam"];
// for(item in person){
//     console.log(item);
// }
// // en d
// for each methosd in array 
// let person = ["aditya","ram","shayam"];
// person.forEach(
//     (current,index) => {
//         return `${current} ${index}`;
//         // return does not work in for each 
//     }
// )
// end 
// map method in array 
// let person = ["aditya","ram","shayam"];
// let result = person.map(
//     (curr,index) => {
//         return `hello, Mr.${curr}`
//     }
// )
// console.log(result);
// end 
// // push method in array 
// let person = ["aditya","ram","shayam"];
// person.push("ram","bhagwan");
// console.log(person);
// // end 
// pop method in array 
// let person = ["aditya","ram","shayam"];
// console.log(person.pop());
// console.log(person);
// end 
// shift method in array 
// let person = ["aditya","ram","shayam"];
// person.shift();
// console.log(person);
// end 
// unshift method in array
// let person = ["aditya","ram","shayam"];
// console.log(person.unshift("vini"));
// console.log(person);
// end 
// splice method in array
// let person = ["aditya","ram","shayam"];
// person.splice(1,1,"ram","vini");
// console.log(person);

// end 
// // indexof method in araay 
// let person = ["aditya","ram","shayam"];
// console.log(person.indexOf("aditya"));
// // end 
// // last indexof method in array
// let person = ["aditya","ram","shayam"];
// console.log(person.lastIndexOf("ram",0));
// // end 
// includes method in array 
// let person = ["aditya","ram","shayam"];
// console.log(person.includes("RAm"));
// it return boolean result 
// end 
// // question 
// let years = ["jan","feb","march"];
// console.log(years.push("DECEMEBER"));
// console.log(years);
// // end 
// end 
// let months = ["jan","feb","march"];
// console.log(months.splice(2,1,"March"));
// console.log(months);
// delet june from an array
// let months = ["jan","feb","march","june"];
// months.pop();
// console.log(months);


// end 
// find indx method in Array
// let num = [1,1,2,4,5,5,43,53];
// let result = num.findIndex(
//     (curr) => {
//         return curr > 4;

//     }
// )
// console.log(result);
// end 
// let say user wants to delet value 3 from an array 
// let num = [1,2,3,3,3,4,5,5,5];
// let result = num.filter(
//     (curr) => {
//         return curr !== 3;

//     }
// )
// console.log(result);

// end 
// filter unique value from two aray 
// let arr1 = [1,2,3,4,5];
// let arr2 = [1,43,3,2,2,3,4,4];
// let uniqueValue =   (a,b) =>{
//     let combine = [...a,...b];
//     let uniqueArray = [...new Set(combine)];
//     return uniqueArray;
// }
// console.log(uniqueValue(arr1,arr2));
// enbd 
// let person  = ["aditya","ram","kartik","vishal"];
// let result = person.map(
//     (curr) => {
//         return curr.toLocaleUpperCase();
//     }
// )
// console.log(result);
// end 
// let number = [2,3,4,2,4,4,4,3,7,7];
// let result = number.map(
//     (curr) => {
//         if(curr % 2== 0){
//             return curr*curr;
//         }
//     }
// ).filter(
//     (curr) => {
//         if(curr !== undefined){
//             return curr;
//         }
//     }
// )
// console.log(result);
// end 
// let person = ["aditya","ram","rahul"];
// let result = person.map(
//     (curr) => {
//         return `Mr.${curr}`

//     }
// )
// console.log(result);
// end 
// // reduce method in array 
// let productPrice = [100,200,200,100];
// let result = productPrice.reduce(
//     (accu,curr) => {
//         return curr+accu

//     },0
// )
// console.log(result);

// // end 
// interview question 
// write a program to genreate random person froma an array 
// let person = ["aditya","ram","rahul","kartik","sham","vishal","abishek","nishant"];
// let randomPerson = (array) => {
//     let randomIndex = Math.floor(Math.random() * array.length) + 0;
//     let randomPerson = array[randomIndex];
//     return `random person: ${randomPerson}`;
// }
// console.log(randomPerson(person));
// end 
// write a program to generate random person from an array and check if inddex of random person is odd or even 
// let person = ["aditya","ram" ,"sham","vishal","abhi","rahul","nishant","akshit"];
// let randomPerson = (array) => {
//     let randomIndex = Math.floor(Math.random() * array.length);
//     let randomPerson = array[randomIndex];
//     if(randomIndex % 2 ==0){
//         return `random person: ${randomPerson} and index ${randomIndex} is  even`
//     }
//     else{
//         return `random person: ${randomPerson} and index ${randomIndex} is  odd`
//     }

// }
// console.log(randomPerson(person));
// end
// end 
// end 
// strings in java script 
// how to use single or double quotes in a string
// let str = "aditya \"thakur\""
// console.log(str); 
// end 
// string length find 
// let str = "aditya thakur";
// console.log(str.length);
// end 
// find index in string
// let str = "aditya thakur";
// console.log(str.indexOf("a",0));
// let  str = "aditya thyakur";
// console.log(str.indexOf("tya"));
// end 
// how to convert a string in an array
// let str = "aditya";
// let newArray = Array.from(str);
// console.log(newArray); 
// end 
// search method in string
// let str = "aditya";
// console.log(str.search(/Ty/gi));
// end 
// match method in string
// let str = "aditya thkaur"
// console.log(str.match(/Aditya/i));
// end 
// matchall method in string 
// let str = "aditya thkaur aditya";
// console.log([...str.matchAll(/aditya/g)]);

// 3nd\
// include methos in string 
// let str = "aditya thkaur";
// console.log(str.includes("aditya")); 
// end 
// start with method in string
// let str = "aditya";
// console.log(str.startsWith("d"));
// end 
// endwith mrthodin string 
// let str = "aditya thkaur";
// console.log(str.endsWith("r"));
// end 
// slice method in string 
// let str = "aditya thkaur from bharmour";
// console.log(str.slice(0,8));
// end 
// substring method in string 
// let str = "aditya thakur";
// console.log(str.substring(0,3));
// end 
// replace method in string 
// let str = "hello aditya , rahul";
// console.log(str.replace("hello","hi"));
// end 
// replace all method in string 
// let str = "aditya  hello  hello thkaur";
// console.log(str.replaceAll("hello","hi"));
// // end 
// chart at method in string 
// // 
// let str = "aditya thkaur";
// console.log(str.charAt(5));
// end 
// let str = "aditya";
// console.log(str.charCodeAt(2));
// end 
// at method in sttring 
// let str = "aditya";
// console.log(str.at(-4));

// end
// tolowercase method in string 
// let str = "Aditya Thakur";
// console.log(str.toLocaleLowerCase());
// end 
// uppercase method in string 
// let str = "aditya thkaur";
// console.log(str.toUpperCase());

// end 
// trim method in string 
// let str = "     aditya     ";
// console.log(str.length);
// str = str.trim();
// console.log(str.length);
// end 
// split method in string 
// let str ="aditya,ram,thakur";
// str = str.split(",");
// console.log(str);
// t not return delimeter e
// let str = "aditya,dfd"
// console.log(str.split("a"));
// end 
// end 
// enmd 
// maths object in java script 
// Math.round method in java script 
// console.log(Math.round(4.4));
// end 
// Math.floor math objectin java script e
// console.log(Math.floor(4.9));
// end 
// Math.ceil in math object 
// console.log(Math.ceil(4.1));
// end 
// Math.abs in amth objec e
// console.log(Math.abs(7));
// end 
// Math.trunc in math object
// console.log(Math.trunc(4.6));
//  ned 
// Math.pow in math Object
// console.log(Math.pow(4,2));
// end
// Math.sqrt in math object 
// console.log(Math.sqrt(81));
// end
// Math.random math object 
// console.log(Math.floor(Math.random() * 50) + 1);
// end 
// end 
// searching in dom 
// let btn = document.querySelector(".btn")
// end 
// crud operation in java script
// create element in drud operation 
//  let p = document.createElement("p").innerText = "new paragraph" ;
//  console.log(p);
// end 
// appendChild in crud operation 
// let inputField = document.querySelector(".input");
// let todo_list = document.querySelector(".todo-list");
// let btn = document.querySelector("button");
// let addTodo = () => {
//     let p = document.createElement("p");
//     p.textContent = inputField.value;
//     todo_list.append(p);
//     inputField.value = ""
// }

// btn.addEventListener("click", () => {
//     addTodo()
// }
// )
// todo_list.addEventListener("click" , (e) => {
//     let currentElement = e.target;
//     currentElement.remove()
// })


// end 
// keyboard event in dom 
// let inputFiled = document.querySelector(".input");
// let change = (e) => {
//     document.querySelector(".event-type").textContent = `Event Type: ${e.type}`
//     document.querySelector(".press-key").textContent = `Key Pressed: ${e.key}`
//     document.querySelector(".key-code").textContent = `Key Code: ${e.code}`
//     document.querySelector(".char-code").textContent = `Char Code: ${e.key.charCodeAt(0)}`
// }

// // inputFiled.addEventListener("keydown",change)
// inputFiled.addEventListener("keyup",change)
// end 
// input event in dom 
// let inputFiled = document.querySelector(".input");
// let input =(event) => {
//     document.querySelector(".event-type").textContent = `Event type: ${event.type}`
//     document.querySelector(".input-value").textContent = `Input vlaue: ${event.target.value}`
//     document.querySelector(".input-type").textContent = `Input Type: ${event.inputType}`
//     document.querySelector(".input-name").textContent = `Input name: ${event.target.name}`
// }
// inputFiled.addEventListener("input",input)
// inputFiled.addEventListener("change",input)
// end 


// end 
// local storage in java script 
// how to add dat in localstorage 
// localStorage.setItem("name","aditya thakur");

// end 
// how to get data from localstorage 
// console.log(localStorage.getItem("name"))
// end 
// howe to remove data from localStorage 
// localStorage.removeItem("name")
// console.log(localStorage.getItem("name"));
// end 
// object data 
// let obj = {
//     name:"aditya",
//     age:19,
//     village:"panjsei"
// }
// localStorage.setItem("myData",JSON.stringify(obj));
// // let myData = localStorage.getItem("myData");
// let onj = JSON.parse(localStorage.getItem("myData"))
// console.log(onj); 
// array in localstorage 
// let arr = ["aditya","rahul","thakur","ram"];
// localStorage.setItem("names",JSON.stringify(arr));
// console.log(JSON.parse(localStorage.getItem("names")));

// end 
// end 
// todo lis t project 
let inputField = document.getElementById("input");
let addBtn = document.querySelector(".todo");
let todo_list = document.querySelector(".todo-list-item")
// get dat form local storage 
let getDataFormLocal = () => {
    return JSON.parse(localStorage.getItem("todoListData"));
}
// end 
// update dat on localstorage 
let updatedData = (localList) => {
    localStorage.setItem("todoListData",JSON.stringify(localList))
}
// end 
let loclTodoList = getDataFormLocal() || [];
// todoDataCon 
let todoDataCon = () => {
    let div = document.createElement("div");
    div.classList.add("todo-item");
    div.innerHTML = ` <li>${todoListVlaue}</li><button class = "delete">Delete</button> `;
    todo_list.append(div);

}
// end 
// addtododata dynamic 
let addTodoDynamic = (currE) => {
    let div = document.createElement("div");
    div.classList.add("todo-item");
    div.innerHTML = ` <li>${currE}</li><button class = "delete">Delete</button> `;
    todo_list.append(div);

}
// end 
// add element inside the div
let addTodoList = (event) => {
    let todoListVlaue = inputField.value.trim();
    inputField.value = "";
    
    if (todoListVlaue !== "" && !loclTodoList.includes(todoListVlaue)) {
        loclTodoList.push(todoListVlaue)
        loclTodoList = [...new Set(loclTodoList)]
        localStorage.setItem("todoListData", JSON.stringify(loclTodoList));
        addTodoDynamic(todoListVlaue);
        
    }



}
// end 
// show todo list 
let showTodoList = () => {
    loclTodoList.forEach((currTodo) => {
        addTodoDynamic(currTodo);

    });

}
showTodoList();
// end
// remove todo list 
let removeTodo = (e) => {
    let todoRemove = e.target;
   let previouEle = e.target.previousElementSibling.innerText;
   let parent = todoRemove.parentElement;
    loclTodoList = loclTodoList.filter(
    (curr) => {
        return curr !== previouEle.toLowerCase();
       
    }
   )
   updatedData(loclTodoList);
   parent.remove();

}
// end 
// call updated data 

// end 

addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    addTodoList();
})
todo_list.addEventListener("click", (e) => {
    e.preventDefault();
    if(e.target.classList.contains("delete")){
        removeTodo(e);
    }
    
})
// end 



