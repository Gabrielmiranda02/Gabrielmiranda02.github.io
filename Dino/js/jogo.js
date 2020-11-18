console.log("início do jogo");

//objeto dinossauro conectado com o html
const dino = document.querySelector('.dino');

//variaveis de controle
let dinoPositionY = 0;
let cactoPositionX = 1000;
let estaPulando = false;


//escutando a tela espaço
document.addEventListener('keydown',(event) =>{
    //console.log(event.code);
    if(event.code ==='Space')
        if(!estaPulando)// se nao está pulando
            pular();
    
});

function pular(){
    
    let intervaloPulo = setInterval(()=>{
        estaPulando = true;
        if(dinoPositionY >= 250){
            console.log('pulou');
            clearInterval(intervaloPulo);
            let intervaloQueda = setInterval(()=>{
                if(dinoPositionY <= 0){
                    console.log('Caiu');
                    estaPulando = false;
                    clearInterval(intervaloQueda);
                }else{
                    dinoPositionY -= 20;
                    dino.style.bottom = dinoPositionY +'px';
                }
            },20);

        }else{
            dinoPositionY += 20;
            dino.style.bottom = dinoPositionY +'px';
        }
    }, 20);
}

// conectar  o background
const background = document.querySelector('.background');

function criarCacto() {
    cactoPositionX = 960;
    //criação dp elemento cacto
    const cacto = document.createElement('div');
    let tempoRandom = Math.random() * 6000 + 100;
    //adicionando classe ao cacto
    cacto.classList.add('cacto');
    cacto.style.left = cactoPositionX + 'px';
    background.appendChild(cacto);
    
    let intervaloEsquerda = setInterval(()=>{
        if(cactoPositionX <= -60){
            clearInterval(intervaloEsquerda);
            background.removeChild(cacto);
        }else if(cactoPositionX > 0 && cactoPositionX <= 60 && dinoPositionY <= 60){
            clearTimeout(tempoCacto);
            document.body.innerHTML = '<h1> Fim de jogo </h1>';

        }
        else{
            cactoPositionX -= 10;
            cacto.style.left = cactoPositionX + 'px';
        }
    }, 20);
    let tempoCacto = setTimeout(criarCacto, tempoRandom);
}
//chamar a função quando inicia o jogo
criarCacto();