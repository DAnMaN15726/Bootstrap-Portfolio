$("#task").on("click", function(){
    console.log("CARD-CLICK ACTIVATED");
    // window.location = "https://github.com/haleyserr/Project-1";
    // window.location = "https://haleyserr.github.io/Project-1/";

    window.open("https://github.com/haleyserr/Project-1");
    window.open("https://haleyserr.github.io/Project-1/");

});



$("#liri").on("click", function(){
    console.log("CARD-CLICK ACTIVATED");
    
    window.open("https://github.com/DAnMaN15726/liri-node-app");
    

});



$(".navbar-toggler").on("click", function(){
    console.log("CLICK REGISTERED");
    
    $('.dropdown-menu').addClass('open');
});



$("#Bamazon").on("click", function(){
    console.log("CARD-CLICK ACTIVATED");
    
    window.open("https://github.com/DAnMaN15726/BAmazon");
    

});

$("#friendFinder").on("click", function(){
    console.log("CARD-CLICK ACTIVATED");
    
    window.open("https://github.com/DAnMaN15726/FriendFinder");
    window.open("https://secure-harbor-35999.herokuapp.com/");
    

});

$("#burger").on("click", function(){
    console.log("CARD-CLICK ACTIVATED");

    window.open("https://github.com/DAnMaN15726/burger");
    window.open("https://pacific-escarpment-91698.herokuapp.com/");
});

$("#passport").on("click", function(){
    console.log(`CARD-CLICK ACTIVATED`);

    window.open(`https://github.com/aw-exe/Passport`);
    window.open(`http://passport-aw.herokuapp.com/`);
});

