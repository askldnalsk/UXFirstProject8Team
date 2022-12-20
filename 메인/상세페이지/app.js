'use strict';

// Comment Manipulation

const manipulateComment = (function() {
  
  const validTag = document.getElementById('validTag');
  const reviewInputField = document.getElementById('review_field');
  
  const invalidAlert = () => {
    validTag.style.animationName = 'notValid';
    setTimeout(() => { validTag.style.animationName = '' }, 1500);
  }
  
  
  let selectedHide = true;

  let target = document.querySelector(".horizon-scroll");
  let listPosition = document.querySelector(".other-product1");
  
  // 분쇄도
  
  const selectedUpMenu = document.querySelector(".count-selected-menu");
  const selectedDownMenu = document.querySelector(".count-selected-menu-downlist");
  
  const toggleBtn = document.querySelector('.dropdown-toggle');
  const list = document.querySelector('dropdown-list');
  const wholeBeen = document.querySelector('.wholebeen');
  const french = document.querySelector('.french');
  const drip = document.querySelector('.drip');
  const espresso = document.querySelector('.espresso');




  selectedUpMenu.addEventListener('click', e=>{
    if (selectedHide === true) {
      selectedDownMenu.style.visibility = "visible";
      selectedUpMenu.style.border = "1px solid #346aff";
      selectedHide = false;
    } else {
      selectedDownMenu.style.visibility = "hidden";
      selectedUpMenu.style.border = "1px solid #dddddd";
      selectedHide = true;
    }
  }) 

  toggleBtn.addEventListener('click' , e=>{ 
    // list.classList.toggle('hidden');
    // toggleBtn.classList.toggle('on');
  })
  toggleBtn.addEventListener('blur', e=> { 
    // list.classList.add('hidden');
    // toggleBtn.classList.remove('on');
  })
  const langArr = [wholeBeen, french, drip, espresso];

  langArr.forEach((item)=>{ 
    item.addEventListener('mousedown',(event)=> { 
      toggleBtn.textContent = event.target.textContent;
    })
  })
  
  




  
  var num = Number(document.getElementById("buy-count").value);
  const $plus = document.querySelector(".plus");
  const $minus = document.querySelector(".minus");
  
  $plus.addEventListener('click', e=>{
  
    num += 1;
    document.getElementById("buy-count").value = String(num);

    document.querySelector(".before-price").textContent = String(16000 * num);
    let realPrice = String(12800 * num);
    document.querySelector(".major-price-time").textContent =
      realPrice.slice(0, realPrice.length - 3) +
      "," +
      realPrice.slice(realPrice.length - 3, realPrice.length);
  
  })
  
  
    $minus.addEventListener('click',e=>{
  
      num -= 1;
      document.getElementById("buy-count").value = String(num);

      document.querySelector(".before-price").textContent = String(16000 * num);
      let realPrice = String(12800 * num);
      document.querySelector(".major-price-time").textContent =
        realPrice.slice(0, realPrice.length - 3) +
        "," +
        realPrice.slice(realPrice.length - 3, realPrice.length);
      
    
      if (num < 1) {
        num = 1;
        alert("0이하는 안돼요");
        document.getElementById("buy-count").value = 1;
        document.querySelector(".major-price-time").textContent = "12,800";
        document.querySelector(".before-price").textContent = "16,000";
      }
    })




  const addComment = (event, userName='sungwhan choi', userComment) => {
    event.preventDefault();
    if (userComment.length < 10) {
      invalidAlert();
      return;
    };
  
    let html = `<li class="review_thread"><span class="id">${userName}</span><span class="comment">${userComment}</span><div id="closeBtn">X</div></li>`;
    document.getElementById('RvTarget').insertAdjacentHTML('afterbegin', html);
  
    reviewInputField.value = '';
  }
  
  reviewInputField.addEventListener('keypress', (event) => {
    event.key === 'Enter' && addComment(event, undefined, event.target.value);
  })

})();


// Delete Comment

const deleteComment = (function() {
  const reviewField = document.getElementById('RvTarget');

  reviewField.addEventListener('click', event => {
    if (event.target.id !== 'closeBtn') return;
    event.target.closest('.review_thread').remove();
  })

})();




// ZOOM INTERACTION

