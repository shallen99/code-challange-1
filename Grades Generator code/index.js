const gradeCheck= ()=>{
//variable declaration

let shm=document.getElementById('mark').value;

//execution by use of if statement
    
    if(shm >= 80 && shm <= 100){
        document.getElementById("answer") .innerHTML= "Grade: A"; 
                }
                else if(shm>=60 && shm <=79){
                document.getElementById("answer") .innerHTML= "Grade: B";  
                }
                else if(shm >=49 && shm <= 59){
                    document.getElementById("answer") .innerHTML= "Grade: C";
                }
                else if(shm >=40 && shm <= 49){
                    document.getElementById("answer") .innerHTML= "Grade: D";
                }
                else if (shm >=1 && shm <=39){
                    document.getElementById("answer") .innerHTML= "Grade: E";
                }
                
    } 
    
   