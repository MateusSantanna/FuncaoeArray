function competidores (firstPlace, secondPlace, lastPlace){
     if(secondPlace == "Daniel"){
         let ultrapassagem = firstPlace
         firstPlace = "Daniel";
         secondPlace = ultrapassagem;
     }

     if(lastPlace == "Daniel"){
        let ultrapassagem = secondPlace
        secondPlace = "Daniel";
        lastPlace = ultrapassagem;
    }

    let primeiro = "o Primeiro lugar foi: " + firstPlace;
    let segundo = "o Segundo lugar foi: " + secondPlace;
    let terceiro = "o Terceiro lugar foi: " + lastPlace;
    let arrFinal = [];
    arrFinal.push(primeiro, segundo, terceiro)
   
    return (firstPlace, secondPlace, lastPlace)
}