const zoomImage = (function() {

  const zoomFrame = document.querySelector('.zoomFrame');
  const zoomLens = document.querySelector('.zoomLens');
  const zoomWindow = document.querySelector('.zoomWindow');

  function handleMouseMove(event) {

    const {left, top} = zoomFrame.getBoundingClientRect();
    const {x:lensLeft, y:lensTop} = zoomLens.getBoundingClientRect();

    const x = event.clientX - left;
    const y = event.clientY - top;

    zoomLens.classList.add('visible');
    zoomWindow.classList.add('visible');

    const boundary = {
      xMin: 153,
      xMax: 297,
      yMin: 117,
      yMax: 353
    }

    const coord = {
      x: x - 153 + 'px',
      y: y - 117 + 'px'
    }

    switch (true) {

      case (x <= boundary.xMin && y <= boundary.yMin) :
        zoomLens.style.left = '0';
        zoomLens.style.top = '0';
        break;

      case (x > boundary.xMin && x < boundary.xMax && y <= boundary.yMin) :
        zoomLens.style.left = coord.x;
        zoomLens.style.top = '0';
        break;

      case (x >= boundary.xMax && y <= boundary.yMin) :
        zoomLens.style.left = '145px';
        zoomLens.style.top = '0';
        break;

      case (x <= boundary.xMin && y > boundary.yMin && y < boundary.yMax) :
        zoomLens.style.left = '0';
        zoomLens.style.top = coord.y;
        break;

      case (x <= boundary.xMin && y >= boundary.yMax) :
        zoomLens.style.left = '0';
        zoomLens.style.top = '236px';
        break;

      case (x > boundary.xMin && x < boundary.xMax && y >= boundary.yMax) :
        zoomLens.style.left = coord.x;
        zoomLens.style.top = '236px';
        break;

      case (x >= boundary.xMax && y >= boundary.yMax) :
        zoomLens.style.left = '145px';
        zoomLens.style.top = '236px';
        break;

      case (x >= boundary.xMax && y > boundary.yMin && y < boundary.yMax) :
        zoomLens.style.left = '145px';
        zoomLens.style.top = coord.y;
        break;

      default :
        zoomLens.style.left = coord.x;
        zoomLens.style.top = coord.y;
    }

    zoomWindow.style.backgroundPosition = `${(lensLeft - left) * 100 / 145}% ${(lensTop - top) * 100 / 236}%`
  }

  zoomFrame.addEventListener('mousemove', handleMouseMove);

  zoomFrame.addEventListener('mouseleave', () => {
    zoomLens.classList.remove('visible');
    zoomWindow.classList.remove('visible');
  });

   // 오른쪽 화살
   const $right_arrow = document.querySelector(".right-arrow");
   const $left_arrow = document.querySelector(".left-arrow");
   const $after_arrow = document.querySelector(".after-arrow");
   const $before_arrow = document.querySelector(".before-arrow");
   const $left_before_arrow = document.querySelector('.left-before-arrow');
   const $left_after_arrow = document.querySelector('.left-after-arrow');

   const target = document.querySelector(".horizon-scroll");
   let scrollChange = false;
   const listPosition = document.querySelector(".other-product1");

   $right_arrow.addEventListener('mouseover',e=>{
     $right_arrow.style.visibility = "visible";
     if (scrollChange == true) {
       $left_arrow.style.visibility = "visible";
     }
     $left_arrow.style.visibility = "visible";
     $after_arrow.style.visibility = "visible";
     $before_arrow.style.visibility = "hidden";
   })
   
   $right_arrow.addEventListener('mouseout',e=>{
     $before_arrow.style.visibility = "visible";
     $after_arrow.style.visibility = "hidden";
   })
 
   target.addEventListener('mouseover', e=>{
     $right_arrow.style.visibility = "visible";
     if (scrollChange == true) {
       $left_arrow.style.visibility = "visible";
     }
     $left_arrow.style.visibility = "visible";
   })
 
   target.addEventListener('mouseout',e=>{
     $right_arrow.style.visibility = "hidden";
   })
   
   
   
   // 케러셀
   
   $after_arrow.addEventListener('click',e=>{
    
     // target.style.transform = "translateX(-100px)";
     let horizonScroll = target.animate(
       [{ transform: "translateX(0)" }, { transform: "translateX(-500px)" }],
       500
     );
   
     horizonScroll.addEventListener("finish", function () {
       target.style.transform = "translateX(-500px)";
     });
   
     console.log(listPosition.getBoundingClientRect().left);
     console.log(listPosition.getBoundingClientRect().right);
     console.log(listPosition.getBoundingClientRect().top);
     console.log(listPosition.getBoundingClientRect().bottom);
     console.log("---");
     //scrollChange = true;
   })
   
   $left_arrow.addEventListener('click', e =>{
     // target.style.transform = "translateX(100px)";
     let horizonScroll1 = target.animate(
       [{ transform: "translateX(0)" }, { transform: "translateX(+500px)" }],
       500
       
     );
      
     horizonScroll1.addEventListener("finish", function () {
       target.style.transform = "translateX(0)";
     });

     
    
     console.log(listPosition.getBoundingClientRect().left);
     console.log(listPosition.getBoundingClientRect().right);
     console.log(listPosition.getBoundingClientRect().top);
     console.log(listPosition.getBoundingClientRect().bottom);
     console.log("--");
      //scrollChange = true;
   });





    const show_box = document.querySelector('.show_box');
    const video_how = document.querySelector('.video_how');
    const hide = document.querySelector('#showbox');
    const view_artboard = document.querySelector('.view_artboard')
    const top_title1 =document.querySelector('.top-title_1');
    const top_title2 =document.querySelector('.top-title_2');
    const view_artboard_2 = document.querySelector('.view_artboard_2')

    show_box.addEventListener('click', e=> { 
      hideDetail();
    })
    hide.addEventListener('click',e=> { 
      showDetail();
    })

    function hideDetail(){ 
      show_box.classList.toggle('hide_box');
      view_artboard.classList.toggle('hide_box');
      hide.classList.toggle('hide_box');
      video_how.classList.toggle('hide_box');
      top_title1.classList.toggle('hide_box');      
      top_title2.classList.toggle('hide_box');
      view_artboard_2.classList.toggle('hide_box');   
    }
    function showDetail(){ 
      show_box.classList.toggle('hide_box');
      view_artboard.classList.toggle('hide_box');
      hide.classList.toggle('hide_box');
      video_how.classList.toggle('hide_box');
      top_title1.classList.toggle('hide_box');      
      top_title2.classList.toggle('hide_box'); 
      view_artboard_2.classList.toggle('hide_box'); 
    }

})();