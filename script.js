// Function to convert input text to spoilers
function convertToSpoilers() {
  const inputText = document.getElementById("inputText").value;
  let outputText = "";

  for (let i = 0; i < inputText.length; i++) {
    outputText += "||" + inputText[i] + "||";
  }

  document.getElementById("outputText").textContent = outputText;
}

// Function to copy the output text to the clipboard
function copyOutputText() {
  const outputText = document.getElementById("outputText").textContent;
  navigator.clipboard.writeText(outputText).then(() => {
    showCopySuccessPopup(); // Show the success popup
  });
}

// Function to close the popup
function closePopup() {
  document.getElementById("popup").classList.remove("show");
}

// Function to show the popup
function showPopup() {
  document.getElementById("popup").classList.add("show");
}

// Function to check for spoilers
function checkForSpoilers() {
  const inputText = document.getElementById("inputText").value;

  // Check if input text contains spoilers
  if (inputText.includes("||")) {
    showPopup();
    document.getElementById("outputText").textContent = ""; // Clear the output text
  } else {
    convertToSpoilers();
  }
}

function showCopySuccessPopup() {
  const copySuccessPopup = document.getElementById("copySuccessPopup");
  copySuccessPopup.classList.add("show");
  setTimeout(hideCopySuccessPopup, 2000); // Hide the popup after 2 seconds
}

function hideCopySuccessPopup() {
  const copySuccessPopup = document.getElementById("copySuccessPopup");
  copySuccessPopup.classList.remove("show");
}

// Event listener for input changes
document.getElementById("inputText").addEventListener("input", checkForSpoilers);
