// Get references to elements
const changeColorBtn = document.getElementById('changeColorBtn');
const setColorBtn = document.getElementById('setColorBtn');
const colorInput = document.getElementById('colorInput');

// Function to generate a random color
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Change to a random color on button click
changeColorBtn.addEventListener('click', () => {
  const randomColor = getRandomColor();
  document.body.style.backgroundColor = randomColor;
});

// Set background color from user input
setColorBtn.addEventListener('click', () => {
  const color = colorInput.value;
  // Validate the input
  if (color) {
    document.body.style.backgroundColor = color;
  } else {
    alert('Please enter a valid color!');
  }
});
