// soluzione 1

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


// soluzione 2

$(".header-right > a").click(
  function () {
    $(".hamburger-menu").show();
  }
);

$(".close").click(
  function (){
    $(".hamburger-menu").hide();
  }
);
