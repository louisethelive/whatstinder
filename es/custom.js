

jQuery(document).ready(function ($) {
	
    $(".answer").click(function () {
        if($(this).hasClass("anses1")){
            survey.step1();
        }
        if($(this).hasClass("anses2")){
            survey.step2();
        }
        if($(this).hasClass("anses3")){
            survey.step3();
        }
        
    });
    

    
function FBcom(a,b) {
    setTimeout(function() {
        var m = 0, n = true, op = 0;
        $(a+", "+a+" .comtxt, "+a+" .combot").slideDown(500);
        $().slideDown(500);
        var t = setInterval(function() {
            op += 0.2;
            $(a).css({"opacity":op});
            m++;
            if(m === 5) clearInterval(t);
        }, 100);
    }, b);
}
function random(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
    
    
    
    var out,pops = {
        init: function(){
            setTimeout(function () {
                var rand_name = pop_names[random(0,pop_names.length-1)];
                var rand_text = pop_texts[random(0,pop_texts.length-1)];
                var text = rand_name + " " + rand_text;
                $(".pops p").html(text);
                $(".pops").fadeIn(500);
                out = setTimeout(function () {
                    $(".pops").fadeOut(1000);
                    pops.init();
                }, 6000);
            }, random(6000, 10000));
        }
    };
    
    pops.init();
    $("#iks").click(function () {
        clearTimeout(out);
        $(".pops").hide();
        pops.init();
    });
    $("#mins").html("0"+timer_start);
    $("#sec").html("00");
    
    var mins = timer_start, secs = 0, minutes, seconds, timer = {
        init: function(){
            
            var counter = setInterval(function () {
                
                $(".timer_heading").addClass("blink");
                setTimeout(function () {
                    $(".timer_heading").removeClass("blink");
                }, 500);
                secs--;
                if(secs<0){
                    secs = 59;
                    mins--;
                    if(mins<0){
                        clearInterval(counter);
                        mins = 0;
                        secs = 0;
                        $(".timer_heading").hide();
                        $(".timer .small_headlines").show();
                    }
                    if(mins<10){
                        minutes = "0" + mins;
                    }else{
                        minutes = mins;
                    }
                }
                if(secs<10){
                    seconds = "0" + secs;
                }else{
                    seconds = secs;
                }
                $("#mins").html(minutes);
                $("#sec").html(seconds);
            }, 1000);
        }
    };
    timer.init();
});
