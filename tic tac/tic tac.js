// coloum and rows display "X" or"O" 
function displayBtn1(){
    console.log("btn 1 clicked");
    var fristperson="X";
    var seccondperson="O";
    var typeXO = '';
    if (document.getElementById('X').checked) {
        typeXO = document.getElementById('X').value;
    } else {
        typeXO = document.getElementById('O').value;
    }
    if(typeXO  == "X"){
        document.getElementById('btn1').innerHTML=fristperson;

    }else {
        document.getElementById('btn1').innerHTML=seccondperson;
    }
    }


    function displayBtn2(){
         var fristperson="X";
         var seccondperson="O";
       
        var typeXO = '';
                if (document.getElementById('X').checked) {
                    typeXO = document.getElementById('X').value;
                } else {
                    typeXO = document.getElementById('O').value;
                }

    if(typeXO == "X"){
        document.getElementById('btn2').innerHTML=fristperson;
    }else {
        document.getElementById('btn2').innerHTML=seccondperson;
     }
}
    function displayBtn3(){
        var fristperson="X";
        var seccondperson="O";
        var typeXO = '';
                if (document.getElementById('X').checked) {
                    typeXO = document.getElementById('X').value;
                } else {
                    typeXO = document.getElementById('O').value;
                }
    if(typeXO=="X"){
        document.getElementById('btn3').innerHTML=fristperson;
    }else {
        document.getElementById('btn3').innerHTML=seccondperson;
    }
}
    function displayBtn4(){
        var fristperson="X";
        var seccondperson="O";
        var typeXO = '';
        if (document.getElementById('X').checked) {
            typeXO = document.getElementById('X').value;
        } else {
            typeXO = document.getElementById('O').value;
        }
    if(typeXO =="X"){
        document.getElementById('btn4').innerHTML=fristperson;
    }else {
        document.getElementById('btn4').innerHTML=seccondperson;
    }
    }

    function displayBtn5(){
        var fristperson="X";
        var seccondperson="O";
        var typeXO = '';
        if (document.getElementById('X').checked) {
            typeXO = document.getElementById('X').value;
        } else {
            typeXO = document.getElementById('O').value;
        }

    if(typeXO =="X"){
        document.getElementById('btn5').innerHTML=fristperson;
    }else {
        document.getElementById('btn5').innerHTML=seccondperson;
    }
    }

    function displayBtn6(){
        var fristperson="X";
        var seccondperson="O";
        var typeXO = '';
        if (document.getElementById('X').checked) {
            typeXO = document.getElementById('X').value;
        } else {
            typeXO = document.getElementById('O').value;
        }
        
    if(typeXO =="X"){
        document.getElementById('btn6').innerHTML=fristperson;
    }else {
        document.getElementById('btn6').innerHTML=seccondperson;
    }
    }

    function displayBtn7(){
        var fristperson="X";
        var seccondperson="O";
        var typeXO = '';
        if (document.getElementById('X').checked) {
            typeXO = document.getElementById('X').value;
        } else {
            typeXO = document.getElementById('O').value;
        }
    if(typeXO =="X"){
        document.getElementById('btn7').innerHTML=fristperson;
    }else {
        document.getElementById('btn7').innerHTML=seccondperson;
    }
    }

    function displayBtn8(){
        var fristperson="X";
        var seccondperson="O";
        var typeXO = '';
        if (document.getElementById('X').checked) {
            typeXO = document.getElementById('X').value;
        } else {
            typeXO = document.getElementById('O').value;
        }
    if(typeXO =="X"){
        document.getElementById('btn8').innerHTML=fristperson;
    }else {
        document.getElementById('btn8').innerHTML=seccondperson;
    }
    }
  function displayBtn9(){
    var fristperson="X";
    var seccondperson="O";
    var typeXO = '';
    if (document.getElementById('X').checked) {
        typeXO = document.getElementById('X').value;
    } else {
        typeXO = document.getElementById('O').value;
    }
if(typeXO =="X"){
    document.getElementById('btn9').innerHTML=fristperson;
}else {
    document.getElementById('btn9').innerHTML=seccondperson;
}
}

// creating playerbutton 
function playbut1(){

var b1=document.getElementById('btn1').innerText;
var b2 =document.getElementById('btn2').innerText;
var b3=document.getElementById('btn3').innerText;
var b4=document.getElementById('btn4').innerText;
var b5=document.getElementById('btn5').innerText;
var b6=document.getElementById('btn6').innerText;
var b7=document.getElementById('btn7').innerText;
var b8=document.getElementById('btn8').innerText;
var b9=document.getElementById('btn9').innerText;

if((b1== "X" && b2== "X" && b3=="X")||(b4== "X" && b5== "X" && b6=="X")|| (b7== "X" && b8== "X" && b9=="X")||(b1=="X"&& b4=="X"&&b7=="X")||(b2=="X"&&b5=="X"&&b8=="X")||(b3=="X"&&b6=="X"&&b9=="X")||(b1=="X"&&b5=="X"&&b9=="X")||(b3=="X"&&b5=="X"&&b7=="X")){
        document.getElementById('player_XO').innerText = "X Won";
}
if((b1== "O" && b2== "O" && b3=="O")||(b4== "O" && b5== "O" && b6=="O")||(b7=="O"&& b8=="O"&&b9=="O")||(b1=="O" && b4=="O" && b7=="O")||(b2=="O" && b5=="O" && b8=="O")||(b3=="O"&& b6=="O" &&b9=="O")||(b1=="O"&&b5=="O"&&b9=="O" )||(b3=="O"&&b5=="O"&&b7=="O")){
        document.getElementById('player_XO').innerText = "O Won";
}
}







// refersh button
function clearTic(){
    document.getElementById('btn1').innerHTML="";
    var clear2=document.getElementById('btn2').innerHTML="";
    var clear3=document.getElementById('btn3').innerHTML="";
    var clear4=document.getElementById('btn4').innerHTML="";
    var clear5=document.getElementById('btn5').innerHTML="";
    var clear6=document.getElementById('btn6').innerHTML="";
    var clear7=document.getElementById('btn7').innerHTML="";
    var clear8=document.getElementById('btn8').innerHTML="";
    var clear9=document.getElementById('btn9').innerHTML="";


}