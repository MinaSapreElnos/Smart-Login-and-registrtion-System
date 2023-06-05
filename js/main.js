var userName=document.getElementById('Name')
var userEmail=document.getElementById('Email');
var userPassWord=document.getElementById('Password');
var btnRegistrtion=document.getElementById('btnRegistrtion');
var pRegistrtion=document.getElementById('pRegistrtion')
var btnLogin=document.getElementById('btnLogin');
var pLogin=document.getElementById('pLogin');
var allData=[];

if(localStorage.getItem('allData') !=null){
    allData=JSON.parse(localStorage.getItem('allData'))
}

function registrtion(){
       var user={
        userName:userName.value,
       userEmail:userEmail.value,
       userPassWord:userPassWord.value,
        }
        allData.push(user);
        storeData()
        clear()

        }
        
 btnRegistrtion?.addEventListener('click',function(){
    if(vileditionName()==false && vileditionPassword()==false){
        checkEmail()
        if(check!=true){
            registrtion()
            pRegistrtion.classList.replace('d-none','d-block')
            document.getElementById('pRegistrtion').innerHTML='success'
        }
        else{
            document.getElementById('pRegistrtion').innerHTML='email is exist'
        }
    }
    }
  )    

 function clear(){
    userName.value="";
    userEmail.value="";
    userPassWord.value=""; 
 }

function storeData(){
    localStorage.setItem('allData',JSON.stringify(allData));
    }       

function ddd(){
    pLogin.classList.replace('d-none','d-block')
    document.getElementById('pLogin').innerHTML='viled';
}

    function Login(){
        for(var i=0;i<allData.length;i<i++){
            if(allData[i].userEmail===userEmail.value && allData[i].userPassWord===userPassWord.value){
                    ddd()
                    location.href='home.html'
                // break;
             }
             if(allData[i].userEmail!=userEmail.value){
                ddd()
                document.getElementById('pLogin').innerHTML='Email is wrong';
                break;
             }

            //  if(allData[i].userPassWord!=userPassWord.value){
            //     ddd()
            //     document.getElementById('pLogin').innerHTML='Password is wrong';
            //  }
        }
    }
 btnLogin?.addEventListener('click',Login) 



var users=JSON.parse(localStorage.getItem('allData'));
var check=true;
function checkEmail(){
    for(var i=0;i<users.length;i++){
        if(users[i].userEmail===userEmail.value){
        
            check=true;
            break; 
        }
        else{
            check=false
        }
    }
}

function vileditionName(){
    var regxep=/^[a-zA-Z]{7}$/
    return regxep.test(userName.value)
}

function vileditionPassword(){
    var regxep=/^[0-9]{8}$/
    return regxep.test(userPassWord.value)
}