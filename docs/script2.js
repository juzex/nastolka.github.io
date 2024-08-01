var color = 'green';
var color2 = 'white';
var check = 0;
var clicked1 = false;
var clicked2 = false;
var clicked3 = false;
var clicked4 = false;
var clicked5 = false;
var clicked6 = false;


function change1(identifier) {
    if (!clicked1) {
        clicked1 = true;
        identifier.style.background = color;
        check = check + 1;
        document.getElementById('a').innerText = check;
}}

function change2(identifier) {
    if (!clicked2) {
        clicked2 = true;
        identifier.style.background = color;
        check = check + 1;
        document.getElementById('a').innerText = check;
}}

function change3(identifier) {
    if (!clicked3) {
        clicked3 = true;
        identifier.style.background = color;
        check = check + 1;
        document.getElementById('a').innerText = check;
}}

function change4(identifier) {
    if (!clicked4) {
        clicked4 = true;
        identifier.style.background = color;
        check = check + 1;
        document.getElementById('a').innerText = check;
}}

function change5(identifier) {
    if (!clicked5) {
        clicked5 = true;
        identifier.style.background = color;
        check = check + 1;
        document.getElementById('a').innerText = check;
}}

function change6(identifier) {
    if (!clicked6) {
        clicked6 = true;
        identifier.style.background = color;
        check = check + 1;
        document.getElementById('a').innerText = check;
}}




function reset() {
    check = 0;
    document.getElementById('a').innerText = check;
}




function resetgame(identifier) {
    clicked1 = false;
    clicked2 = false;
    clicked3 = false;
    clicked4 = false;
    clicked5 = false;
    clicked6 = false;
    document.getElementById('cartbtn1').style.background = color2;
    document.getElementById('cartbtn2').style.background = color2;
    document.getElementById('cartbtn3').style.background = color2;
    document.getElementById('cartbtn4').style.background = color2;
    document.getElementById('cartbtn5').style.background = color2;
    document.getElementById('cartbtn6').style.background = color2;
}
