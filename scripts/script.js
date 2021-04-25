document.getElementById('signup').addEventListener('click',function (){
    document.querySelector('.sign-up-div').style.display = 'block';
    document.querySelector('.sign-in-div').style.display = 'none';
    

    document.getElementById('login').style.border = 'none';
    document.getElementById('login').style.boxShadow= 'none';
    document.getElementById('signup').style.border = '1px solid white';
    document.getElementById('signup').style.boxShadow= '1px 1px 8px black';
})

document.getElementById('login').addEventListener('click',function (){
    document.querySelector('.sign-up-div').style.display = 'none';
    document.querySelector('.sign-in-div').style.display = 'block';
    
    document.getElementById('login').style.border = '1px solid white';
    document.getElementById('login').style.boxShadow= '1px 1px 8px black';
    document.getElementById('signup').style.border = 'none';
    document.getElementById('signup').style.boxShadow= 'none';
})