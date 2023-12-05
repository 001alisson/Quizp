/* function certa(){
    tex = "Você acertou!!! :D";
    alert(tex);
    window.location="per2.html";
}
function certa2(){
    tex = "Você acertou!!! :D";
    alert(tex);
    window.location="per3.html";
}
function certa3(){
    tex = "Você acertou!!! :D";
    alert(tex);
    window.location="per4.html";
}
function errada(){
    tex = "Você errou... :(";
    alert(tex);
    window.location="per1.html";
}
*/

function certa1(){
    if (c1 == 0){
        c = "Acertou";
        document.getElementById("c1").innerHTML = c;
        var rem = document.getElementById("r1");
        rem.remove();
        var rem2 = document.getElementById("r2");
        rem2.remove();
        var rem3 = document.getElementById("r3");
        rem3.remove();        
    }
}
function certa2(){
    if (c2 == 0){
        c = "Acertou";
        document.getElementById("c2").innerHTML = c;
        var rem = document.getElementById("r4");
        rem.remove();
        var rem2 = document.getElementById("r5");
        rem2.remove();
        var rem3 = document.getElementById("r6");
        rem3.remove();    
    }
}
function certa3(){
    if(c3 == 0){
        c = "Acertou";
        document.getElementById("c3").innerHTML = c;
        var rem = document.getElementById("r7");
        rem.remove();
        var rem2 = document.getElementById("r8");
        rem2.remove();
        var rem3 = document.getElementById("r9");
        rem3.remove();    
    }
}
function certa4(){
    if(c4 == 0){
        c = "Acertou";
        document.getElementById("c4").innerHTML = c;
        var rem = document.getElementById("r10");
        rem.remove();
        var rem2 = document.getElementById("r11");
        rem2.remove();
        var rem3 = document.getElementById("r12");
        rem3.remove();    
    }
}
function certa5(){
    if(c5 == 0){
        c = "Acertou";
        document.getElementById("c5").innerHTML = c;
        var rem = document.getElementById("r13");
        rem.remove();
        var rem2 = document.getElementById("r14");
        rem2.remove();
        var rem3 = document.getElementById("r15");
        rem3.remove();    
    }
}


function errada1(){
    c = "Errou";
    document.getElementById("e1").innerHTML = c;
    var rem = document.getElementById("r1");
    rem.remove();
    var rem2 = document.getElementById("r2");
    rem2.remove();
    var rem3 = document.getElementById("r3");
    rem3.remove();
    c1 = 1
    return c1    
}
function errada2(){
    c = "Errou";
    document.getElementById("e2").innerHTML = c;
    var rem = document.getElementById("r4");
    rem.remove();
    var rem2 = document.getElementById("r5");
    rem2.remove();
    var rem3 = document.getElementById("r6");
    rem3.remove();
    c2 = 1
    return c2
}
function errada3(){
    c = "Errou";
    document.getElementById("e3").innerHTML = c;
    var rem = document.getElementById("r7");
    rem.remove();
    var rem2 = document.getElementById("r8");
    rem2.remove();
    var rem3 = document.getElementById("r9");
    rem3.remove();
    c3 = 1
    return c3
}
function errada4(){
    c = "Errou";
    document.getElementById("e4").innerHTML = c;
    var rem = document.getElementById("r10");
    rem.remove();
    var rem2 = document.getElementById("r11");
    rem2.remove();
    var rem3 = document.getElementById("r12");
    rem3.remove();
    c4 = 1
    return c4   
}
function errada5(){
    c = "Errou";
    document.getElementById("e4").innerHTML = c;
    var rem = document.getElementById("r13");
    rem.remove();
    var rem2 = document.getElementById("r14");
    rem2.remove();
    var rem3 = document.getElementById("r15");
    rem3.remove();
    c5 = 1
    return c5
    
}

function boa_sorte(){
    alert("O jogo já vai começar! Boa sorte ✔");
    window.location="per1.html";
}

var c1 = 0
var c2 = 0
var c3 = 0
var c4 = 0
var c5 = 0