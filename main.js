// function handleClick() {
//     alert("Div clicked!");
//   }
window.onload = () => {
  displayImage("payroll.png"); //  default image 
};

function displayImage(imageName) {
  const imageContainer = document.getElementById("image-container");
  imageContainer.style.backgroundImage = `url('/Images/${imageName}')`;
  imageContainer.style.backgroundSize = "cover"; 
  // imageContainer.style.backgroundSize = "contain"; 
  // imageContainer.style.backgroundPosition = "Center"; 
  // imageContainer.style.backgroundRepeat = "no-repeat"; 
}

function showSidebar() {
  const sidebar = document.querySelector(".menu-p");
  sidebar.style.display = "block";
}
function hideSidebar() {
  const sidebar = document.querySelector(".menu-p");
  sidebar.style.display = "none";
}