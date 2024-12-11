const api = 'https://official-joke-api.appspot.com/random_joke';

const apiCall = async () => {
  try {
    const response = await fetch(api); // Await the fetch call
    if (!response.ok) { // Check response.ok instead of just response
      throw new Error('Network response was not ok');
    }

    const data = await response.json(); // Await the JSON parsing
    document.getElementById("type").textContent = `Type: ${data.type}`;
    document.getElementById("setup").textContent = `Setup: ${data.setup}`;
    document.getElementById("punchline").textContent = `Punchline: ${data.punchline}`; // Corrected ID
  } catch (err) {
    console.error('Error:', err); // Log the error to console
  }
};

document.getElementById("clickHere").addEventListener("click", apiCall);
