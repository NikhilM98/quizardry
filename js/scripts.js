/* Clock */

var countDownDate = new Date("Aug 6, 2017 22:00:00").getTime();
var x = setInterval(function() {
var now = new Date().getTime();
var distance = countDownDate - now;
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);
document.getElementById("demo").innerHTML = days + "d " ;
document.getElementById("demo1").innerHTML = hours + "h "
document.getElementById("demo2").innerHTML = minutes + "m "
document.getElementById("demo3").innerHTML = seconds + "s "
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").style.display="none";
        document.getElementById("demo1").style.display="none";
        document.getElementById("demo2").style.display="none";
        document.getElementById("demo3").style.display="none";
        document.getElementById("play").className = 'buttonRestyled';
    }
}, 1000);

/* Wrapper */
/*
$(window).on('load', function(){
    $("#wrapper").fadeOut(250, function() {
        $(".preload").fadeOut(2000, function() {
            $(".content").fadeIn(1000);
        });
    });
});
*/
$(window).on('load', function(){
    $("#wrapper").fadeOut(250, function() {
            setTimeout(function(){
                $(".content").fadeIn(1000);
            }, 1000);
        });

});