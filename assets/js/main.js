//NAV
$(".fa-bars").click(function() {
    if ($(this).hasClass("fa-bars")){
        $(this).removeClass("fa-bars");
        $(this).addClass("fa-times");
        window.location.href="#nav";
    } else {
        $(this).removeClass("fa-times");
        $(this).addClass("fa-bars");
        window.location.href="#";
    }
});


//Search
$(".fa-search").click(function() {
    $("body").append('<div class="search"><input type="text" name="search" placeholder="Search..." maxlength="100"><button onclick="search()"><i class="fa fa-search"></i></button><i class="fa fa-times" onclick="CloseModal(1)"></i></div>');
    $(".search").hide();
    $(".search").slideToggle("slow");
    $(".search input").focus();
});
function search(){ 
    //Value will be searched
}
function CloseModal(type){
    $(".search").slideToggle("slow");
    setTimeout(function() {$(".search").remove()}, 1500);
}


//Scroller Nav
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
document.getElementById("scroller_nav").style.top = "0px";
} else {
document.getElementById("scroller_nav").style.top = "-120px";
}
}
