// let name = 8;
// console.log(name++);    //8
// console.log(++name && name++);    //10 11
// console.log(--name , ++name, ++name, name++);    //10 11 12 12
// console.log(name++);    //13
// console.log(name--);    //14
// console.log(--name);    //12

// document.write(true, 23 && undefined);
// document.write(3 , 857);

// let computer1 = Math.random() * 10;
// computer = Math.round(computer1);
// const asked = +(prompt("Enter your Number"));

// if (asked === computer) {
//     console.log("You are won");
// } else {
//     console.log("you lose.....")
// }
// console.log(computer, asked);

// var str = "Nobel price have";
// console.log(str.length);
// console.log(str.slice(0, 5));
// for (var i = (str.slice(0, 5)).length; i < str.length; i++) {
//     console.log("Hello sir" + i);
// }
// var i = str.slice(4, 9).length;
// console.log(str.slice(4, 9));
// do{
//     console.log("Hello sir" + i);
// } while{}

// function MyFunc (num1 , num2) {
//     console.log(num1 + num2);
// }

// MyFunc(25 , 25);
// MyFunc(678 , 345);

// var computer = Math.random() * 10;
// computer = Math.round(computer);
// var user = +prompt("Guess the number");
// var res = computer === user ;

// console.log(computer === user);

// if (computer === user) {
//     console.log("Bingo! Correct answer");
//     console.log(computer === user);
// } else if (!(computer === user) > 1 ) {
//     console.log("Close enough to the correct answer");
//     console.log(computer === user);
// }

// var num = +prompt("Enter a number");

// if (num % 3 === 0) {
//     console.log("Your number is divisible by 3");
// } else {
//     console.log("Sorry");
// }

// var num = +prompt("Enter your number");

// if (isNaN (num)) {
//     console.log("Abay number dal");
// } else if (num % 2 === 0) {
//     console.log("Your number is even")
// } else {
//     console.log("Your number is odd");
// }

// var T = +prompt("Enetr your area's temperature");

// if (T > 40) {
//     console.log("it is too hot outside!");
// } else if (T > 30) {
//     console.log("The weather is normal!");
// } else if (T > 20) {
//     console.log("Today's weather is cool!");
// } else if (T > 10) {
//     console.log("OMG! Today's weathr is so cool!");
// }

// var num1 = +prompt("Enter first number");
// var num2 = +prompt("Enter second number");
// var operation = prompt("what's operation??");

// if (operation === "+") {
//     console.log(num1 + num2);
// } else if (operation === "-") {
//     console.log(num1 - num2);
// } else if (operation === "*") {
//     console.log(num1 * num2);
// } else if (operation === "/") {
//     console.log(num1 / num2);
// } else if (operation === "%") {
//     console.log(num1 % num2);
// } else {
//     console.log("Go to doctor please!")
// }

// for (var i = 0; i < 5; i++) {
//     var str = " ";
//     for (var j = 5; j > i; j--) {
//         str += " ";
//     }
//     for (var k = 0; k <= i; k++) {
//         str += "*";
//     }
//     for (l = 1; l <= i; l++) {
//         str += "*";
//     }
//         console.log(str);
// }
// for (var i = 5; i >= 0; i--) {
//     var str = " ";
//     for (var j = 5; j > i; j--) {
//         str += " ";
//     }
//     for (var k = 0; k <= i; k++) {
//         str += "*";
//     }
//     for (l = 1; l <= i; l++) {
//         str += "*";
//     }
//         console.log(str);
// }

// var str = "The apple";
// str += " the banana"
// str += " the orange"
// console.log(str);

// var ele = document.createElement("h2");
// var elen = document.createComment(ele);
// let elene = document.createTextNode("There are four types of dimdim");

// console.log(ele);

// var fruits = ["Apple", "Banana", "Orange", "Pineapple", "Graps"];
// var find = prompt("Enter fruits name....", "Enter here")
// var isAvailable = false;

// for (var i = 0; i < fruits.length; i++) {
//     console.log("Finding in...." + i);
//     if (fruits[i].toLowerCase() === find.toLowerCase()) {
//         isAvailable = true;
//         break;
//     }
// }

