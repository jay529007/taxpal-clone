// function handleClick() {
//     alert("Div clicked!");
//   }
window.onload = () => {
  displayImage("payroll.png"); //  default image 
};

function displayImage(imageName) {
  const imageContainer = document.getElementById("image-container");
  imageContainer.style.backgroundImage = `url('/Assets/images/${imageName}')`;
  // imageContainer.style.backgroundSize = "cover"; 
  imageContainer.style.backgroundSize = "contain"; 
  imageContainer.style.backgroundPosition = "Center"; 
  imageContainer.style.backgroundRepeat = "no-repeat"; 
}
