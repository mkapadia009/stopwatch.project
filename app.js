// Referencing the h1 (head) and putting the values
var heading = document.getElementById('head');
heading.innerHTML = "00:00:00";

// Creating variables for the stopwatch 

var csec = 0;
var sec = 0;
var min = 0;


// Variables for handling UI JERK

var s_csec = "";
var s_sec = "";
var s_min = "";

// Variable to check the start button abnormal behaviour

var check = false;


// Variable to set the interval function

var a;

// Start Function
function start(){

    if(!check){
        check = true;
        a = setInterval(()=>{

            csec = csec + 1;
    
            if(csec >= 100){
                sec = sec + 1;
                csec = 0;
            }
    
            if(sec >= 60){
                min = min + 1;
                sec = 0;
            }
    
            if(min >= 60){
                min = 0;
                sec = 0;
                csec = 0;
            }

            //Handling the UI JERK

            if(csec < 10){
                s_csec = "0" + csec;
            } else {
                s_csec = csec;
            }
            
            if(sec < 10){
                s_sec = "0" + sec;
            } else {
                s_sec = sec;
            }
            
            if(min < 10){
                s_min = "0" + min;
            } else {
                s_min = min;
            }
    
            heading.innerHTML = `${s_min}:${s_sec}:${s_csec}`;
    
        },10)
    }

}


// Stop Function

function stop(){
    clearInterval(a);
    check = false;
    csec = 0;
    sec = 0;
    min = 0;

    heading.innerHTML = "00:00:00";
}

// Pause Function

function pause(){
    clearInterval(a);
    check = false;
}