async function sendJsonData(jsonData) {
  const url = 'http://localhost:8080/algo/sma'; // Replace with your server's URL

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(jsonData)
  });

  if (response.ok) {
    console.log("JSON data sent successfully");
  } else {
    console.error("Error sending JSON data:", response.status);
  }
}

const inputFile = document.getElementById('jsonFileInput'); // Assuming an <input type="file"> 
inputFile.addEventListener('change', (event) => {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = (event) => {
    const fileData = event.target.result;
    try {
      const jsonData = JSON.parse(fileData);
      sendJsonData(jsonData); // Call your function to send the data
    } catch (error) {
      console.error("Error parsing JSON file:", error);
    }
  };

  reader.readAsText(file);
});
