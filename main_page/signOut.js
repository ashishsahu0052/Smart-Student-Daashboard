import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-app.js";

import {
  getAuth,
  signOut,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/12.12.1/firebase-auth.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAwGcx4ZovfBjBdQjZr0TLVDAWsDOP3MxM",
  authDomain: "smart-student-dashboard-0.firebaseapp.com",
  projectId: "smart-student-dashboard-0",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// 🔐 Protect page (optional but recommended)
onAuthStateChanged(auth, (user) => {
  if (!user) {
    window.location.href = "login.html";
  }
});

// 🚪 Logout
document.getElementById("logoutBtn").addEventListener("click", async () => {
  try {
    await signOut(auth);
    alert("Logged out successfully");
    window.location.href = "login.html";
  } catch (error) {
    alert(error.message);
  }
});
