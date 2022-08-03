const ojos = document.querySelector('.ojos');

ojos.addEventListener('click',function(){
    const contarasena = this.querySelector('.constrasena');
    if(this.nextElementSibling.type === "password"){
        this.nextElementSibling.type = "text"
        
    }else{
        this.nextElementSibling.type = "password"
    }
    
})
const ojos2 = document.querySelector('.ojos2');
ojos2.addEventListener('click',function(){
    const contarasena = this.querySelector('.constrasena');
    if(this.nextElementSibling.type === "password"){
        this.nextElementSibling.type = "text"
        
    }else{
        this.nextElementSibling.type = "password"
    }
    
})