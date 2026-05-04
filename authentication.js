import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-app.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/12.12.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAwGcx4ZovfBjBdQjZr0TLVDAWsDOP3MxM",
  authDomain: "smart-student-dashboard-0.firebaseapp.com",
  projectId: "smart-student-dashboard-0",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById("submit").addEventListener("click", async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!email || !password) {
    alert("Please fill all fields");
    return;
  }

  try {
    // 🔥 TRY SIGNUP FIRST
    await createUserWithEmailAndPassword(auth, email, password);

    alert("Signup successful");

    // redirect
    window.location.href = "main.html";
  } catch (error) {
    // 🔥 IF USER ALREADY EXISTS → LOGIN
    if (error.code === "auth/email-already-in-use") {
      try {
        await signInWithEmailAndPassword(auth, email, password);

        alert("Login successful");

        // redirect
        window.location.href = "./main_page/main.html";
      } catch (loginError) {
        alert("Wrong password or user not found");
      }
    } else {
      alert(error.message);
    }
  }
});
