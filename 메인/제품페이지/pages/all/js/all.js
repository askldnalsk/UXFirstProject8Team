(function(){ 
    'use strict';
    const $heart__empty = document.querySelectorAll('.heart');
    const $all_steamed = localStorage.getItem('all_Steamed');
    const $best = localStorage.getItem('best');
    const $item=document.querySelector('.item');
    

    const AllHTML = $item.innerHTML
        // console.log(AllHTML);
        // console.log($bun);
        window.localStorage.setItem('all',AllHTML)
        if($best!==null){
            console.log($best);
        }
    function object(i){
        $object[`item__info${i}`]=document.querySelector(`.item__info${i}`);
        $object[`item__info-img${i}`]=document.querySelector(`.item__info-img${i}`)
        $object[`icon__box${i}`]=document.querySelector(`.icon__box${i}`)
        $object[`heart${i}`]=document.querySelector(`.heart${i}`)
        $object[`name${i}`]=document.querySelector(`.name${i}`)
        $object[`price_cheaper${i}`]=document.querySelector(`.price_cheaper${i}`)
        $object[`normal_price${i}`]=document.querySelector(`.normal_price${i}`)
        $object[`minus_price${i}`]=document.querySelector(`.minus_price${i}`)
    }
    var $object = []
    for(let i = 0;i<$heart__empty.length;i++){
        object(i)
    }
    // console.log($object[`name${5}`]);

    var $bun=[]
    var object =[]
    if($all_steamed!==null){
        $bun = $all_steamed.split(",");
        $bun.forEach((num1)=>{
            object[`item__info${num1}`]=document.querySelector(`.item__info${num1}`);
            object[`item__info-img${num1}`]=document.querySelector(`.item__info-img${num1}`)
            object[`icon__box${num1}`]=document.querySelector(`.icon__box${num1}`)
            object[`heart${num1}`]=document.querySelector(`.heart${num1}`)
            object[`name${num1}`]=document.querySelector(`.name${num1}`)
            object[`price_cheaper${num1}`]=document.querySelector(`.price_cheaper${num1}`)
            object[`normal_price${num1}`]=document.querySelector(`.normal_price${num1}`)
            object[`minus_price${num1}`]=document.querySelector(`.minus_price${num1}`)
        })

        $bun.forEach((item)=>{
            object[`heart${item}`].classList.add('red')
            object[`heart${item}`].classList.add('fa-solid')
        })
    }

    $heart__empty.forEach((heart,bun)=> {
        heart.addEventListener('click', e => {     
            heart.classList.toggle('red');
            heart.classList.toggle('fa-solid');
            bun=bun.toString()           
            test(bun)
        })
    })
    
    function test(bun){
        if($bun.includes(bun)){
            $bun.forEach((item,index)=>{
                if(item===bun){
                    $bun.splice(index,1);
                }
            })
        } else {$bun.push(bun);}
        all_Steamed()
    }
    //하트
    function all_Steamed(){
        var Bvun=$bun.join();
        // console.log(Bvun);
        window.localStorage.setItem('all_Steamed',Bvun)
    }
})();