// if (isAvailable) {
//     console.log("Found");
// } else {
//     console.log("Not found");
// }

// var fruits = ["Apple", "Banana", "Orange", "Pineapple", "Graps"];
// var jum = ['fruit', 'vegetable', 'coconute', 'power', 'nasha'];

// for (var i = 0; i < fruits.length; i++){
//     for (var j = 0; j < jum.length; j++){
//         console.log(fruits[i] + jum[j]);

//     }

// }

// var notAllowed = 'uggly';
// let user = prompt('Enter somehing....');
// let uConvert = user.indexOf(notAllowed);

// if (uConvert !== -1) {
//     let before = user.slice(0, uConvert);
//     let after = user.slice(uConvert + notAllowed.length, user.length)
//     console.log('Edited word is: ' + before + after )
// } else {
//     console.log('Shabash Chitay');
// }

// let user1 = 'dhama chokri uggly chacham';
// var sample = user1.indexOf(notAllowed);
// console.log(sample);

// var str = 'hjhfjhdjh fhdfhjhfjdh fhdjfhjhf saley hfjdhjdhjh'
// console.log(str.replace('saley', ));

// let date = new Date();
// console.log(date);
// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getMonth());
// console.log(date.getFullYear());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// console.log(date.getTime());

// var today = new Date();
// var doomsday = new Date("june 30, 2035");
// var msToday = today.getTime();
// var dmToday = doomsday.getTime();
// var msDiff = dmToday - msToday;
// let modify = Math.floor ((msDiff / (1000 * 60 * 60 * 24 * 365.25)));
// console.log(modify);

// var date = new Date().getTime();

// // For days
// var dateB = new Date().setDate(+prompt("Enter your date of birth"));
// var dateBm = date - dateB;

// // For months
// var monthB = new Date().setMonth(prompt("Enter your month of birth"));
// var month1 = ["January" , "February" , "March" , "April" , "May" , "June" , "July" , "August" , "September" , "October" , "November" , "December"];
// // var month1a = month1.map(toLowerCase(month1));
// var month2 = ["January" , "February" , "March" , "April" , "May" , "June" , "July" , "August" , "September" , "October" , "November" , "December"];
// // var month2a = month2.map(toLowerCase(month2));
// if (monthB === parseInt(month1)) {

// }

// // For years
// var yearB = new Date().setFullYear(+prompt("Enter your year of birth"));
// var yearBm = date - yearB;

// console.log(Math.floor(dateBm / (1000 * 60 * 60 * 24)));
// console.log(Math.floor(monthB / (1000 * 60 * 60 * 24 * 30)));
// console.log(Math.floor(yearBm / (1000 * 60 * 60 * 24 * 30 * 12)));

// let date = prompt("Enter your date of birth");
// let month = prompt("Enter your month of birth");
// let year = prompt("Enter your year of birth");

// let nDate = new Date();
// nDate.setMonth();
// document.write(nDate);

// function imps () {
//     document.getElementsByTagName("img").src ="n2.jpg";
// }
// imps();
// function funk () {
//     var fur = document.getElementById("gh");
//     fur.style.textDecoration='none';
//     fur.style.color='red';

// }
// function dunk () {
//     var tele = document.getElementById("gh");
//     tele.href='javaScript:void(https://www.facebook.com)';
//     tele.innerText="Facebook";
//     tele.style.fontSize='20px';
// }
// function myFunc(x) {
// var ppp = document.getElementById(x);
// var ttp = ppp.innerText;
// console.log(ttp);
// }

// function alk(x) {
//       var p =
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum illum illo laborum? Sit iure unde dolores incidunt eius architecto vel magni! Saepe, minima architecto. Illum vitae hic repellendus modi consectetur, quod quidem delectus eum voluptate maiores, beatae laboriosam maxime et perspiciatis magni fuga ipsum nobis? Vero enim tempore porro alias!";
//       var tpu = document.getElementById("tyu").innerHTML;
//     var p = document.getElementById(x);
//     p.className += " hidden";
//   }

