const addDivButton = document.getElementById("add-div-button");

addDivButton.addEventListener("click", createRandomDiv);
function createRandomDiv() {
    
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
  
    
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
  
    
    const randomX = Math.floor(Math.random()*screenWidth);
    const randomY = Math.floor(Math.random()*screenHeight);
  
 
    const newDiv = document.createElement("div");
    newDiv.style.backgroundColor = "#" + randomColor;
    newDiv.style.width = "50px";
    newDiv.style.height = "50px";
    newDiv.style.position = "fixed";

    newDiv.style.left = randomX + "px";
    newDiv.style.top = randomY + "px";
  
    
    document.body.appendChild(newDiv);
  
    
    newDiv.addEventListener("click", () => {
      document.body.removeChild(newDiv);
    });
  }
  