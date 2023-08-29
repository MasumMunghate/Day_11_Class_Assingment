document.addEventListener("keydown" , function (e){
    const key_name = e.key;
  const key_number = e.keyCode;
  

    document.getElementById("heading").style.display = "none";
    document.getElementById('h3').innerHTML = "You Pressed  "
  document.getElementById("key_name").innerText =key_name;
  document.getElementById("key_Number").innerText = key_number;

  if(key_number  ===  32){
    document.getElementById("key_name").innerHTML  =" Space";
  }
})

