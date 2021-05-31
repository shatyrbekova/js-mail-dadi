

var gamer = Math.floor(Math.random()* 5)+1 ;
var computer = Math.floor(Math.random()*4) +1;

if(gamer > computer ) {  
document.getElementById('start').innerHTML = "hai vinto";
} else { 
document.getElementById('start').innerHTML = "hai perso";
};
