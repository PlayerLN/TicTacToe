// Matriz com os valores dos campos
var table = [
  [0,0,0],
  [0,0,0],
  [0,0,0]
]

// Possibilidades de vencer
function possibilities(i){
  var result = (table[0][0] == i && table[0][1] == i && table[0][2] == i) || 
    (table[0][0] == i && table[1][1] == i && table[2][2] == i)|| 
    (table[0][0] == i && table[1][0] == i && table[2][0] == i)|| 
    (table[2][0] == i && table[2][1] == i && table[2][2] == i)|| 
    (table[0][2] == i && table[1][2] == i && table[2][2] == i)|| 
    (table[2][0] == i && table[1][1] == i && table[0][2] == i)|| 
    (table[1][0] == i && table[1][1] == i && table[1][2] == i)|| 
    (table[0][1] == i && table[1][1] == i && table[2][1] == i)
  
  return result
}

// Função que verifica se houve um empate
function verifyVelha(){
  for (let l = 0; l < table.length; l++) {
    for (let c = 0; c < table[l].length; c++) {
        if(table[l][c] == 0){
            velha = false
            break
        }
    }
  }
  if(velha){
      document.getElementById('win').innerHTML="Velha!"
  }
  velha = true
}

// Variável que ativa/desativa o Player 1
var jogadorX = true;
let velha = true;

// Função que define o jogador atual
function play(x,y,element){
  if(table[x][y] == 0){
    if(jogadorX){
      table[x][y] = 1;
      document.getElementById(element).innerHTML='X'
    }else{
      table[x][y] = 2;
      document.getElementById(element).innerHTML='O'
    }
    jogadorX = !jogadorX
  }
  verify()
}

// Função que verifica se algum jogador venceu
function verify(){
  for(let i = 1; i<3; i++){
    if(possibilities(i)){
      if(i == 1){
        document.getElementById('win').innerHTML="Xiz ganhou!"
      }else{
        document.getElementById('win').innerHTML="CirCulu ganhou!"
      }
    }else{
      verifyVelha()
    }
  }
}
