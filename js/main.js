function b1Operation(){
    var i1 = document.getElementById("ip1").value;
    document.getElementById("ip2").value = i1;
}

function b2Operation(){
    var i1 = document.getElementById("ip1").value;
    var i2 = document.getElementById("ip2").value;
    var d1 = document.getElementById("text1").innerHTML;
    var d2 = document.getElementById("text2").innerHTML;
    alert(i1);
    alert(i2);
    alert(d1);
    alert(d2);

}

function b3Operation(){
    var i1 = document.getElementById("ip1").value;
    var i2 = document.getElementById("ip2").value;
    var d1 = document.getElementById("text1").innerHTML;
    
    document.getElementById("text1").innerHTML=i1+i2+d1;

}

function b4Operation(){
    var i2 = document.getElementById("ip2").value;
    document.getElementById("text2").innerHTML=i2;

}
function b5Operation(){
    document.getElementById("ip1").setAttribute("type", "radio");
    document.getElementById("ip2").setAttribute("type", "checkbox");
    document.getElementById("img").style.backgroundColor="white";
    document.getElementById("img").style.backgroundImage= 'url("./i2.png")';
    document.getElementById("img").style.backgroundSize = "190px 260px";
    var x = document.getElementById("text1").innerHTML.length;
    document.getElementById("text1").innerHTML="";
    for(var i=1;i<=x;i++){
        document.getElementById("text1").innerHTML += "*";
    }
}