//   document.write("<br>");
// objects
// var a = {
//     firstName : "Shahabuddin",
//     lName : 'Ahmed',
//     fatherName : "Shahid Chohan",
//     age : 20,
//     city : ["Pakistan" , "Afghanistan" , "Malaysia" , "Saudia Arabia"],
//     fatherBio : {
//         name : "Shahid Chohan",
//         fatherName : "Noor Muhammad",
//         profession : "Hand Wall show Piece Designer"
//     },
//     fuse : function () {
//         return this.firstName + " " + this.lName + "of father name is" + this.fatherName;
//     }
// }
// document.write(a.fuse());
// console.log(a);

//   var sub = new Object();

//   sub.fName = "Shahabuddin";
//   sub.lName = "Shahid Chohan";
//   sub.age = 63;

//   document.write(sub.fName);
//   console.log(sub);

//   var a = document.getElementById("test");
//   a.style.fontSize = "10px";
//   setInterval(function anim () {
//       var current = a.style.fontSize;
//       current = +current.slice(0, 2);
//       current++;
//       if (current > 30) {
//           current = 10;
//       }
//       a.style.fontSize = current + "px";
//   } , 1000)

// var pets = ['parrots', 'cat', 'dog'];
// pets.splice(1,0, "buffalo");
// console.log(pets);
// var noPets = pets.slice(1,2);
// console.log(noPets);
// console.log(pets);
// var sizes = ["S", "M", "XL", "XXL", "XXXL"];
// sizes.splice(2, 0, "L");
// console.log(sizes);
// var str = "Boston";
// str = str.slice(2, 5);
// console.log(str);

// var AskDate = +prompt("Enter your date of birth");
// var AskMonth = prompt("Enter your month of birth");
// var AskYear = +prompt("Enter your year of birth");
// var today = new Date();
// var ChT_AskDate = today.setDate(2);
// var ChT_AskMonth = today.setMonth(AskMonth);
// var ChT_AskYear = today.setFullYear(AskYear);
// var Cht_today = today.getTime();
// console.log(ChT_AskYear);

// // For get passing date
// var date = Cht_today - ChT_AskDate;
// console.log(date);

// const name = "Shahabuddin";
// age = 20;
// fatherName = "Shahid Chohan";

// console.log(`My name is ${name} and my age is ${age}.
// My father name is ${fatherName}.`);
// document.write(`My name is ${name} and my age is ${age}.
// <br> My father name is ${fatherName}.`);

// let name = "Shahabudddin";
// let fName = "Shahid Chohan";
// let age = 20;
// let obj = {
//   name, fName, age, [name] : "Ahmed",
//   [age] : 40
// }

// console.table(obj);

// class Abc {
//   constructor(name, fName, age) {
//     this.name = name;
//     this.father_name = fName;
//     this.age = age;
//   }
//   saloon() {
//     console.log(
//       `My name is ${this.name} and my father name is ${this.fName} then finally my age is ${this.age}`
//     );
//   }
// }
// const first = new Abc("Shahabuddin", "Shahid Chohan", 20);
// console.log(first);
// first.saloon();

// class Def extends Abc {
//   constructor(name, fName, age, qualification, gender) {
//       super(name, fName, age)
//       this.qualification = qualification;
//       this.gender = gender;
//   }
// }
// const last = new Def("Shahabuddin", "Shahid Chohan", 20, "Inter", "male");
// console.log(last);

// CALLBACK
// function func(callback) {
//     setTimeout(function(){
//         console.log("Done");
//         callback("String");
//     }, 5000)
// }
// func(function (data) {
//     console.log(data);
// });

// Callback hell
// func1(function (data) {
//     func2(function (data) {
//         func3(function (data) {
//             func4(function (data) {
//                 console.log(data);
//             });
//         });
//     });
// });

// Promises
function func() {
  return new Promise(function (resolve, reject) {
    console.log("Done");
    let random = Math.random();
    if (random < 0.5) {
      resolve("String")
      console.log(random);
    } else {
      reject("error");
      console.log(random);
    }
  });
}

// console.log(func());
func().then(function (x) {
  console.log(x);
}).catch(function (y) {
  console.log(y)
});
