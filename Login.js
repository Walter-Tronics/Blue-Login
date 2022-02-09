
function change(){
  var input= document.querySelector('#pass');
  var icon= document.querySelector('#eye');
  var input2= input.querySelector('input');
  var icon2=icon.querySelector('i');
  var inputChange=input2.getAttribute('type');
  var iconChange=icon2.getAttribute('class');
  if (inputChange=='password' && iconChange=='fas fa-eye'){
    input2.setAttribute('type','text');
    icon2.setAttribute('class','fas fa-eye-slash');
  }else{
    input2.setAttribute('type','password');
    icon2.setAttribute('class','fas fa-eye');
  }
}


