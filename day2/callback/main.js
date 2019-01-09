


// let users = []

// const getData = function (callback) {
//     setTimeout(function(){
//     users = [{ name: "Rick" }, { name: "Morty" }]
//     console.log("Got users")
//     callback()
// },3000)

// }

// const displayData = function () {
//     console.log("Going to display: " + users)
//     for (user of users) {
//         console.log(user.name)
//     }
// }

// getData(displayData)


// const first = function (callback) {
//     setTimeout(function () {
//         console.log("should be first")
//         callback()
//     }, 3000)
// }

// const second = function () {
//     console.log("should be second")
// }

// first(second)


// const timer = function() {
//     console.log(new Date())
// }

// setInterval(timer, 1000)

// setInterval(function(){console.log(new Date())},1000)


// const greet = name => console.log("Hello there " + name)

// greet("Bob")

// const square = number => console.log(number * number)

// square(4)

// const getFormalTitle = (title, name) => title +" " + name
// formalTitle = getFormalTitle("Madamme" , "Lellouche")
// console.log(formalTitle) 


// EXCERCISE 1 (one way to do it without callback)

// const pushPull = (word) => console.log(word +"ing it!")


//   pushPull("push")
//   pushPull("pull")

// Excercise 1 (with Callback function)

// const push = function () {
//     console.log("pushing it!")
//   }
  
//   const pull = function () {
//     console.log("pulling it!")
//   }

// const pushPull = function (callback){
//     callback(callback)
// }
// pushPull(push)
// pushPull(pull)

// Excercise 2



// const returnTime = function (time) {
//      time = new Date()
//     alert('The current time is: ' + time)
//   }
  
//  const getTime = function (callback){
//       callback(callback)
//   } 

// getTime(returnTime)
  
// Excercise 3

// const displayData = function (alertDataFunc, logDataFunc, data) {
//   alertDataFunc(data);
//   logDataFunc(data);
// };

// const logData = function(mydata){
//   console.log(mydata)}

// displayData(alert, logData, "I like to party")


// excercise 4
// const saySomething = function () {
//   alert("I'm... saying stuff in delay");
// };

// setTimeout(saySomething, 1000);

// SAME AS WRITING 

// setTimeout(function(){
//   alert("I'm..saying stuff in delay")
// }, 1000)

// excercise 5

// const add = (x,y,z) => x + y + z
// const sum = add(1,2,3)
// console.log(sum)

// Excercise 6

// const capitalize = name => name.substring(0,1).toUpperCase() + name.substring(1).toLowerCase()
// const capname = capitalize("bob")
// console.log(capname)

// console.log(capitalize("bOb") )
// console.log(capitalize("TAYLOR"))
// console.log(capitalize("feliSHIA"))

// excercise 7

// const determineWeather = temp => {
//   if(temp > 25){
//     return "hot"
//   }
//   return "cold"
// }

// const commentOnWeather = temp => console.log("It's " + determineWeather(temp))

// commentOnWeather(30)
// commentOnWeather(22)


// excercise 8

const explode = (lightFunc, soundFunc, sound) =>{
    lightFunc()
    soundFunc(sound)
}

const shineLight = () => document.getElementById("box").style.backgroundColor = "yellow"
const makeSound = (sound) => alert(sound)

explode(shineLight, makeSound, "BOOM")