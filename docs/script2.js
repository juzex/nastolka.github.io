let words = ["арка", "автобус", "аэропорт", "аванс", "айсберг" , "агрогородок" , "ад" , "адвокат" , "авокадо" , "азарт" , "азбука" , "аист" , "академия" , "алгебра" , "амазонка" , "амбар" , "анализ" , "аналог" , "ананас " , "аппарат" , "апельсин" , "аплодисменты " , "аскорбинка" , "атака" , "атеизм" , "аудитория" , "аукцион" , "аура" , "аферист" , "афиша " , "ацетон" , "аптека" , "алабай" , "баба" , "бабочка" , "бабник" , "бег" , "бегемот" , "богатство" , "бедро" , "библиотека" , "биология" , "благовоние" , "бобер" , "браво" , "бубен" , "бублик" , "бык" , "бургер" , "бюро" , "бюст" , "велосипед" , "вилка" , "вождь" , "вагон" , "варежки" , "веер" , "ветер" , "верстак" , "ветчина" , "витрина" , "вирт" , "геншин" , "гей" , "вентилятор " , "ветеринар" , "витамины" , "внимание" , "вокзал" , "волшебство" , "воспитание" , "всунуть" , "воспоминание" , "говно" , "газета" , "галерея" , "гамак" , "гараж" , "гардероб" , "гигант" , "гарантия" , "гитара" , "гигиена " , "говядина" , "готово" , "гореть" , "горох" , "город" , "государство" , "гражданин" , "грамота" , "гусеница" , "гимнастика" , "девиз" , "девочка" , "депо" , "деталь" , "диалог" , "директор" , "дисциплина " , "долина" , "дуэль" , "дом" , "дуб" , "доска" , "дрожжи" , "дрова" , "двор" , "дилдо" , "дерьмо" , "домовой" , "деградант" , "дебил" , "долбоеб" , "енот " , "ежевика" , "ель" , "ералаш" , "ебой" , "единица" , "елка" , "ебаный" , "еврей" , "европа" , "желудок " , "жаба " , "жир" , "жаворонок" , "женщина " , "желудь" , "жалоба" , "жизнь" , "жук" , "зебра" , "запад" , "заяц" , "здоровье" , "земляника" , "знаменитость" , "ЗОВ" , "заебал" , "икра" , "иллюзия" , "изображение" , "инвалид" , "институт" , "инженер " , "импотент" , "интерес" , "искренность" , "интонация"];





var color = 'green';
var color2 = 'white';
let check = 0;
var clicked1 = false;
var clicked2 = false;
var clicked3 = false;
var clicked4 = false;
var clicked5 = false;
var clicked6 = false;
document.getElementById('a').innerText = check;

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

if (clicked1 == clicked2 == clicked3 == clicked4 == clicked5 == clicked6 == true) {
    document.getElementById('stoptimer').style.display = "none";
    document.getElementById('starttimer').style.display = "none";
    document.getElementById('resetcart').style.display = "inline";
}



function reset() {
    check = 0;
    document.getElementById('a').innerText = check;
}



 





    a = Math.round(Math.random()*(words.length - 1))
    b = Math.round(Math.random()*(words.length - 1))
    c = Math.round(Math.random()*(words.length - 1))
    d = Math.round(Math.random()*(words.length - 1))
    e = Math.round(Math.random()*(words.length - 1))
    f = Math.round(Math.random()*(words.length - 1))
    while (a === b || a === c || a === d || a === e || a === f || b === c || b === d || b === e || b === f || c === d || c === e || c === f || d === e || d === f ||  e === f) {
        a = Math.round(Math.random()*(words.length - 1));
        b = Math.round(Math.random()*(words.length - 1));
        c = Math.round(Math.random()*(words.length - 1));
        d = Math.round(Math.random()*(words.length - 1));
        e = Math.round(Math.random()*(words.length - 1));
        f = Math.round(Math.random()*(words.length - 1));
        console.log("...")
    }
    document.getElementById('word1').innerText = words[a];
    document.getElementById('word2').innerText = words[b];
    document.getElementById('word3').innerText = words[c];
    document.getElementById('word4').innerText = words[d];
    document.getElementById('word5').innerText = words[e];
    document.getElementById('word6').innerText = words[f];
    words.splice(a,1);
    words.splice(b,1);
    words.splice(c,1);
    words.splice(d,1);
    words.splice(e,1);
    words.splice(f,1);
    console.log(words);
    

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
    document.getElementById('starttimer').style.display = "inline";
    document.getElementById('resetcart').style.display = "none";



    a = Math.round(Math.random()*(words.length - 1));
    b = Math.round(Math.random()*(words.length - 1));
    c = Math.round(Math.random()*(words.length - 1));
    d = Math.round(Math.random()*(words.length - 1));
    e = Math.round(Math.random()*(words.length - 1));
    f = Math.round(Math.random()*(words.length - 1));
    while (a === b || a === c || a === d || a === e || a === f || b === c || b === d || b === e || b === f || c === d || c === e || c === f || d === e || d === f ||  e === f) {
        a = Math.round(Math.random()*(words.length - 1));
        b = Math.round(Math.random()*(words.length - 1));
        c = Math.round(Math.random()*(words.length - 1));
        d = Math.round(Math.random()*(words.length - 1));
        e = Math.round(Math.random()*(words.length - 1));
        f = Math.round(Math.random()*(words.length - 1));
        console.log("...")
    }
    document.getElementById('word1').innerText = words[a];
    document.getElementById('word2').innerText = words[b];
    document.getElementById('word3').innerText = words[c];
    document.getElementById('word4').innerText = words[d];
    document.getElementById('word5').innerText = words[e];
    document.getElementById('word6').innerText = words[f];
    words.splice(a,1);
    words.splice(b,1);
    words.splice(c,1);
    words.splice(d,1);
    words.splice(e,1);
    words.splice(f,1);



    
}
