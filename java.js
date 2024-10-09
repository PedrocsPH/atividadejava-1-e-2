// soma os valores
const btnSoma = document.getElementById("somar");
btnSoma.addEventListener("click", () => {
    let valor1 = document.getElementById("valor1").value;
    let valor2 = document.getElementById("valor2").value;
    let soma = parseInt(valor1) + parseInt(valor2);
     document.getElementById("resultado").innerHTML= "Seu resultado é " + soma;
    
});    

// subtrai os valores
const btnSubtracao = document.getElementById("subtrair");
btnSubtracao.addEventListener("click", () => {
    let valor1 = document.getElementById("valor1").value;
    let valor2 = document.getElementById("valor2").value;
    let subtracao = parseInt(valor1) - parseInt(valor2);
    document.getElementById("resultado").innerHTML= "Seu resultado é " + subtracao;
  
});    

// multiplica os valores
const btnMultiplicacao = document.getElementById("multiplicar");
btnMultiplicacao.addEventListener("click", () => {
    let valor1 = document.getElementById("valor1").value;
    let valor2 = document.getElementById("valor2").value;
    let multiplica = parseInt(valor1) * parseInt(valor2);
    document.getElementById("resultado").innerHTML= "Seu resultado é " + multiplica;
});    

// divide os valores
const btnDivisao = document.getElementById("dividir");
btnDivisao.addEventListener("click", () => { 
    let valor1 = document.getElementById("valor1").value;
    let valor2 = document.getElementById("valor2").value;
    let divisao = parseInt(valor1) / parseInt(valor2);
    document.getElementById("resultado").innerHTML= "Seu resultado é " + divisao;
});    

