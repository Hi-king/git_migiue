// ==UserScript==
// @name        gist_title
// @namespace   gist
// @include     http://gist.github.com/*
// @include     https://gist.github.com/*
// @version     1
// ==/UserScript==

(function(){ 
    var migiuetext = document.createElement("div");
    migiuetext.style.background = "transparent url(http://uni.res.nimg.jp/img/icon/icon_tv_ani.gif) no-repeat scroll left bottom";
    migiuetext.style.paddingLeft = "30px";
    migiuetext.style.float = "right";
    migiuetext.style.marginLeft = "25%";
        
    var migiue = document.createElement("p");
    migiue.style.marginBottom = "5px";
    migiue.style.padding = "0 10px 0 36px";
    migiue.style.width = "100%";
    migiue.style.height = "41px";
    migiue.style.lineHeight = "41px";
    migiue.style.background = "transparent url(http://uni.res.nimg.jp/img/sprite_migiue.png) no-repeat scroll left bottom";
    migiue.innerHTML = "この右上はドワンゴ社内じゃありません！";
    migiuetext.appendChild(migiue);
    
    document.getElementById("header").appendChild(migiuetext);
    
})();
