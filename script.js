var table = [
  [0,0,0],
  [0,0,0],
  [0,0,0]
]

var jogadorX = true;

function play(x,y,element){
  if(table[x][y] == 0){
    if(jogadorX){
      table[x][y] = 1;
      document.getElementById(element).innerHTML='X'
      jogadorX = !jogadorX
    }else{
      table[x][y] = 2;
      document.getElementById(element).innerHTML='O'
      jogadorX = !jogadorX
    }
  }
  winner()
}
function winner(){
  for(let i = 1; i<3; i++){
    if((table[0][0] == i && table[0][1] == i && table[0][2] == i) || 
    (table[0][0] == i && table[1][1] == i && table[2][2] == i)|| 
    (table[0][0] == i && table[1][0] == i && table[2][0] == i)|| 
    (table[2][0] == i && table[2][1] == i && table[2][2] == i)|| 
    (table[0][2] == i && table[1][2] == i && table[2][2] == i)|| 
    (table[2][0] == i && table[1][1] == i && table[0][2] == i)|| 
    (table[1][0] == i && table[1][1] == i && table[1][2] == i)|| 
    (table[0][1] == i && table[1][1] == i && table[2][1] == i)){
      if(i == 1){
        document.getElementById('win').innerHTML="Xiz ganhou!"
      }else{
        document.getElementById('win').innerHTML="CirCulu ganhou!"
      }
      
    }
  }
}