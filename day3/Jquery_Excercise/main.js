// EXCERCISE 1

// $("body").append($(`<input type="text" id="my-input" placeholder="Human Name">`))
// $("body").append($(`<button id="button">Add Human</button>`))

// $("#button").click(function () {
//     $("ul").append($(`<li>${($("#my-input").val())}</li>`))
// })

// EXCERCISE 2

// $("ul").on("click", "li", function () {
//     $(this).remove()
// })

// EXCERCISE 3
// $("body").append($(`<div class="box1"></div>`))
// $("body").append($(`<div class="box2"></div>`))
// $(".box1").css("background-color", "red")
// $(".box2").css("background-color", "purple")
// $("div").css("width", "100px")
// $("div").css("height", "100px")
// $("div").css("display", "inline-block")
// $("div").css("margin", "5px")

// $("body").on( "mouseenter","div", function(){
//         $(this).css("background-color","purple")
//         $(this).siblings().css("background-color","red")
  
// })


// EXCERCISE 4

// $(".item").click (function() {
//     const instock = $(this).data().instock
//     if(instock){
//     $("#cart").append($(`<div class="cart-item">${$(this).text()}</div>`))}
// })

// EXCERCISE 5

const fruits = [
    { name: "Orange", color: "orange" },
    { name: "Banana", color: "yellow" },
    { name: "Coconut", color: "brown" },
    { name: "Kiwi", color: "brown" },
    { name: "Lemon", color: "yellow" },
    { name: "Cucumber", color: "green" },
    { name: "Persimmon", color: "orange" },
    { name: "Pumpkin", color: "orange" }
  ]


  for(let fruit in fruits){
      $("#basket").append($(`<div class= ${fruits[fruit].color}>${fruits[fruit].name}</div>`))
  }