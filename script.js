
function clicar(){
    let espacoresult = document.getElementById("espacoresult");
        espacoresult.style.opacity = 1;
    
    
    let total = 0;
    const h = document.getElementById("h").value;

    const hamburger = [1.36, 2.31, 2.81];
    

    const a = document.getElementById("a").value;

    const acom = [3.69, 1.58];
    

    const b = document.getElementById("b").value;

    const bebida = [1.48, 2.58, 0.98];



    if(h == 1){

        total += hamburger[0];

        document.getElementById("result").innerHTML = "Xburger R$: " + hamburger[0];

    }

    else if(h == 2){

        total += hamburger[1];

        document.getElementById("result").innerHTML = "Xsalada R$: " + hamburger[1];

    }

    else if(h == 3){

        total += hamburger[2];

        document.getElementById("result").innerHTML = "Xbacon R$: " + hamburger[2];

    }
    else if(h == ""){
        document.getElementById("result").innerHTML = "campo de escolha hamburger vazio";
    }

    else{

        document.getElementById("result").innerHTML = "numero de hamburger esta incorreto";

    }

    if(a == 1){

        total += acom[0];

        document.getElementById("result2").innerHTML = "Nuggets R$: " +  acom[0];

    }

    else if(a == 2){

        total += acom[1];

        document.getElementById("result2").innerHTML ="Fitas R$: " +  acom[1];

    }
    else if(a == ""){

        document.getElementById("result2").innerHTML = "campo de acompanhamento vazio";

    }

    else{

        document.getElementById("result2").innerHTML = "numero de acompanhamento esta incorreto";

    }
    if(b == 1){

    total += bebida[0];

    document.getElementById("result3").innerHTML = "Coca-Cola R$: " + bebida[0];

    }

    else if(b == 2){

    total += bebida[1];

    document.getElementById("result3").innerHTML = "Fanta R$: " + bebida[1];

    }

    else if(b == 3){

    total += bebida[2];

    document.getElementById("result3").innerHTML = "Agua R$: " + bebida[2];

    }
    else if(b == ""){
        document.getElementById("result3").innerHTML = "campo de escolha de bebida vazio";
    }
    else{

    document.getElementById("result3").innerHTML = "numero da bebida esta incorreto";

    }
    document.getElementById("total").innerHTML = "Total: R$" + total.toFixed(2);

}