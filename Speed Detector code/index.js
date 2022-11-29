
// speed generation

const getSpeed=()=>{
    let speed =document.getElementById('speed').value;

    if(speed<=70){
        document.getElementById("answer").innerHTML = 'OK'
    }

else if( speed >70) {
    let points = Math.floor((speed-70)/5);

    if(points >= 12) {
       document.getElementById("answer").innerHTML = "License suspended";
    }
   else{
        document.getElementById("answer").innerHTML = points + "points";
    }



}}