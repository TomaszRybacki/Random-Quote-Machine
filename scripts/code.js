/*jslint es6 */

//  Baza cytatów i autorów

const quotes = [
    "Bóg jest światłością, a nie ma w Nim żadnej ciemności.",
    " Myśmy poznali i uwierzyli miłości, jaką Bóg ma ku nam. Bóg jest miłością: kto trwa w miłości, trwa w Bogu, a Bóg trwa w nim.",
    "On rzekł: Będziesz miłował Pana, Boga swego, całym swoim sercem, całą swoją duszą, całą swoją mocą i całym swoim umysłem; a swego bliźniego jak siebie samego. ",
    " Radujcie się zawsze w Panu; jeszcze raz powtarzam: radujcie się! Niech będzie znana wszystkim ludziom wasza wyrozumiała łagodność: Pan jest blisko!",
    "Toteż występni nie ostoją się na sądzie ani grzesznicy- w zgromadzeniu sprawiedliwych, bo Pan uznaje drogę sprawiedliwych, a droga występnych zaginie.",
    "Umiłowani, miłujmy się wzajemnie, ponieważ miłość jest z Boga, a każdy, kto miłuje, narodził się z Boga i zna Boga.",
    "Przyjdźcie do Mnie wszyscy, którzy utrudzeni i obciążeni jesteście, a Ja was pokrzepię.",
    "Jednak nie z tego się cieszcie, że duchy się wam poddają, lecz cieszcie się, że wasze imiona zapisane są w niebie.",
    "Do tej pory o nic nie prosiliście w imię moje: Proście, a otrzymacie, aby radość wasza była pełna.",
    "A jeśli nasze serce oskarża nas, to Bóg jest większy od naszego serca i zna wszystko.",
    " Tarczą jest dla mnie Bóg, co zbawia prawych sercem.",
    "Ty zaś, gdy chcesz się modlić, wejdź do swej izdebki, zamknij drzwi i módl się do Ojca twego, który jest w ukryciu. A Ojciec twój, który widzi w ukryciu, odda tobie.",
    "Niech się nie trwoży serce wasze. Wierzycie w Boga? I we Mnie wierzcie!",
    "Wierny bowiem przyjaciel potężną obroną, kto go znalazł, skarb znalazł. Za wiernego przyjaciela nie ma odpłaty ani równej wagi za wielką jego wartość.",
    "Kto dobrodziejstwami za dobrodziejstwa odpłaca, pamięta o przyszłości, a w chwili potknięcia się znajdzie podporę.",
    "A jednak, Panie, Tyś naszym Ojcem. Myśmy gliną, a Ty naszym twórcą. Dziełem rąk Twoich jesteśmy my wszyscy.",
    "Dla mnie bowiem żyć- to Chrystus, a umrzeć- to zysk.",
    "Oto dałem wam władzę stąpania po wężach i skorpionach, i po całej potędze przeciwnika, a nic wam nie zaszkodzi.",
    "W domu Ojca mego jest mieszkań wiele. Gdyby tak nie było, to bym wam powiedział. Idę przecież przygotować wam miejsce.",
    "Wszystko więc, co byście chcieli, żeby wam ludzie czynili, i wy im czyńcie! Albowiem na tym polega Prawo i Prorocy."
];

const author = [
    "1J 1,5-6",
    "1J 4,16",
    "Łk 10,27",
    "Flp 4,4-5",
    "Ps 1,5-6",
    "1J 4,7",
    "Mt 11,28",
    "Łk 10,20",
    "J 16,24",
    "1J 3,20",
    "Ps 7,11",
    "Mt 6,6",
    "J 14,1",
    "Syr 6,14-15",
    "Syr 3,31",
    "Iz 64,7",
    "Flp 1,21",
    "Łk 10,19",
    "J 14,2",
    "Mt 7,12"
];

//  Mechanika losowania cytatu

let number;
let test;

function changeHtml() {
    "use strict";
    let quoteElement;
    let authorElement;
    quoteElement = document.getElementById("quote");
    authorElement = document.getElementById("author");

    quoteElement.classList.add("fadeInUp");
    quoteElement.innerHTML = "<span class=\"apostrof\">\"</span>" + quotes[number] + "<span class=\"apostrof\">\"</span>";
    setTimeout(function () {
        quoteElement.classList.remove("fadeInUp");
    }, 1000);

    authorElement.classList.add("fadeInUp");
    authorElement.innerHTML = author[number];
    setTimeout(function () {
        authorElement.classList.remove("fadeInUp");
    }, 1000);

}

function random(num) {
    "use strict";
    num = Math.floor(Math.random() * num);
    return num;
}

number = random(20);
test = 21;

function notTheSame() {
    "use strict";
    if (number === test) {
        number = random(20);
        notTheSame();
    } else {
        changeHtml();
        test = number;
    }
}

document.getElementById("random").onclick = notTheSame;


//  Udostępnianie na twiterze

function share() {
    "use strict";
    document.getElementById("twitter").setAttribute("href", "https://twitter.com/intent/tweet?url=devboard.pl&text=" + encodeURIComponent("\" " + quotes[number] + " \" " + author[number]));

}

document.getElementById("twitter").onclick = share;



















