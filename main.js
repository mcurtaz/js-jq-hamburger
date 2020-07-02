// ----------- SOLUZIONE 1 -------------

// $(".header-right > a").click(
//   function () {
//     $(".hamburger-menu").fadeIn();
//   }
// );
//
// $(".close").click(
//   function (){
//     $(".hamburger-menu").fadeOut();
//   }
// );


// ------------- SOLUZIONE 2 -----------
//
// $(".header-right > a").click(
//   function () {
//     $(".hamburger-menu").show();
//   }
// );
//
// $(".close").click(
//   function (){
//     $(".hamburger-menu").hide();
//   }
// );

// ------------- SOLUZIONE 3 ------------

// $(".header-right > a").click(
//   function (){
//     $(".hamburger-menu").css("display", "block");
//   }
// );
//
// $(".close").click(
//   function (){
//     $(".hamburger-menu").css("display", "none");
//   }
// );

// ------ SOLUZIONE 4 -----

$(".header-right > a").click(
  function () {
    $(".hamburger-menu").addClass("active");
  }
);

$(".close").click(
  function (){
    $(".hamburger-menu").removeClass("active");
  }
);
