// function handleClick() {
//     alert("Div clicked!");
//   }
window.onload = () => {
  displayImage("payroll.png"); // Set your default image here
};

function displayImage(imageName) {
  const imageContainer = document.getElementById("image-container");
  imageContainer.style.backgroundImage = `url('/Assets/images/${imageName}')`;
  imageContainer.style.backgroundSize = "contain"; // Ensure it covers the container
  imageContainer.style.backgroundPosition = "Center"; // Center the image
  imageContainer.style.backgroundRepeat = "no-repeat"; // Prevent repeating
}
