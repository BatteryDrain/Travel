let hideBAL = true;
let hideLL = true;
let hideRL = true;
BALB.addEventListener("click", function(){
    if(hideBAL == true){
        hideBAL = false;
        document.getElementById('BAL').classList.add("show");
        document.getElementById('BAL').classList.remove("hide");
    }
    else{
        hideBAL = true;
        document.getElementById('BAL').classList.add("hide");
        document.getElementById('BAL').classList.remove("show");
    }
    console.log(hideBAL);
})

LLB.addEventListener("click", function(){
    if(hideLL == true){
        hideLL = false;
        document.getElementById('LL').classList.add("show");
        document.getElementById('LL').classList.remove("hide");
    }
    else{
        hideLL = true;
        document.getElementById('LL').classList.add("hide");
        document.getElementById('LL').classList.remove("show");
    }
    console.log(hideLL);
})

RLB.addEventListener("click", function(){
    if(hideRL == true){
        hideRL = false;
        document.getElementById('RL').classList.add("show");
        document.getElementById('RL').classList.remove("hide");
    }
    else{
        hideRL = true;
        document.getElementById('RL').classList.add("hide");
        document.getElementById('RL').classList.remove("show");
    }
    console.log(hideRL);
})