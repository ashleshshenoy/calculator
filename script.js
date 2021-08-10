var res = document.getElementById("result");
var pre = document.getElementById('previous-result');




function clearAll() {

  res.innerHTML="";
  pre.innerHTML="";
}



function deleteElement(){

   document.getElementById('result').innerHTML=res.innerHTML.slice(0,res.innerHTML.length-1)
   demagnify();
   getAnswer();

}



function putElement(value){

  if(res.innerHTML){
  if( res.innerHTML.length > 15){
    alert(' character limit reached');
    return
  }
}
  document.getElementById('result').innerHTML =  res.innerHTML+String(value)

  demagnify();
  getAnswer();

}

function demagnify(){
  res.style.fontSize = "2rem"
  pre.style.fontSize = "1.2rem"
  res.style.opacity =" 1";
  pre.style.opacity= "0.7";
}


function magnify(){
   pre.innerHTML = '= ' + pre.innerHTML
   pre.style.fontSize = "1.6rem"
   res.style.fontSize = "1.2rem"
   res.style.opacity =" 0.7";
   pre.style.opacity= "1";

}

function getAnswer(){
   document.getElementById('previous-result').innerHTML = MATH. eval(res.innerHTML)
}
