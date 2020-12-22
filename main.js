function getparagraph1(){
    var inputs=[];
    for(var i=1;i<=6;i++){
        inputs.push(document.getElementById("input_"+i).value);
    }
    document.getElementById("showparagraph1").innerHTML=inputs.join(".");
}
function getparagraph2(){
    var input=[];
    for(var i=1;i<=6;i++){
        input.push(document.getElementById("input"+i).value);
    }
    document.getElementById("showparagraph2").innerHTML=input.join(".");
}