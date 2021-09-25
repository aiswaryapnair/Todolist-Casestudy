
function ajax(){
    var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        var resp =JSON.parse(this.responseText);
    console.log(resp);
   
    var output="";
    // document.getElementById('table').innerHTML="<th>name</th><th>age</th>";

    var deci ="";
    for(var i = 0;i<resp.length; i++)
                    {
                      output+="<ul><input type=checkbox class='form-check-input' name=myCheckbox>"+resp[i].title+"</ul>";  

}
var result=document.getElementById('content');
result.innerHTML=output;
  // console.log(result);          

  var checkboxes=document.getElementsByName('myCheckbox'); 
  // console.log(checkboxes);
// var checkboxes = document.querySelectorAll("[name=myCheckbox]"); 
// console.log(checkboxes);
for(var j = 0;j<resp.length; j++)
{
//  
  deci=resp[j].completed;
  // console.log(deci);
  // console.log("sss");
  if(deci==true ){
  
  // for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[j].type == "checkbox") {
              

        checkboxes[j].checked=true;
        checkboxes[j].disabled=true;
    }
} 
 
}


var count=0;

// function  showChecked(){
// var r=document.querySelectorAll("input:checked").length;
// count++;
// console.log("11")
// if(count==5){
//   alert( "Congrats. 5 Tasks have been Successfully Completed");
// }
// }
// document.querySelectorAll("input[name=myCheckbox]").forEach(i=>{
//   i.onchange = function(){
//     console.log("22")
//    showChecked();
// }});








  document.querySelectorAll("input[name=myCheckbox]").forEach(i=>{
    i.onchange = function(){
      // console.log("1load")
      var message=new Promise(function ( resolve){
        // var r=document.querySelectorAll("input:checked").length;
        count++;
        // console.log("2load")
        if(count==5){
          resolve("Congrats!5 Tasks have been Successfully Completed");
          // alert( "Congrats. 5 Tasks have been Successfully Completed");
        }
        });
     message.then(function(s){
       alert(s);
     });
  }});





}}


// checkboxes.change = function(){
// for (var i = 0; i < checkboxes.length; i++) 
//  {
//    count++
//    console.log(count)
//  }}
  // if (checkboxes[i].type === "checkbox" && checkboxes[i].checked == true){

// var checkboxesarr = document.querySelectorAll('input[type="checkbox"]:checked');
// // alert(checkboxes.length);
//   console.log(checkboxesarr);


// console.log("aa")
// count++;}
// console.log(count)
// if(count==5){
//   alert("rr");
// }
// }
// }


        
    
      xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
      xhttp.send();
    
    }
   

