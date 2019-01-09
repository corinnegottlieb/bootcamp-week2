const posts = [
    { name: "Bob", text:"Hey" },
    { name: "Sue", text: "Bye" },
    { name: "Ted", text: "Whatever" }
]

const render = function(){
    for (let post of posts){
        let postBox = $(`<div class="post-box"> <p class="name">` + post.name + `: </p><p class="text" >` + post.text + `</p></div>`)
        $("body").append(postBox)  
}
}

render()

$("button").on("click", function() {
    $(".post-box").empty();
    posts.push({
        name: $("#name").val(),
        text: $("#text").val()
       })
       

       render()
return
})




$("body").on("click", ".post-box", function() {
    $(".post-box").remove()
    render()
    return})