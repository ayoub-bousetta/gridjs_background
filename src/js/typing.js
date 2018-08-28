const typing=document.querySelector(".typing");

let pos=0
let speed=200
//let str=typing.innerText;

//const words=['Templates','Ideas','Websites','Emailings']
const words=['Templates','Ideas','Websites','Emailings']

let str =words[Math.floor(Math.random()*words.length)]
//Clear it

typing.innerHTML=''
//looponText

const typinit = ()=>{

    
   
  
      
    if (pos < str.length) {
       
        typing.innerHTML+=str.charAt(pos);
        pos++
        setTimeout(typinit,speed)
    }else{
        setTimeout(erase,speed)
    }
    

   
}




  


//erase


const erase = ()=>{

    if (pos >= 0) {
        typing.innerHTML=str.substring(0,pos);
        pos--

       
        setTimeout(erase,speed)
        
    }else{
        str =words[Math.floor(Math.random()*words.length)]
        setTimeout(typinit,speed)
    }
}


window.addEventListener('load',typinit)


//Startiping it