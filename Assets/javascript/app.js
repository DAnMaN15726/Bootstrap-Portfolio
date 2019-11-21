$("#task").on("click", function(){
    console.log("CARD-CLICK ACTIVATED");
    // window.location = "https://github.com/haleyserr/Project-1";
    // window.location = "https://haleyserr.github.io/Project-1/";

    window.open("https://github.com/haleyserr/Project-1");
    window.open("https://haleyserr.github.io/Project-1/");

});



$(".navbar-toggler").on("click", function(){
    console.log("CLICK REGISTERED");
    
    $('.dropdown-menu').addClass('open');
});