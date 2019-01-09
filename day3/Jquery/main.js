var header = $("h1")
console.log(header)

$("h1").css("color", "blue")
$(".red-div").css("color", "red")
$("li:first-child").css("color", "green")
$("li:last-child").css("color", "pink")
$("#brown-div").css("color","brown")

$("#b1").addClass("box")
$("#b2").addClass("box")

$("#my-input").val("Terabyte")

const item = $("#b2").data()
console.log(item)

$("#b1").hover(function(){
    $("#b1").css("background-color","blue")
})

$("#button").click(function(){
    alert($("#my-input").val())
})

$(".box").hover(function(){
    $(this).css("background-color","blue")
})

$(".feedme").click(function(){
    let divCopy = $(`<div class=feedme> ${$(this).text()} </div>`) 
    $("body").append(divCopy)
  })

  const names = [
    { first: "Alex", last: "Johnson" },
    { first: "Byron", last: "Loveall" },
    { first: "Cassandra", last: "Wuthers" },
    { first: "Deandre", last: "Rahm" },
    { first: "Ellena", last: "Freeman" }
  ]
  
  for (let name of names){
      $("body").append(`<div class=human >${name.first} - ${name.last}</div>`);
  }

$("div").remove(".human")

$("#remove").hover(function(){
    $("#remove").remove()
})


    

    $("#button2").click(function(){
        $("#blogs").append(`<div class=blog>Whatever</div>`);
    });

   

    $("#blogs").on("click", ".blog", function(){
        $(this).text("blargh")
    })