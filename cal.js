
function getPrevious(){
    return document.getElementById("previous-value").innerText;
} 
//alert(getHistory());
function printPrevious(num){
    return document.getElementById("previous-value").innerText=num;
}//printHistory(9+9);
function getOutcome(){
    return document.getElementById("outcome-value").innerText;
}
function printOutcome(num){
    if(num==""){
        document.getElementById("outcome-value").innerText=num;

    }else{
     document.getElementById("outcome-value").innerText=getFormattedNumber(num);
    
    }
    
} 
function getFormattedNumber(num){
    if (num=="-"){
        return"";
    }
    var n= Number(num)
    var value=n.toLocaleString("en");
    return value;
}
//printOutput(400*41);
 function reverseNumberFormat(num){
     return Number(num.replace(/,/g,''));
    
 }

 
 var operator= document.getElementsByClassName("operator")
 for( var i=0;i<operator.length;i++){
   operator[i].addEventListener('click',function(){
       if(this.id=="clear"){
           printPrevious("")
           printOutcome("")

       } else if(this.id=="CE"){
           var outcome=reverseNumberFormat(getOutcome()).toString();
           if(outcome){
               outcome=outcome.substr(0,outcome.length-1);
               printOutcome(outcome);
           }
       }
       else{
           var outcome=getOutcome();
           var previous=getPrevious();
           if (outcome==""&&previous!=""){
               if(isNaN(previous[previous.length-1])){
                   previous=previous.substr(0,previous.length-1);
           
       }
    }
             if (outcome!==""||previous!=""){
               outcome= outcome==""?outcome:reverseNumberFormat(outcome);
               previous=previous+outcome;
               if(this.id=="="){
                   var result=eval(previous);
                   printOutcome(result);
                   printPrevious("");
               }
               else{
                previous=previous+this.id;
                   printPrevious(previous);
                   printOutcome("");
               }
           }
       }
           
       
   // alert("the operator clicked:"+this.id);
 });
 } 
 var number =document.getElementsByClassName("number")
 for(var i=0; i<number.length;i++){
 number[i].addEventListener('click',function(){
   // alert("the number clicked:"+this.id);
   var outcome= reverseNumberFormat(getOutcome());
   if (outcome!=NaN){
       outcome=outcome+this.id;
       printOutcome(outcome);

   }
 });
 }
