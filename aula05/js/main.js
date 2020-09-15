
//Definição das variáveis
//Conexão com os elementos HTML
//Campos de entrada
let entradas = document.querySelectorAll('input');
//Botão somar
let btnSomar = document.querySelector('#btnSomar');
//botão subtrair
let btnSubtrair = document.querySelector('#btnSubtrair');
//botão dividir
let btnDividir = document.querySelector('#btnDividir');
//botão multiplicar
let btnMultiplicar = document.querySelector('#btnMultiplicar');
//Parágrafo de resposta
let resposta = document.querySelector('.resposta')
 
//Definindo o número 1 e número 2
let num1 = entradas[0];
let num2 = entradas[1];
 
//Funções para pegar os valores
function pegarNum1() {
   return num1.value;
}
function pegarNum2() {
   return num2.value;
}
 
//Verificando se as entradas estão vazias
function verificarEntradasVazias() {
   //Se num1 ou num2 estiverem vazios
   if(pegarNum1() === '' || pegarNum2() === ''){
       return true; //Retorna verdadeiro
   }else{ //Senão
       return false; //Retorna Falso
   }
}
 

//Função Somar
function somar(){
    if(verificarEntradasVazias()){
     resposta.classList.remove('certa');
     resposta.classList.add('errada');
     resposta.textContent = "Erro: Preencha os dois números!"
    }else{
     resposta.classList.remove('errada');
     resposta.classList.add('certa');
     let numero1 = pegarNum1();
     let numero2 = pegarNum2();
     //Convertendo os números para inteiros
     let soma = parseInt(numero1) + parseInt(numero2);
     resposta.textContent = `${numero1} + ${numero2} = ${soma}`;
    }
  }
  
 
//Escuta de evento click do mouse
btnSomar.addEventListener('click',somar);
 



//Função Subtrair
function subtrair(){
    if(verificarEntradasVazias()){
     resposta.classList.remove('certa');
     resposta.classList.add('errada');
     resposta.textContent = "Erro: Preencha os dois números!"
    }else{
     resposta.classList.remove('errada');
     resposta.classList.add('certa');
     let numero1 = pegarNum1();
     let numero2 = pegarNum2();
     //Efetuando a subtração
     let subtrai = parseInt(numero1) - parseInt(numero2);
     resposta.textContent = `${numero1} - ${numero2} = ${subtrai}`;
    }
 }
  
 //Função Dividir
 function dividir(){
    if(verificarEntradasVazias()){
     resposta.classList.remove('certa');
     resposta.classList.add('errada');
     resposta.textContent = "Erro: Preencha os dois números!"
    }else{
     resposta.classList.remove('errada');
     resposta.classList.add('certa');
     let numero1 = pegarNum1();
     let numero2 = pegarNum2();
     //Efetuando a divisão
     let divide = parseInt(numero1) / parseInt(numero2);
     resposta.textContent = `${numero1} ÷ ${numero2} = ${divide}`;
     //https://www.toptal.com/designers/htmlarrows/math/
    }
 }
  
  //Função Multiplicar
 function multiplicar(){
    if(verificarEntradasVazias()){
     resposta.classList.remove('certa');
     resposta.classList.add('errada');
     resposta.textContent = "Erro: Preencha os dois números!"
    }else{
     resposta.classList.remove('errada');
     resposta.classList.add('certa');
     let numero1 = pegarNum1();
     let numero2 = pegarNum2();
     //Efetuando a multiplicar
     let multiplica = parseInt(numero1) * parseInt(numero2);
     resposta.textContent = `${numero1} x ${numero2} = ${multiplica}`;
    }
 }

btnSubtrair.addEventListener('click',subtrair);
btnMultiplicar.addEventListener('click',multiplicar);
btnDividir.addEventListener('click',dividir);

 
 
