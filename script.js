let jogador02 = 0;
function pc(){
    //computador jogando
    jogador02 =  parseInt(Math.random() * 3);
    console.log(jogador02);
}
function jogar(){
    const num = document.getElementById('num');
    const jogador01 = Number(num.value);
    const resposta01 = document.querySelector('.resposta01');
    const resposta02 = document.querySelector('.resposta02');
    const resposta = document.querySelector('.resposta');
    // lista dos itens
    let itens = ['pedra', 'papel', 'tesoura'];
    
    if(jogador01 > 2 || jogador01 < 1){
        alert('Jogada Errada!');
        return;
    }else{
        if(jogador02 == 0) {
            if(jogador01 == 0){
                resposta01.textContent = `O computador jogou ${itens[jogador02]}`;
                resposta02.textContent = `O jogador jogou ${itens[jogador01]}`;
                resposta.textContent = 'Empate!';
            }else if(jogador01 == 1){
                resposta01.textContent = `O computador jogou ${itens[jogador02]}`;
                resposta02.textContent = `O jogador jogou ${itens[jogador01]}`;
                resposta.textContent = 'JOGADOR VENCE';
            }else if(jogador01 == 2){
                resposta01.textContent = `O computador jogou ${itens[jogador02]}`;
                resposta02.textContent = `O jogador jogou ${itens[jogador01]}`;
                resposta.textContent = 'COMPUTADOR VENCE'
            }else{
                alert('Jogada Inválida!');
            }
        }else if (jogador02 == 1){
            resposta01.textContent = `O computador jogou ${itens[jogador02]}`;
            resposta02.textContent = `O jogador jogou ${itens[jogador01]}`;
            if(jogador01 == 0){
                resposta01.textContent = `O computador jogou ${itens[jogador02]}`;
                resposta02.textContent = `O jogador jogou ${itens[jogador01]}`;
                resposta.textContent = 'COMPUTADOR VENCE';
            }else if(jogador01 == 1){
                resposta01.textContent = `O computador jogou ${itens[jogador02]}`;
                resposta02.textContent = `O jogador jogou ${itens[jogador01]}`;
                resposta.textContent = 'Empate';
            }else if(jogador01 == 2){
                resposta01.textContent = `O computador jogou ${itens[jogador02]}`;
                resposta02.textContent = `O jogador jogou ${itens[jogador01]}`;
                resposta.textContent = 'JOGADOR VENCE';
            }else{
                alert('Jogada Inválida!!');
            }
    
        }else if(jogador02 == 2){
            if(jogador01 == 0){
                resposta01.textContent = `O computador jogou ${itens[jogador02]}`;
                resposta02.textContent = `O jogador jogou ${itens[jogador01]}`;
                resposta.textContent = 'JOGADOR VENCE';
            }else if(jogador01 == 1){
                resposta01.textContent = `O computador jogou ${itens[jogador02]}`;
                resposta02.textContent = `O jogador jogou ${itens[jogador01]}`;
                resposta.textContent = 'COMPUTADOR VENCE';
            }else if(jogador01 == 2){
                resposta01.textContent = `O computador jogou ${itens[jogador02]}`;
                resposta02.textContent = `O jogador jogou ${itens[jogador01]}`;
                resposta.textContent = 'Empate';
            }else{
                alert('Jogada Inválida!!!');
            }
        }
    }
}
pc();