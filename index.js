// Add class to h1
$("h1").addClass("title");

// Change button text to italic;
$("button").html("<em>don't click me! </em>");

// Redirect anchor tag to yahoo
$("a").attr("href", "https://www.yahoo.com");

// Change color of h1 when h1 is clicked
$("h1").click(function(){
  $("h1").css("color", "#5D3891");
});


// Change text of buttons, when button is clicked
$("button").click(function(){
  $("button").text("Or maybe don't");
});

// Change h1 color when button is clicked
$("button").click(function(){
  $("h1").css("color", "#1F8A70")
});

// Change the h1 for the value of the key that was pressed
$(document).keydown(function(event){
  $("h1").text(event.key);
})


//Change color of h1 when you mouseover it
$("h1").on("mouseover", function(){
  $("h1").css("color", "#D3756B");
});


// Animate h1 when button is clicked

$("button").on("click", function(){
  $("h1").slideUp().slideDown().animate({opacity: 0.5});
}); // we can only use numeric css;
