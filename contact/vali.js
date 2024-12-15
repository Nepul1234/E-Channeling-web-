function sahan(){
  if (validateForm()==true && emailvalidate()==true && number()==true){
        return true;
  }
  else{
    return false;
  }
  

}

function validateForm (){

    var letter= "[A-Za-z\s]+";
    var name=document.getElementById("nameid").value;
    var email=document.getElementById("emailid").value;
    var number=document.getElementById("number").value;
    if((name== null || name=="")||(emailid==null || emailid=="") ||(number=null || number=="")) {
        alert("All the field must fill out");
        return false;
    }
    else if (name.match(letter)){
        return true;
    }
    else{

        alert("Name can enter characters only");
        return false;
    }
}
function emailvalidate(){
    var email=document.getElementById("emailid").value;
    if(email== null || email==""){
        alert("Email should be fill out");
        return false;
    }
    else{
        return true; 
    }
    
}
function number(){
    var number=document.getElementById("number").value;
    if(number.match(/^[0-9]+$/)){

        return true;
    }
    else{
        alert("Phone number should only be numbers")
    }
    
}

