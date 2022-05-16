function calcular(){
    var x1t = document.getElementById("temp1")
    var x1type = x1t.options[x1t.selectedIndex].value
    var x2t = document.getElementById("temp2")
    var x2type = x2t.options[x2t.selectedIndex].value
    var x = document.getElementById("temperatura").value

    valor = parseFloat(x)

    console.log(x1type);
    console.log(x2type);

    if(x1type === "celcius1"){
        if(x2type === "fahrenheit2"){
            valor = (valor * 9/5) + 32
            console.log(valor);
            document.getElementById('resposta').value = valor;
        }
        if(x2type === "kelvin2"){
            valor = valor + 273.15
            console.log(valor);
            document.getElementById('resposta').value = valor;
        }else{
            valor = valor
            console.log(valor);
            document.getElementById('resposta').value = valor;
        }
    }
    if(x1type === "fahrenheit1"){
        if(x2type === "celcius2"){
            valor = (valor - 32) * 5/9
            console.log(valor);
            document.getElementById('resposta').value = valor;
        }
        if(x2type === "kelvin2"){
            valor = (valor - 32) * 5/9 + 273.15
            console.log(valor);
            document.getElementById('resposta').value = valor;
        }else{
            valor = valor
            console.log(valor);
            document.getElementById('resposta').value = valor;
        }
    }

    if(x1type === "kelvin1"){
        if(x2type === "fahrenheit2"){
            valor = (valor - 273.15) * 9/5 + 32
            console.log(valor);
            document.getElementById('resposta').value = valor;
        }
        if(x2type === "celcius2"){
            valor = valor - 273.15
            console.log(valor);
            document.getElementById('resposta').value = valor;
        }else{
            valor = valor
            console.log(valor);
            document.getElementById('resposta').value = valor;
        }
    }
}