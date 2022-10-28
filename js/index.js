$(function(){
    
    function bannertext(target, ele, oronig) {
        var len = ele.length;
        index(target, len, oronig);
        var son = oronig.find("span");
        //初始化
        var ye = 0;
        $(son[0]).addClass("color")
        for (var i = 0; i < len; i++) {
            (function (i) {
                son[i].onmouseover = function () {
                    ye = i;
                    console.log(son)
                    $(son).removeClass("color");
                    $(this).addClass("color");
                    $(ele).removeClass("display");
                    $(ele[i]).addClass("display")
                }
            }(i))
        }
        var timer = setInterval(function () {
            ye ++;
            if (ye >= len) {
                ye = 0;
            }
            $(son).removeClass("color");
            $(son[ye]).addClass("color");
            $(ele).removeClass("display");
            $(ele[ye]).addClass("display")
        }, 5000)
    }
    
    
  
    
    bannertext($(".bannercontbox"), $(".bannertextcont"), $(".bannerindex"));


    function jg(target){
        var len = target.length;
            shu = 50,
            indexa = 0,
            key = false;
        var timer1 = setInterval(function(){
            indexa ++;
            if(indexa >= len){
                indexa = 0;
            }
           
          $(target).removeClass("display");
          $(target[indexa]).addClass("display")
           
        },4000)
        $(document).on("mousewheel", function (e, delta) {
            var wheel = e.originalEvent.wheelDelta || -e.originalEvent.detail;
            var delta = Math.max(-1, Math.min(1, wheel));
            if (delta < 0) {
              if( shu >= 35){
                shu -= 5;
              }
              $(".jgbox").css({backgroundPosition:"50%" + shu + "%"})
            } else {
              if( shu <= 80){
                shu += 5;
              }
              $(".jgbox").css({backgroundPosition:"50%" + shu + "%"})
            }
          })
    }
    jg($(".jgcont"))


    function index(father, lang, oronig) {
        var arr = [];
        for (var i = 0; i < lang; i++) {
            var span = document.createElement("span");
            arr.push(span);
        }
        father.next().append(arr);
    }

    function cp(target, ele, origin){
        var len = ele.length;
        index(target, len, origin);
        var son = origin.find("span");
        //初始化
        var ye = 0;
        $(son[0]).addClass("cpcolor")
        for (var i = 0; i < len; i++) {
            (function (i) {
                son[i].onmouseover = function () {
                    ye = i;
                    console.log(this)
                    $(son).removeClass("cpcolor");
                    $(this).addClass("cpcolor");
                    $(ele.parent()).css({marginLeft:-1180 * i + "px"});
                }
            }(i))
        }
        var timer = setInterval(function () {
            ye ++;
            if (ye >= len) {
                ye = 0;
            }
            $(son).removeClass("cpcolor");
            $(son[ye]).addClass("cpcolor");
            $(ele).removeClass("display");
            $(ele[ye]).addClass("display");
            $(ele.parent()).css({marginLeft:-1180 * ye + "px"})
        }, 5000)
    }
   
    cp($(".cpcont"),$(".cpcontp ul"),$(".cpanniu"))


})



















