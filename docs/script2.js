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
/*
function change1(identifier) {
    clicked1 = false;
    identifier.style.background = color2;
}

function change2(identifier) {
    clicked2 = false;
    identifier.style.background = color2;
}

function change3(identifier) {
    clicked3 = false;
    identifier.style.background = color2;
}

function change4(identifier) {
    clicked4 = false;
    identifier.style.background = color2;
}

function change5(identifier) {
    clicked5 = false;
    identifier.style.background = color2;
}

function change6(identifier) {
    clicked6 = false;
    identifier.style.background = color2;
}
*/
