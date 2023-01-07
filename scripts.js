// document.write("<h1>Hello World</h1>");

// document.getElementById("container").innerHTML = "<h1>Hello World da esquerda</h1>"; - substitui o que tiver dentro
// document.querySelector("#container2").innerHTML = "<h1>Hello World da direita</h1>";

//document.getElementById("container").append("<h1>Inserido com append</h1>") /* não substitui o que tem dentro apenas adiciona*/

// let paragrafo = document.createElement("p");
// paragrafo.append("Inserido com append");
// document.getElementById("container").appendChild(paragrafo);

// for (let i = 0; i <10; i++){
//     console.log("Rodada: " + (i * 2));
// }

function somar()
{   
    let resultado = Number(valor1.value) + Number(valor2.value);
    document.getElementById("resultado").innerHTML = "<h4>O Resultado é: " + resultado + "</h4>";
}

function subtrair()
{
    let resultado = Number(valor1.value) - Number(valor2.value);
    document.getElementById("resultado").innerHTML = "<h4>O Resultado é: " + resultado + "</h4>";
}

function multiplicar()
{
    let resultado = Number(valor1.value) * Number(valor2.value);
    document.getElementById("resultado").innerHTML = "<h4>O Resultado é: " + resultado + "</h4>";
}

function dividir()
{
    let resultado = Number(valor1.value) / Number(valor2.value);
    document.getElementById("resultado").innerHTML = "<h4>O Resultado é: " + resultado + "</h4>";
}