
 var C, T, I, M, inicial,rendimento, jurosTotal = 0, total = 0;
function Atribuir(){
    document.getElementById("resultado").innerHTML = "";
    C = document.getElementById("C").value;
    T = document.getElementById("T").value;
    I = document.getElementById("I").value;

    C = parseFloat( C, 10);
    T = parseFloat( T, 10);
    I = parseFloat( I, 10);

    inicial = C
    for(j=1; j<=T; j++){
        Calcular(C, I, j);
    }
    jurosTotal = M - C
    rendimento = (jurosTotal*100)/M;   
    document.getElementById("resultado").innerHTML += "<div class='periodo' id='Juros'> Total de rendimento R$" + jurosTotal.toFixed(2) + "</div>";
    document.getElementById("resultado").innerHTML += "<div class='periodo' id='Jprocent'> Porcentagem total de remdimento " + rendimento.toFixed(2) + "% </div>";

}

function Calcular(inicial, juros, i){
    var porJuros = Math.pow((1+ (juros/100)), i);
    M = inicial * porJuros;
    M = M.toFixed(2);
    document.getElementById("resultado").innerHTML += "<div class='parcela' id='periodo" + i + "'>" + i + "º Mês R$" + M + "</div>";

}
