
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




function check(){


  var e= document.getElementById('result').innerHTML;
  pattern = /(\d+)([ / * + -]+)(\d+)([/ * + -]+)/;
   return pattern.test(e);
}



function solver(oprand){
    document.getElementById('result').innerHTML += String(oprand);
    var bool= check()
    if( bool ){
      var e= document.getElementById('result').innerHTML;
      var optr=e.match(/[ / * + -]/g)
      var pos= e.search(/[ / * + -]/g)
      var opds=e.match(/\d+/g)
      var prev= document.getElementById('previous-result').innerHTML;
      if( prev ){

        document.getElementById("previous-result").innerHTML =Number(prev) +Number(opds[opds.length-1]);

      }else{
        document.getElementById('previous-result').innerHTML=String( Number(opds[0])+Number(opds[1]))  ;

      }

}
}
