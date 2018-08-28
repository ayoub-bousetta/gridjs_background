 //Bar

 let Icon= document.getElementsByClassName('icon')



//<div id="skillbar"></div>

const typinit=()=>{

 for (let t = 0;   t < Icon.length ;  t++) {
let div;
let span;
let  skillrate
    //let  skillrate= Icon[t].parentNode.getElementsByClassName('skillbar')

    

   skillrate=Icon[t].getAttribute('data-init');

      //create Div
        div= document.createElement('div')
        div.className="skillbar w"+skillrate


        

       

        let i = 0;

       
          
           setInterval(()=>{
            if (i < 5) {
                span= document.createElement('span')  
                div.appendChild(span) 
                i++ 

            }

           }, 
           200)
      
           

                
   

       

       let newDiv= Icon[t].parentNode.insertBefore(div, Icon[t].nextSibling);

        


}

}

window.addEventListener('load',typinit)