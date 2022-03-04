window.onload = function() {
    var sec=00;
    var minu=00;
    var hur=00;
    var appendSec = document.getElementById("sec") 
    var appendMinu = document.getElementById("minu")
    var appendHru = document.getElementById("hur")
    var buttonStart = document.getElementById("butn-start");
    var buttonStop = document.getElementById("butn-stop");
    var buttonRestart = document.getElementById("butn-restart");
    var  interval;
    
buttonStart.onclick = function(){
    interval=setInterval(startTime,100);

}
buttonStop.onclick = function(){
    clearInterval(interval);
}
buttonRestart.onclick = function(){
    clearInterval(interval);
   sec="00";
   minu="00";
   hur="00";
   appendSec.innerHTML = sec;
   appendMinu.innerHTML = minu;
   appendHru.innerHTML = hur;

}
function startTime(){
    sec++;
    if(sec<=9)
    {
      appendSec.innerHTML = "0"+sec;

    }
    if(sec>9)
    {
        appendSec.innerHTML = sec;
    }
    if(sec>60){
    minu++;
    appendMinu.innerHTML = "0"+minu;
    sec=0;
    appendSec.innerHTML = sec;
        if(minu>60){
            hur++;
            appendHru.innerHTML = "0"+hur;
            minu=0;
            appendMinu.innerHTML = minu;
        }
    }
    
}
}
