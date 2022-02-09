const login = document.getElementById('login')
login.addEventListener('click',function(){
    console.log('Im clicked');
    const userEmail = document.getElementById('user-email')
    console.log(userEmail.value);
    const userPass = document.getElementById('user-password')
    console.log(userPass.value);
    if(userEmail.value=='sip@child.com' && userPass.value=='1234'){
        window.location.href='operation.html'
    }else{
        
    }

})