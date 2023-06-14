//constantes globales

const express=require("express");
const app= express();
const ejs = require("ejs");
const port=5020;

//variables globales
var globalVariable="Esta es una variable global";

// crear view engine

app.set("view engine","ejs");

//function

function myfunction(){
    //var local
    var localVariable = "Esta es una variable local";

    console.log(localVariable);
    console.log(globalVariable);

    return globalVariable;

}

function sumar(){

    var x=50000;
    var y=4000;

    var z=x+y;

    return z;
}

function restar(){

    var x=5000;
    var y=40000;

    var z=x-y;

    return z;
}

function multiplicar(){

    var x=5000;
    var y=40000;

    var z=x*y;

    return z;
}

function dividir(){

    var x=5000;
    var y=40000;

    var z=x/y;

    return z;
}

function random(){

    var ran = Math.floor(Math.random()*4);
    console.log(ran);
    var result3;
    switch(ran){
        case 0:
            result3 = "Fresa";
            break;
        case 1:
            result3 = "Papaya";
            break;
        case 2:
            result3 = "Mango";
            break;
        case 3:
            result3 = "Pera";
            break;
        default:
            console.log("Wrong answer");
            break;

    
    }
    // termina switch

    return result3;
}

//erutamiento donde se ejecuta el codigo

app.get('/',(req,res)=>{
    const result = myfunction(); //return
    const sumars= sumar();
    const restars= restar();
    const multiplicars= multiplicar();
    const dividirs= dividir();
    const result3 = random();
    res.render("index",{result,sumars,restars,multiplicars,dividirs,result3});
});

app.listen(port,()=>{
    console.log("Servidor escuchando en el puerto http://localhost:"+port);
});