let temp = document.getElementsByClassName('selectsem')

for(let i=0;i<temp.length;i++){

    toggle(i);
}
function toggle(i){
    
    if(temp[i].style.display=='none'){
        temp[i].style.display='block';
        
    }
    else{
        temp[i].style.display='none';
    }
}
let tempo = document.getElementsByClassName('selectsub')

for(let i=0;i<tempo.length;i++){

    togglesubject(i);
}
function togglesubject(i){
    
    if(tempo[i].style.display=='none'){
        tempo[i].style.display='grid';
        
    }
    else{
        tempo[i].style.display='none';
    }
}

function hoverover(){
    let hovervar = document.getElementById('homedis');
    
    hovervar.style.opacity = "100%";
    
    function opacfun(){
        hovervar.style.opacity = "0%";
    }
    
    setInterval(opacfun,3000);
}
// function hoverout(){
//     let hovervar = document.getElementById('homedis');

//     hovervar.style.display="none";
// }


function hoverover1(){
    let hovervar = document.getElementById('menudis');

    hovervar.style.display="block";
}
function hoverout2(){
    let hovervar = document.getElementById('menudis');

    hovervar.style.display="none";
}
