// $("button").on("click",function(){
// console.log($(this).closest("div").find("span").text())
// })


// $("button").on("click",function(){
//     console.log($(".container").find("p").text())
// })

// EXCERCISE

const array = []
$(".generator").on("click", function () {
 console.log($(this).closest(".processor").attr("id"))  
let cmp_id = ($(this).closest(".computer").data().id)
console.log(cmp_id)
array.push({cmp_id : "cmp_id"})

 console.log($(this).closest(".computer").find(".BUS").text())
})

$(".validator").on("click", function(){
    console.log($(this).closest(".computer").find(".generator").text())
    console.log($(this).closest(".computer").find(".MB").text())
   $(this).closest(".computer").find(".QR").each(function(){
       console.log($(this).text())})
})
