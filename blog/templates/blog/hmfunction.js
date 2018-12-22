$(document).ready(function(){


 $("#flip").click(function(){
  $("#panel").slideToggle("slow")
  
 });

 $("#flip2").click(function(){
  $("#panel2").slideToggle("slow")
  
 });

 $("#flip3").click(function(){
  $("#panel3").slideToggle("slow")
  
 });



$("button").on("click", function(){
  $(".overlay").addClass("active");
});

$(".tab-list").on("click", ".tab", function(e) {
  e.preventDefault();
  $(".tab").removeClass("active");
  $(".tab-content").removeClass("show");
  $(this).addClass("active");
  $($(this).attr("href")).addClass("show");
});



});


