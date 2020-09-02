//Targeting OutPut ID
const outPut = document.getElementById("output"); 

// Adding New Content
function clickFunc(){
  outPut.innerHTML = "Hello, World !" + "<br>"+ "This is Mannan Arefin Sharif";
}

// Removing New Content
function resetFunc(){
  outPut.innerHTML = "";
}