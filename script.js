$(".start").dblclick(function(){
  $(".get-ready").hide();
    $(".arrow").hide();
    $(".start").hide();
     $(".wizard").show();
    $("body").css("background-color","red" );
     $(".Q1").show();
       $(".q1").show();
    $(".header").text("Question One");
});
$(".wrong").click(function(){
  $(".get-ready").show();
    $(".arrow").show();
    $(".start").show();
     $(".wizard").hide();
    $("body").css("background-color","black");
     $(".Q1").hide();
       $(".q1").hide();
    $(".header").text("MATH QUEST");
      $(".Q2").hide();
       $(".q2").hide();
});
$(".aq1").click(function(){
    $("body").css("background-color","yellow" );
     $(".Q1").hide();
       $(".q1").hide();
    $(".header").text("Question Two");
      $(".Q2").show();
       $(".q2").show();
$(".hint1").show();
});
$(".aq2").click(function(){
    $("body").css("background-color","green" );
     $(".Q2").hide();
       $(".q2").hide();
    $(".header").text("Question Three");
      $(".Q3").show();
       $(".q3").show();
    $(".hint1").hide();
});
$(".hint1").click(function(){
     $(".Q2").toggle();
       $(".q2").toggle();
    $(".pint1").toggle();

});
$(".aq3").click(function(){
    $("body").css("background-color","teal" );
     $(".Q3").hide();
       $(".q3").hide();
    $(".header").text("Question four");
      $(".Q4").show();
       $(".q4").show();
    $(".hint2").show();
    
});
$(".hint2").click(function(){
     $(".Q4").toggle();
       $(".q4").toggle();
    $(".pint2").toggle();
});
$(".aq4").click(function(){
      $(".Q4").hide();
       $(".q4").hide();
    $(".header").text("Winner");
      $(".winner").show();
       $(".hint2").hide();
});