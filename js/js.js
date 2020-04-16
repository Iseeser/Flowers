
let i=0;

let _buket = document.getElementById('buket');
let anim = requestAnimationFrame(move);

function move(){
    console.log('jopa')
    i+= 0.1;
   

    _buket.style.transform = `rotate(${i}deg)`;

    requestAnimationFrame(move);
}



