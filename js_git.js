let _main_cont = document.getElementById('main_id');
let _main_elem = document.querySelector('.main_elem');

let blocks_len = elem_obj.length;



for(let i=0;i<blocks_len;i++){
    _main_cont.innerHTML += `<div class="main_elem">
    <div class="main_elem_head">
        <div class="main_elem_head_text">
            ${elem_obj[i].text} 
        </div>
        <div class="main_elem_head_img">
        <img src ="${elem_obj[i].img_src}">
        </div>
    </div>
    <div class="main_elem_bottom">
        <a href="#" class="main_elem_bottom_a">Узнать больше</a>
    </div>
    </div>`
    ;
}







_main_elem.addEventListener('click',action_link,false);





function action_link(){
    alert('Такой страницы не существует');
}