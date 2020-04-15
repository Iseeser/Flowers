
let i=0;
let check = 0;
let _buket = document.getElementById('buket');
let anim = requestAnimationFrame(move);

function move(){
    if(check%2==0)
    i+= 0.1;
    else i--;

    _buket.style.transform = `rotate(${i}deg)`;

    requestAnimationFrame(move);
}

move();