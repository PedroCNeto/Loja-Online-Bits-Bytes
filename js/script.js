function openNav() {
  document.getElementById("mySidebar").style.height = "10%";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.height = "0";
  document.getElementById("main").style.marginLeft= "0";
}

function display() {
  var checkRadio = document.querySelector(
      'input[name="Metodo"]:checked');
   
  if(checkRadio != null) {
      if (checkRadio.value == "Cartão de Credito"){
        document.getElementById("pagcart").style.display = "flex";
        document.getElementById("pagpix").style.display = "none";
        document.getElementById("pagboleto").style.display = "none";
      }  
      if (checkRadio.value == "Pix"){
        document.getElementById("pagcart").style.display = "none";
        document.getElementById("pagpix").style.display = "flex";
        document.getElementById("pagboleto").style.display = "none";
      }  
      if (checkRadio.value == "Boleto Bancario"){
        document.getElementById("pagcart").style.display = "none";
        document.getElementById("pagpix").style.display = "none";
        document.getElementById("pagboleto").style.display = "flex";
      }  

          
  }
  else {
      document.getElementById("disp").innerHTML
          = checkRadio.value;
  }
}