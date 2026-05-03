const inputBox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");
const time = document.getElementById("time");
const submit = document.getElementById("submit");



function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = `${time.value} ${inputBox.value}`;
        listcontainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // Cross mark
        li.appendChild(span);
    }
    inputBox.value = ""; // Clear the input box
    time.value = ""; // Clear the time input
    saveData();
}

listcontainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked"); // Toggle the checked class
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove(); // Remove the task
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listcontainer.innerHTML);
}

function showTask() {
    const savedData = localStorage.getItem("data");
    if (savedData) {
        listcontainer.innerHTML = savedData;
    }
}

// Call showTask to populate tasks on page load
showTask();
