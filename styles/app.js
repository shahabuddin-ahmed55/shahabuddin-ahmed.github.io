// Task No 1
// var itemsArray = [
//   { name: "juice", price: 50, quantity: 3 },
//   { name: "cookie", price: 30, quantity: 9 },
//   { name: "shirt", price: 880, quantity: 1 },
//   { name: "pen", price: 100, quantity: 2 },
// ];

// console.log(
//   "A " +
//     itemsArray[0].name +
//     " price is " +
//     itemsArray[0].price +
//     " then total price of " +
//     itemsArray[0].quantity +
//     " " +
//     itemsArray[0].name +
//     "s" +
//     " is " +
//     itemsArray[0].quantity * itemsArray[0].price
// );

// console.log(
//   "A " +
//     itemsArray[1].name +
//     " price is " +
//     itemsArray[1].price +
//     " then total price of " +
//     itemsArray[1].quantity +
//     " " +
//     itemsArray[1].name +
//     "s" +
//     " is " +
//     itemsArray[1].quantity * itemsArray[1].price
// );

// console.log(
//   "A " +
//     itemsArray[2].name +
//     " price is " +
//     itemsArray[2].price +
//     " then total price of " +
//     itemsArray[2].quantity +
//     " " +
//     itemsArray[2].name +
//     " is " +
//     itemsArray[2].quantity * itemsArray[2].price
// );

// console.log(
//   "A " +
//     itemsArray[3].name +
//     " price is " +
//     itemsArray[3].price +
//     " then total price of " +
//     itemsArray[3].quantity +
//     " " +
//     itemsArray[3].name +
//     "s" +
//     " is " +
//     itemsArray[3].quantity * itemsArray[3].price
// );

// console.log(
//   "Total price of all items is " +
//     " " +
//     (itemsArray[0].price * itemsArray[0].quantity +
//       itemsArray[1].price * itemsArray[1].quantity +
//       itemsArray[2].price * itemsArray[2].quantity +
//       itemsArray[3].price * itemsArray[3].quantity)
// );

//  Task NO 2
// var data = {
//   name : "shahabuddin",
//   lname : "ahmed",
//   email : "s@s.com",
//   password : 012345,
//   age : 20,
//   gender : "male",
//   city : "karachi",
//   country : "pakistan"
// }
//  firstname , lastname, age and country checking
// var check = prompt("check firstname....").toLowerCase();
// var check1 = prompt("check lastname.....").toLowerCase();
// var check2 = +prompt("check age....");
// var check3 = prompt("check country.....").toLowerCase();
// if (check === data.name && check1 === data.lname && check2 === data.age && check3 === data.country) {
//   console.log("pow");
// } else {
//   console.log("sorry");
// }

//  Task No 3

// Constructor
// function Info(name, lname, fname, age, gender, religion) {
//   this.name = name;
//   this.lname = lname;
//   this.fname = fname;
//   this.age = age;
//   this.gender = gender;
//   this.religion = religion;
// }
// var user1 = new Info('Shahabuddin', 'Ahmed', 'Shahid Chohan', 20, 'male', 'Islam');
// console.log(user1);
// document.write(user1.name);

//  Task No 4

// All inputs by DOM
var name_i = document.getElementById("name").value;
var age_i = document.getElementById("age").value;
var education_i = document.getElementById("edu").value;
var profession_i = document.getElementById("prof").value;
var gender_i = document.getElementById("gender").value;

function get() {
  // Constructor
  function Info(name_i, age_i, education_i, profession_i, gender_i) {
    this.user_name = name_i;
    this.user_age = age_i;
    this.user_education = education_i;
    this.user_profession = profession_i;
    this.user_gender = gender_i;
  }

  var result = new Info(name_i, age_i, education_i, profession_i, gender_i);
  console.log(result);
}
console.log(name_i);
