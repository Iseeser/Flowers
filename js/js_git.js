let _main_cont = document.getElementById('main_id');
let _main_elem = document.querySelector('.main_elem');
let blocks_len = elem_obj.length;
let _drop_down = document.querySelector('.drop_down');
let _drop_head = document.querySelector('.drop_down_head');
let flowers_category = ['roses','tulips','peonies','aloe','chrysanthemums'];
let check = [0,0,0];
let check_location;
let index_page;

for(let j in flowers_category){
    if(location.href.indexOf(flowers_category[j])>0){
        check_location=flowers_category[j];
        index_page=false;
    }
    if(location.href.indexOf('index')>0){index_page=true};
}

function action(num){
    if(check[num]%2==0){
    document.querySelector('.info').children[num].style.height = 54 + document.querySelector('.info').children[num].children[1].children[0].offsetHeight + 'px';
    document.querySelector('.info').children[num].children[0].children[1].classList.add('g');
    }
    else {
        document.querySelector('.info').children[num].style.height = '54px';
        document.querySelector('.info').children[num].children[0].children[1].classList.remove('g');
    }
    check[num]++;
}


//alert(elem_obj[7].img_src.indexOf(flowers_category[0]))


if(index_page==false)
for(let i=0;i<blocks_len;i++){
    
    if(elem_obj[i].img_src.indexOf(check_location)>0){
    _main_cont.innerHTML += `<div class="main_elem">
    <div class="main_elem_head">
        <div class="main_elem_head_img">
        <div class="main_elem_head_text">
                    ${elem_obj[i].text} 
                 </div>
            <img src ="${elem_obj[i].img_src}" height = "270px" width = "230px">
        </div>
                
    </div>
    <div class="main_elem_bottom">
        <a href="#" class="main_elem_bottom_a">Узнать больше</a>
    </div>
    </div>`
    ;
    }

}
if(index_page==true)
for(let i=0;i<blocks_len;i++){
    
    _main_cont.innerHTML += `<div class="main_elem">
    <div class="main_elem_head">
        <div class="main_elem_head_img">
        <div class="main_elem_head_text">
                    ${elem_obj[i].text} 
                 </div>
            <img src ="${elem_obj[i].img_src}" height = "270px" width = "230px">
        </div>
                
    </div>
    <div class="main_elem_bottom">
        <a href="#" class="main_elem_bottom_a">Узнать больше</a>
    </div>
    </div>`
    ;
    

}









