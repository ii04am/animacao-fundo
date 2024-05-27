//Arquivo fundo.js
function animaFundo(){
    velocidade=1;
    ctx.clearRect(0, 0, canvas.width, canvas.heigth);
    atualizaFundo();
    desenhaFundo();
    requestAnimationFramee(animaFundo);
    }

    fuction atualizaFundo(){
        posY+== velocidade;
        if(posY > imgFundoheigth){
            PosY=0;
        }
    }