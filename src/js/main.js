var barrageTexts = ['asd', 'qweqwe', 'zxz'];
var barragesLine1 = [];
var barragesLine2 = [];
var barragesLine3 = [];
var barrageIndex = 0;
var line1AddBarrageSwitch = true;
var line2AddBarrageSwitch = true;
var line3AddBarrageSwitch = true;
var maxBarrageNum = 10;

setInterval("checkBarrage()", 1000);
setInterval("createBarrage()", 1000);
setInterval("barrageMove()", 10);

function checkBarrage() {
    if(barragesLine1.length) {
        if(parseInt(barragesLine1[barragesLine1.length - 1].style.left) > 20) {
            line1AddBarrageSwitch = true;
        }
    } else {
        line1AddBarrageSwitch = true;
    }
    if(barragesLine2.length) {
        if(parseInt(barragesLine2[barragesLine2.length - 1].style.left) > 20) {
            line2AddBarrageSwitch = true;
        }
    } else {
        line2AddBarrageSwitch = true;
    }
    if(barragesLine3.length) {
        if(parseInt(barragesLine3[barragesLine3.length - 1].style.left) > 20) {
            line3AddBarrageSwitch = true;
        }
    } else {
        line3AddBarrageSwitch = true;
    }
}

function createBarrage() {
    if(line1AddBarrageSwitch || line2AddBarrageSwitch || line3AddBarrageSwitch) {
        var barrage = document.createElement("p");
        var openingElement = document.getElementById("opening");
        openingElement.appendChild(barrage);
        setBarrageClass(barrage);
    }
}

function setBarrageClass(barrage) {
    barrage.classList.add("barrageInOpening");
    if(barrageIndex < barrageTexts.length) {
        barrage.textContent = barrageTexts[barrageIndex];
    } else {
        barrageIndex = 0;
        barrage.textContent = barrageTexts[barrageIndex] + `${barrageIndex}`;
    }
    var barrageLength = barrage.textContent.length;
    barrage.style.width = barrageLength * 30 + "px";
    barrage.style.left = -barrage.offsetWidth + "px";
    if(line1AddBarrageSwitch) {
        barragesLine1.push(barrage);
        barrage.style.top = 100 + "px";
        line1AddBarrageSwitch = false;
    } else if(line2AddBarrageSwitch) {
        barragesLine2.push(barrage);
        barrage.style.top = 140 + "px";
        line2AddBarrageSwitch = false;
    } else if(line3AddBarrageSwitch) {
        barragesLine3.push(barrage);
        barrage.style.top = 180 + "px";
        line3AddBarrageSwitch = false;
    }
    barrageIndex++;
}

function barrageMove() {
    for(let i = 0; i < barragesLine1.length; i++) {
        let barrageLeft = parseInt(barragesLine1[i].style.left);
        if(++barrageLeft < screen.width) {
            barragesLine1[i].style.left = barrageLeft + "px";
        } else {
            destoryBarrage(barragesLine1[i]);
            barragesLine1.shift();
        }
    }
    for(let i = 0; i < barragesLine2.length; i++) {
        let barrageLeft = parseInt(barragesLine2[i].style.left);
        if(++barrageLeft < screen.width) {
            barragesLine2[i].style.left = barrageLeft + "px";
        } else {
            destoryBarrage(barragesLine2[i]);
            barragesLine2.shift();
        }
    }
    for(let i = 0; i < barragesLine3.length; i++) {
        let barrageLeft = parseInt(barragesLine3[i].style.left);
        if(++barrageLeft < screen.width) {
            barragesLine3[i].style.left = barrageLeft + "px";
        } else {
            destoryBarrage(barragesLine3[i]);
            barragesLine3.shift();
        }
    }
}

function destoryBarrage(barrage) {
    if(barrage) {
        barrage.parentNode.removeChild(barrage);
    }
}

function onLoadedOpening() {
    var openingQKTEAMImgs = document.querySelectorAll(".hiddenInOpening");
    openingQKTEAMImgs[0].classList.add('leftAnimate');
    openingQKTEAMImgs[0].classList.remove("hiddenInOpening");
    openingQKTEAMImgs[1].classList.add("rightAnimate");
    openingQKTEAMImgs[1].classList.remove("hiddenInOpening");
}

function onLoadedTeamIntroduction() {
    var teamIntroduceText = document.getElementById("introductionText");
    var teamIntroduceImg = teamIntroduceText.querySelector("img");
    var rect = document.getElementById("introduction").getBoundingClientRect();
    if(rect.bottom - window.innerHeight * 1.5 <= 0 && rect.top >= 0) {
        teamIntroduceImg.classList.add("introductionImgAnimate");
        teamIntroduceText.classList.add("fadeInIntroductionText");
        teamIntroduceText.classList.remove("hiddenInIntroduction");
    }
}

function onLoadedProducts() {
    var productsContainer = document.getElementById("productsContainer");
    var rect = document.getElementById("products").getBoundingClientRect();
    if(rect.bottom - window.innerHeight * 1.5 <= 0 && rect.top >= 0) {
        productsContainer.classList.add("fadeInProducts");
        productsContainer.classList.remove("hiddenProducts");
    }
}

function onScroll() {
    onLoadedTeamIntroduction();
    onLoadedProducts();
}

function onLoaded() {
    window.addEventListener("scroll", onScroll);
    document.addEventListener("dragstart", function(e) {
        if(e.target.tagName == "IMG"){
            e.preventDefault();
            return false;
        }
    });
    onLoadedOpening();
}

window.onload = onLoaded();