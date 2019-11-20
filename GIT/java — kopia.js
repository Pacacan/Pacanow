js - język skryptowy
struktury przechowujące dane - zmienne (var, let)
=== - sprawdza razem z typem danych

var a = prompt("Wprowadź dane");
var b = prompt("Wprowadź dane");


document.write(a + " " + b);
document.writeln(a);
document.writeln(b);

var sum = parseInt(a) + parseInt(b);
var sub = parseInt(a) - parseInt(b);
document.write(sum);
document.write(sub);

if((sum - b) === a)
    console.log("taki sam typ danych");
else
    console.log("różne typy danych");

