function getNum(num){
    //console.log(num)
    var result=document.getElementById("screen");
    result.value += num;
}

function clearR(){
   
    var result=document.getElementById("screen");
    result.value = "";
}

function result(){
    var result=document.getElementById("screen");
    result.value = eval(result.value);
}