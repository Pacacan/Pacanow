alert('gjbhsdhhbgbskuygy ')

function wyswAlert () {
    alert('co to takie?');
}

var but10 = document.getElementById('but1');
but10.addEventListener('click', wyswAlert);
but10.addEventListener('mouseover', function() {
    but10.textContent = 'Sienotka Mynysia';
});

var but11 = document.querySelector('#but2');
but11.addEventListener('click', function(){
    document.getElementById('div1').innerHTML = 'jacie panie ale daniel maniane odwalił o po prostu nie wierze XDDD ';
});

var but22 = document.querySelector('#but3');
but22.addEventListener('click', function(){
    console.log('jestem w konsoli');
});