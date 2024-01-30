const toggle=document.getElementById("darkmode");

let darkMode=false;

function dark(){
    darkMode=!darkMode;
    if(darkMode){
        document.body.style.backgroundColor="#333333";
        document.body.style.color="#ffffff";
        toggle.textContent="Dark";
    }else{
        document.body.style.backgroundColor="#ffffff";
        document.body.style.color="#333333";
        toggle.textContent="Light";
    }
}