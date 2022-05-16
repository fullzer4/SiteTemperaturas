//formula celcius / Fahreinheit / kelvin
let x = 12 

function ck(){
    x = x + 273.15
    console.log(x);
}

function cf(){
    x = (x * 9/5) + 32
    console.log(x);
}

function fc(){
    x = (x - 32) * 5/9
    console.log(x);
}

function fk(){
    x = (x - 32) * 5/9 + 273.15
    console.log(x);
}

function kc(){
    x = x - 273.15
    console.log(x);
}

function kf(){
    x = (x - 273.15) * 9/5 + 32
    console.log(x);
}

cf()