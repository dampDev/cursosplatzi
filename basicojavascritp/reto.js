
juego(papel);
function juego(opc) {
    var min = 1;
    var max = 3;
    var x = Math.floor(Math.random()*(max-min+1)+min);

    console.log(x);
    
    if (opc === tijera) {
        tijera=2;
        
        
        if (tijera > x) {
            console.log("Ganaste; Tijera corta papel");
            
        }
        if (tijera < x) {
            console.log("Perdiste; Piedra Rompe tijeras");
            
        } 
        if (tijera==x) {
            console.log("Empate; ambos tiene Tijeras");
            
        }
    }  

    if (opc === piedra) {
        piedra=2;
        
        
        if (piedra > x) {
            console.log("Ganaste; Piedra rompe tijeras");
            
        }
        if (piedra < x) {
            console.log("Perdiste; Papel cubre la piedras");
            
        } 
        if (piedra==x) {
            console.log("Empate; ambos tiene piedra");
            
        }
    }
    
    if (opc === papel) {
        papel=2;
        
        
        if (papel > x) {
            console.log("Ganaste; papel cubre piedras");
            
        }
        if (papel < x) {
            console.log("Perdiste; Tijeras corta papel");
            
        } 
        if (papel==x) {
            console.log("Empate; ambos tiene papel");
            
        }
    }
    
}



    
   
    


