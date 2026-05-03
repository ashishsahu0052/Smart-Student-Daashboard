import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAwGcx4ZovfBjBdQjZr0TLVDAWsDOP3MxM",
  authDomain: "smart-student-dashboard-0.firebaseapp.com",
  projectId: "smart-student-dashboard-0",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

window.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".protected");

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      const user = auth.currentUser; // 🔥 real-time check

      if (!user) {
        e.preventDefault();
        alert("Please login first");
      }
    });
  });
});
