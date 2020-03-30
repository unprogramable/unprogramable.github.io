if (! sessionStorage.clickcount) {
    sessionStorage.clickcount = 1;
}

if(sessionStorage.clickcount <= 5){
    board='board'+sessionStorage.clickcount;
    document.getElementById(board).style.display = "block";
    sessionStorage.clickcount = Number(sessionStorage.clickcount) + 1;
    if(sessionStorage.clickcount == 6)
        sessionStorage.removeItem('clickcount');
}

document.getElementById(board).style["padding-bottom"]="100px";
document.write("Unprogramable");

$(function(){

    $('#'+board).t({
        delay:0,                   // start delay in seconds [default:0]

        speed:80,                  // typing speed (ms) [default:50]
        speed_vary:false,          // 'human like' speed variation [default:false]

        beep:false,                 // beep while typing (Web Audio API) [default:false]

        mistype:50,                 // mistype rate: 1:N per char [default:false]
        locale:'en',               // keyboard layout (to fit mistype); supported: 'en' (english) or 'de' (german) [default:'en']

        caret:'\u258e',            // caret content; can be html too [default:true (\u258e)]
        blink:true,                // blink-interval in ms; if TRUE, speed*3  [default:true]
        blink_perm:false,          // permanent blinking? if FALSE, caret blinks only on delay/pause/finish [default:false]
        repeat:0,                  // repeat typing: if TRUE, infinite or N times [default:0]
        tag:'span',                // wrapper tag (.t-container, .t-caret) [default:'span']
        pause_on_click:false,       // pauses/continues typing on click/tap (elm) [default:false]
        pause_on_tab_switch:true,  // pauses typing if window is inactive (Page Visibility API) [default:false]

        // init callback (ready-to-type)
        init:function(elm){},
        // typing callback
        typing:function(elm,chr_or_elm,left,total){},
        // finished callback
        fin:function(elm){}

    });
});
