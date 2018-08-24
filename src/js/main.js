var tab0 = document.getElementById("tab0")
var tab1 = document.getElementById("tab1")
var tab2 = document.getElementById("tab2")
var tab3 = document.getElementById("tab3")
var tab4 = document.getElementById("tab4")
var c1 = document.getElementById("content-1")
var c2 = document.getElementById("content-2")
var c3 = document.getElementById("content-3")
var c4 = document.getElementById("content-4")
var c5 = document.getElementById("content-5")
var c6 = document.getElementById("content-6")

function changeTab0() {
    tab1.className = "hvr-underline-from-right"
    tab2.className = "hvr-underline-from-right"
    tab3.className = "hvr-underline-from-left"
    tab4.className = "hvr-underline-from-left"
    c1.className = "show"
    c2.className = "hidden"
    c3.className = "hidden"
    c4.className = "hidden"
    c5.className = "hidden"
    c6.className = "hidden"
}

function changeTab1() {
    tab1.className = "selected"
    tab2.className = "hvr-underline-from-right"
    tab3.className = "hvr-underline-from-left"
    tab4.className = "hvr-underline-from-left"
    c1.className = "hidden"
    c2.className = "show"
    c3.className = "hidden"
    c4.className = "hidden"
    c5.className = "hidden"
    c6.className = "hidden"
}

function changeTab2() {
    tab1.className = "hvr-underline-from-right"
    tab2.className = "selected"
    tab3.className = "hvr-underline-from-left"
    tab4.className = "hvr-underline-from-left"
    c1.className = "hidden"
    c2.className = "hidden"
    c3.className = "show"
    c4.className = "hidden"
    c5.className = "hidden"
    c6.className = "hidden"
}

function changeTab3() {
    tab1.className = "hvr-underline-from-right"
    tab2.className = "hvr-underline-from-right"
    tab3.className = "selected"
    tab4.className = "hvr-underline-from-left"
    c1.className = "hidden"
    c2.className = "hidden"
    c3.className = "hidden"
    c4.className = "show"
    c5.className = "hidden"
    c6.className = "hidden"
}

function changeTab4() {
    tab1.className = "hvr-underline-from-right"
    tab2.className = "hvr-underline-from-right"
    tab3.className = "hvr-underline-from-left"
    tab4.className = "selected"
    c1.className = "hidden"
    c2.className = "hidden"
    c3.className = "hidden"
    c4.className = "hidden"
    c5.className = "show"
    c6.className = "hidden"
}

function changeTab5() {
    tab1.className = "hvr-underline-from-right"
    tab2.className = "hvr-underline-from-right"
    tab3.className = "hvr-underline-from-left"
    tab4.className = "hvr-underline-from-left"
    c1.className = "hidden"
    c2.className = "hidden"
    c3.className = "hidden"
    c4.className = "hidden"
    c5.className = "hidden"
    c6.className = "show"
}
