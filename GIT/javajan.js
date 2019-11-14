//  && - and    //
//  || - or     //
//  !  - not    //
//  ^  - xor    //

let x = 2;
let y = 5;
let z = 0;

if(x == 2 && y == 5){
    console.log('x=2,y=5 XDDDD')
} 

for(let i=0; i < 10; ++i){
    console.log(i)
}

//w normalnych językach programowania składnia tablicy wygląda tak:
//typ_danych[] nazwa; np:  int[] tablica;
//
//w js. używa się var/let tablica = [];  (  zamiast '[]' mozna napisac 'new Array()'    )
//
//java script nie rozróżnia typów danych w tablicy, tj. w 1 tablicy można mieć różne typy danych
//
//numerowanie w tablicy zaczyna się od 0, wyjątki to języki BASIC i PASCAL
//
//przypisywanie danych od tablicy:                                  wynik:
tablica[0] = putor;      //---dodaje tam gdzie przypiszemy                 putor
tablica.push(grubas);     //---dodaje na końcu tablicy                     putor, grubas
tablica.unshift(debil);   //---dodaje na początku tablicy                   idiota, putor, grubas
tablica.pop();            //---usuwa na końcu tablicy                       idiota, putor
tablica.shift();          //---usuwa na początku tablicy                    putor
tablica.length              //---sprawdza dłógośćt tablicy                    1
//
//wyświetlanie zawartości tablicy
console.log (tablica[0]); // putor
console.log (tablica.join('...'))

//wyświetlanie wszystkiego
for(let i = 0; i < tablica.length; i++){
    console.log(tablica[i]);
}

//wyświetlanie wszystkiego od końca

for(let i = tablica.length; i < tablica.length; i--){
    console.log(tablica[i]);
}

//bąbelkowa tablica polega na zmianie miejscami jeżeli a>b
//przykład
//4,5,1,7,2,8,9,6
//a>b --> 4>5 nie jest większe więc nic się nie dzieje
//a>b 5>1 jest większe i zamienia miejscami i po koleji każda

function bubbleSort(arr) {
    let arrLenght = arr.length;
    let ch, tmp;
    do {
        ch = false;
        for(let i = 0; i < arrLenght; i++) {
            if(arr[i + 1] < arr[i]){
                ch = true;
                tmp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = tmp;
            }
        }
    } while(ch)
    return arr;
}

//losowe liczby w tablicy
var array = [];
for(let i = 0; i < 20; i++) {
    array[i] = Math.floor(Math.random() * 10); //Math.floor zokrągla w dół a Math.ceil w góre

}
array.sort();

