function convertToSpoilers() {
    const inputText = document.getElementById("inputText").value;
    let outputText = "";

    for (let i = 0; i < inputText.length; i++) {
        outputText += "||" + inputText[i] + "||";
    }

    document.getElementById("outputText").textContent = outputText;
}

function convertToSpoilers() {
    const inputText = document.getElementById("inputText").value;
    let outputText = "";

    for (let i = 0; i < inputText.length; i++) {
        outputText += "||" + inputText[i] + "||";
    }

    document.getElementById("outputText").textContent = outputText;
}

function copyOutputText() {
    const outputText = document.getElementById("outputText");
  
    // Create a range object to select the text within the outputText element
    const range = document.createRange();
    range.selectNode(outputText);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
  
    // Copy the selected text
    document.execCommand("copy");
  
    // Deselect the text
    window.getSelection().removeAllRanges();
  
    // Change the copy button text briefly
    const copyButton = document.querySelector(".copy-icon");
    copyButton.textContent = "Copied!";
    setTimeout(() => {
        copyButton.textContent = "Copy";
    }, 2000);
}

function convertToSpoilers() {
    const inputText = document.getElementById("inputText").value;
    let outputText = "";

    for (let i = 0; i < inputText.length; i++) {
        outputText += "||" + inputText[i] + "||";
    }

    document.getElementById("outputText").textContent = outputText;
}

function copyOutputText() {
    const outputText = document.getElementById("outputText").textContent;
    navigator.clipboard.writeText(outputText).then(() => {
        alert("Copied to clipboard!");
    });
}

function closePopup() {
    document.getElementById("popup").classList.remove("show");
}

function showPopup() {
    document.getElementById("popup").classList.add("show");
}

function checkForSpoilers() {
    const inputText = document.getElementById("inputText").value;
    if (inputText.includes("||")) {
        showPopup();
        document.getElementById("outputText").textContent = ""; // Clear the output text
    } else {
        convertToSpoilers();
    }
}

document.getElementById("inputText").addEventListener("input", checkForSpoilers);
