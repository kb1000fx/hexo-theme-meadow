var $$ = mdui.JQ;

/* Gotop */
$$(function () {
  $$(window).on('scroll', function (e) {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop !== 0) {
      $$('#gotop').removeClass('mdui-fab-hide');
    } else {
      $$('#gotop').addClass('mdui-fab-hide');
    }
  });
  $$('#gotop').on('click', function (e) {
    (function animateScroll() {
      var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollTop !== 0) {
        window.requestAnimationFrame(animateScroll);
        window.scrollTo(0, scrollTop - (scrollTop / 5));
      }
    })();
  });
});

/* Dark Mode */

if(localStorage.getItem("darkmode")==null || localStorage.getItem("darkmode")==false)
{
    document.getElementById("darkmode").innerHTML = '<input  οnclick="checkDarkMode()" type="checkbox"/><i class="mdui-switch-icon"></i>';
}else{
    document.getElementById("darkmode").innerHTML = '<input  οnclick="checkDarkMode()" type="checkbox" checked/><i class="mdui-switch-icon"></i>';
    document.getElementsByTagName("body").className = "mdui-color-black mdui-bottom-nav-fixed";
}

function checkDarkMode()
{
    if(localStorage.getItem("darkmode")==null)
    {    
        localStorage.setItem("darkmode",true);
    }
    else if(localStorage.getItem("darkmode") == false)
    {
        localStorage.setItem("darkmode",true);
        document.getElementById("allconfig").className = "mdui-color-black mdui-bottom-nav-fixed";
    }
    else        
    {   localStorage.setItem("mode",false);
        document.getElementById("allconfig").className = "mdui-color-white mdui-bottom-nav-fixed"; 
    }    
}


