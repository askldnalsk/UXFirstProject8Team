(function(){ 
    'use strict';

    
    const $error = document.querySelector('.error');
    const $error2 = document.querySelector('.error2');
    const $error3 = document.querySelector('.error3');
    const $error4 = document.querySelector('.error4');
    const idReg = /^[a-z]{1,1}[0-9|a-z]{3,15}$/;
    const $id = document.querySelector('#member__id');
    const pwReg = /^(?!((?:[0-9]+)|(?:[a-zA-Z]+)|(?:[\[\]\^\$\.\|\?\*\+\(\)\\~`\!@#%&\-_+={}'""<>:;,\n]+))$)(.){10,16}$/;
    const $pw = document.querySelector('#passwd');
    const passwordConfirm = document.querySelector('#user_passwd_confirm'); 
    const emailReg = /^([\w\.\_\-])*[a-zA-Z0-9]+([\w\.\_\-])*([a-zA-Z0-9])+([\w\.\_\-])+@([a-zA-Z0-9]+\.)+[a-zA-Z0-9]{2,8}$/;
    const submitBtn = document.querySelector('.submit_btn');
    const $email = document.querySelector('#email1');
    const mobileNum = document.querySelector('#mobile2');
    const mobileNum2 = document.querySelector('#mobile3');
    const name = document.querySelector('#name');

    window.addEventListener('load',e =>{ 
        hideDetail();
    })
    function hideDetail (){ 
       $error.style.display ='none';
       $error2.style.display ='none';
       $error3.style.display ='none';
       $error4.style.display ='none';
    }
   


    $id.addEventListener('blur',e => { 
        if(!idReg.test($id.value)){
            $error.style.display = 'inline';
            $error.style.color = '#f65b54';
            $id.focus();
         }else{ 
            $error.style.display ='none';
         }        
    })

    $pw.addEventListener('blur',e =>{ 
        if(!pwReg.test($pw.value)){
            $error2.style.display = 'inline';
            $error2.style.color = '#f65b54';                 
        }else{ 
            $error2.style.display = 'none';
        }
})

    passwordConfirm.addEventListener('blur',e => { 
        if($pw.value !== passwordConfirm.value){ 
            $error3.style.display = 'inline';
            $error3.style.color = '#f65b54';
        }else{ 
            $error3.style.display = 'none';
        }
    })
    $email.addEventListener('blur',e =>{ 
        if(!emailReg.test($email.value)){ 
            $error4.style.display = 'inline';
            $error4.style.color = '#f65b54';
        }else{ 
            $error4.style.display = 'none';
        }
    })



    function chkValue(){ 
        if($id.value === '' || !idReg.test($id.value)){ 
            $id.focus();
            return
        }
        if($pw.value === '' || !pwReg.test($pw.value)){ 
            $pw.focus();
            return
        }
        if(passwordConfirm.value === '' || passwordConfirm.value !== $pw.value){ 
            passwordConfirm.focus();
            return
        }
        if(name.value === ''){ 
            name.focus();
            console.log(name.value);
            return
        }
        if(mobileNum.value === '' || mobileNum2.value === ''){ 
            mobileNum.focus();
            return
        }
        if($email.value === '' || !emailReg.test($email.value)){ 
            $email.focus();
            return
        }
        return true;
    }
    
    
    submitBtn.addEventListener('click',e => { 
        if(chkValue() !== true){ 
            submitBtn.style.cursor = 'default';
        } 
    })
    
    const interval = setInterval(function() {
        submitBtn.style.cursor = 'default';
        if(chkValue2() === true) {
            submitBtn.style.cursor = 'pointer';
        }
    }, 500);

    function chkValue2(){ 
        if($id.value === '' || !idReg.test($id.value)){ 
            return
        }
        if($pw.value === '' || !pwReg.test($pw.value)){ 
            return
        }
        if(passwordConfirm.value === '' || passwordConfirm.value !== $pw.value){ 
            return
        }
        if(name.value === ''){ 
            return
        }
        if(mobileNum.value === '' || mobileNum2.value === ''){ 
            return
        }
        if($email.value === '' || !emailReg.test($email.value)){ 
            return
        }
        return true;
    }

})();
