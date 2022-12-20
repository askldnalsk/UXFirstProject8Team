(function () {
	'use strict'

//로그인창 구연
const $modal_section=document.querySelector('.modal-section')
const $login=document.querySelector('.login');
const $close=document.querySelector('#close');
const $loginDN=document.querySelector('.loginDN');
const $bodyMain=document.querySelector('.bodyMain')

$login.addEventListener('click',e=>{
    $modal_section.classList.toggle('loginDN')
    $bodyMain.style.opacity="0.3";
    $bodyMain.classList.toggle('stop-scrolling')
    if($modal_section.classList.length==2){
        $bodyMain.style.opacity="1";
    }
})

$close.addEventListener('click',e=>{
    $modal_section.classList.toggle('loginDN');
    $bodyMain.style.opacity="1";
})

const $header_2=document.querySelector('header_2');
const $header=document.querySelector('header');

window.addEventListener('scroll', function(){
    if(0===window.scrollY){
        $header.classList.remove('header')
        $header_2.classList.remove( 'header_2');
    }
    if(0!==window.scrollY){$header_2.classList.add( 'header_2');
    $header.classList.add('header')
}
})


})();