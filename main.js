window.addEventListener("keypress",(e)=>{
    if(e.target.id==="email"){
        email=document.getElementById("email");
        let el=email.value.length;
        if(el>=0 && el<15)lookleft();
        else if(el>=15 && el<30)lookdown();
        else if(el>=30)lookright();
        else looknormal();
    }
    else if(e.target.id==="password"){
        console.log("here")
        document.querySelector(".sunglass").style.top="10px";
    }
    else{
        document.querySelector(".sunglass").style.top="-30px";
    }
})
window.addEventListener("click",(e)=>{
    document.querySelector(".sunglass").style.top="-30px";
    looknormal();
})

function looknormal(){
    let e1=document.querySelector(".eyeball-1").style;
    let e2=document.querySelector(".eyeball-2").style;
    e1.top="5px";
    e1.right="";
    e2.top="5px";
    e2.left="8px";
    e1.left="-6px";
    e1.bottom="";
    e2.right="";
    e2.bottom="";
}
function lookleft(){
    let e1=document.querySelector(".eyeball-1").style;
    let e2=document.querySelector(".eyeball-2").style;
    e1.top="3px";
    e1.right="";
    e2.top="3px";
    e2.left="-1px";
    e1.left="-15px";
    e1.bottom="";
    e2.right="";
    e2.bottom="";
}
function lookright(){
    let e1=document.querySelector(".eyeball-1").style;
    let e2=document.querySelector(".eyeball-2").style;
    e1.top="5px";
    e1.right="4px";
    e2.top="5px";
    e2.left="15px";
    e1.left="";
    e1.bottom="";
    e2.right="";
    e2.bottom="";
}
function lookdown(){
    let e1=document.querySelector(".eyeball-1").style;
    let e2=document.querySelector(".eyeball-2").style;
    e1.top="8px";
    e1.right="";
    e2.top="8px";
    e2.left="8px";
    e1.left="-8px";
    e1.bottom="";
    e2.right="";
    e2.bottom="";
}