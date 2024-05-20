
function oblicz()
{
    var kwota=parseFloat(document.getElementById("kwotaPozyczki").value);
    var pr=parseFloat(document.getElementById("oprocentowanie").value);
    var n=parseInt(document.getElementById("liczbaRat").value);
    var oblRata=document.getElementById("oblRata");
    var calkowita = document.getElementById("calkowitaKwota");

    if (isNaN(kwota) || isNaN(pr) || isNaN(n)){
        oblRata.value="Wpisz poprawne dane";
        calkowita.value="Wpisz poprawne dane";
    }else {
        var pr_mc = (pr / 100) / 12;
        var rata = (kwota * pr_mc) / (1 - (1 / Math.pow((1 + pr_mc), n)));

        oblRata.value = rata.toFixed(2);
        var calkowitaKwota = rata * n;
        calkowita.value = calkowitaKwota.toFixed(2);

    }
}

function kalkulator(){
    var tab = document.getElementsByName("operator");
    var op;
    for(let i=0;i<tab.length;i++){
        if(tab[i].checked) {

            op = parseInt(tab[i].value);
            break;
        }
    }
    var x = parseFloat(document.getElementById("wartoscX").value);
    var y= parseFloat(document.getElementById("wartoscY").value);

    var wynikObl = document.getElementById("wynikObliczen");

    switch (op){
        case 0:
            var wynik = x+y;
            wynikObl.value=wynik.toFixed(2);
            break;
        case 1:
            var wynik = x-y;
            wynikObl.value=wynik.toFixed(2);
            break;
        case 2:
            var wynik = x*y;
            wynikObl.value=wynik.toFixed(2);
            break;
        case 3:
            if (y !== 0) {
                var wynik = x / y;
                wynikObl.value = wynik.toFixed(2);
            } else {
                wynikObl.value = "Błąd! Dzielenie przez zero!";
            }
            break;
        default:
            wynikObl.value = "Nie wybrano działania";
    }




}
