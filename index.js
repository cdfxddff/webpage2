const indexBox = document.getElementById("index");
let indexBoxHei = indexBox.getBoundingClientRect().top;

const winHei = window.innerHeight;

const po1 = document.getElementById("po1");
const po2 = document.getElementById("po2");
const po3 = document.getElementById("po3");
const po4 = document.getElementById("po4");
const po5 = document.getElementById("po5");
const po6 = document.getElementById("po6");

const in1 = document.getElementById("in1");
const in2 = document.getElementById("in2");
const in3 = document.getElementById("in3");
const in4 = document.getElementById("in4");
const in5 = document.getElementById("in5");
const in6 = document.getElementById("in6");

let po1Hei = po1.getBoundingClientRect().top;
let po2Hei = po2.getBoundingClientRect().top;
let po3Hei = po3.getBoundingClientRect().top;
let po4Hei = po4.getBoundingClientRect().top;
let po5Hei = po5.getBoundingClientRect().top;
let po6Hei = po6.getBoundingClientRect().top;

const a = function (){
    let y = document.documentElement.scrollTop;
    
    if(indexBoxHei <= y && y <= 1100){
        indexBox.style.position = "absolute";
        
        indexBox.style.top = y-300 + "px";
    }

    if(y >= po1Hei){
        in1.style.backgroundColor = "rgb(169, 184, 184)";
        in2.style.backgroundColor = "rgb(233, 233, 233)";
    }
    if(y >= po2Hei){
        in1.style.backgroundColor = "rgb(233, 233, 233)";
        in2.style.backgroundColor = "rgb(169, 184, 184)";
        in3.style.backgroundColor = "rgb(233, 233, 233)";
    }
    if(y >= po3Hei){
        in2.style.backgroundColor = "rgb(233, 233, 233)";
        in3.style.backgroundColor = "rgb(169, 184, 184)";
        in4.style.backgroundColor = "rgb(233, 233, 233)";
    }
    if(y >= po4Hei){
        in3.style.backgroundColor = "rgb(233, 233, 233)";
        in4.style.backgroundColor = "rgb(169, 184, 184)";
        in5.style.backgroundColor = "rgb(233, 233, 233)";
    }
    if(y >= po5Hei){
        in4.style.backgroundColor = "rgb(233, 233, 233)";
        in5.style.backgroundColor = "rgb(169, 184, 184)";
        in6.style.backgroundColor = "rgb(233, 233, 233)";
    }
    if(y >= po6Hei){
        in5.style.backgroundColor = "rgb(233, 233, 233)";
        in6.style.backgroundColor = "rgb(169, 184, 184)";
    }
};

window.onscroll = a;