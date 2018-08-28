let mainContent=document.getElementById('mainContent')
let grid=document.getElementsByClassName('grid-columns')
let gridDots=document.getElementsByClassName('gridDots')



let cw= mainContent.clientWidth;
let ch= mainContent.clientHeight;

let size=175;
let l =cw/size;

//<div class="column" style="width: '+l+'px"></div>'

let div;
for (let i = 0; i < l ; i++) {



    
    //Append
   

    for (let i = 0;   i < grid.length ;  i++) {
       div =document.createElement('div');
    div.style="width: "+size+"px";
    div.className="column"
        grid[i].appendChild(div)
    }
    
}


for (let i = 0; i <size  ; i++) {

    for (let j=0 ; j <l  ; j++) {
  
       
       //Append

       for (let t = 0;   t < gridDots.length ;  t++) {
        div =document.createElement('div');
        div.style="left: "+(size/2)*i+"px;top: "+size*j+"px";
        div.className="dot"
        gridDots[t].appendChild(div)
    }
    }
       
   }



  
 
 