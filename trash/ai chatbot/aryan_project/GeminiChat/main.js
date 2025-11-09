import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_API_KEY);
console.log(genAI)
const button = document.querySelector(".send");
const input = document.querySelector(".input");
const message_area = document.querySelector(".message_area");
const loader = document.querySelector(".loading");

// Initialize the model
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// Start a chat with an initial history (optional)
const chat = model.startChat({
  history: [
    {
      role: "user",
      parts: [{ text: "Hello" }],
    },
    {
      role: "model",
      parts: [{ text: "Great to meet you. What would you like to know?" }],
    },
  ],
});

// Button click event listener
button.addEventListener("click", async () => {
  if (!input.value) return alert("Please enter a prompt");

  const userPrompt = input.value;
  input.value = ""; // Clear the input field

  // Display the user's message in the chat UI
  message_area.innerHTML += `<div class="message user-message">
    <div class="text">${userPrompt}</div>
  </div>`;

  loader.style.visibility = "visible";

  try {
    // Send the user's message to the chat model
    const result = await chat.sendMessage(userPrompt);
    console.log(result); // Log the full result for debugging

    loader.style.visibility = "hidden";

    // Check if the response is valid
    if (result?.response?.text()) {
      const responseText = result.response.text();
      message_area.innerHTML += `<div class="message ai-message">
        <div class="text">${responseText}</div>
      </div>`;
    } else {
      message_area.innerHTML += `<div class="message ai-message">
        <div class="text">No response from AI. Please try again.</div>
      </div>`;
    }
  } catch (error) {
    console.error("Error:", error);
    loader.style.visibility = "hidden";
    message_area.innerHTML += `<div class="message ai-message">
      <div class="text">Error: ${error.message || "Something went wrong!"}</div>
    </div>`;
  } finally {
    // Ensure the chat scrolls to the latest message
    message_area.scrollTop = message_area.scrollHeight;
  }
});
