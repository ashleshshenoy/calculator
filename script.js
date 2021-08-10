
function clearAll() {

  document.getElementById("result").innerHTML="";
  document.getElementById("previous-result").innerHTML="";
}

function deleteElement(){
   var e=document.getElementById("result").innerHTML
   document.getElementById('result').innerHTML=e.slice(0,e.length-1)

}

function putElement(value){
  var e=document.getElementById('result').innerHTML
  document.getElementById('result').innerHTML =  e+String(value)
}



function getAnswer(){
  var e = document.getElementById("result").innerHTML;
  var ans=0;
  while(/[/ *]/.test(e))
  {
      var pos = e.search(/[/ *]/d);
      if( e.match(/[/ *]/) =="/" ){
            ans= Number(e[pos-1])/ Number(e[pos+1]);
            e = e.slice( 0,pos-1) + ans + e.slice(pos+2,e.length);
            }
        else{
          ans= Number(e[pos-1])*Number(e[pos+1]);
          e = e.slice( 0,pos-1) + ans + e.slice(pos+2,e.length);
        }

  }

  while(/[+ - ]/.test(e))
  {
      var pos = e.search(/[+ - ]/d);
      if( e.match(/[+ - ]/) =="+" ){
            ans= Number(e[pos-1])+Number(e[pos+1]);
            e = e.slice( 0,pos-1) + ans + e.slice(pos+2,e.length);
            }
        else{
          ans= Number(e[pos-1]) - Number(e[pos+1]);
          e = e.slice( 0,pos-1) + String(ans) + e.slice(pos+2,e.length);
        }

  }
  document.getElementById('previous-result').innerHTML = e
}
