var navibar = document.getElementById("navibar");
var layer = document.getElementById("layer");

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

window.onscroll = function() {
    var t = document.documentElement.scrollTop || document.body.scrollTop;
    if(t > 0) {
        navibar.setAttribute('style', 'background-color: rgba(0, 0, 0, 0.6) !important');
        layer.setAttribute('style', 'background-color: rgba(0, 0, 0, 1) !important');
    }
    else{
        navibar.setAttribute('style', 'background-color: rgba(0, 0, 0, 1) !important');
        layer.setAttribute('style', 'background-color: rgba(0, 0, 0, 0) !important');
    }
}
