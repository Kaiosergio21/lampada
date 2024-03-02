
//dom

const lampada = document.querySelector("#lampada");



//eventos

lampada.addEventListener('click',toggleLampada);

let contador = 0;

//função

function toggleLampada() {

 
   if(lampada.src.match("imagens/apagada.gif")){
       
      lampada.src ="imagens/acesa.gif";  
       
      contador++;
    
   }
      else if(lampada.src.match("imagens/quebrada.png")){

        lampada.src ="imagens/quebrada.png"; 

      }

   
   else{
         
         
      lampada.src ="imagens/apagada.gif";  

   
   }

   if(contador > 3){

      lampada.src ="imagens/apagada.gif";  

   }

}
function destruir() {

  
     if(lampada.src.match("imagens/apagada.gif")){
         
        lampada.src ="imagens/quebrada.png";  
          
     }else {
           
           
        lampada.src ="imagens/quebrada.png";  
     }
     
    
    }

    function resetar() {
      lampada.src = "imagens/apagada.gif";

      contador = 0;
  }
  

  
  
    
 