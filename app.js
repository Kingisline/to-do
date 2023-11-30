// jshint esversion:6


const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("unordered-list");


function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li)
        let span = document.createElement("span");
        span.innerHTML = "\u00D7";
        span.style.fontSize = "1rem";
        li.appendChild(span)
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
}

function showTask(){
    listContainer.innerHTML =localStorage.getItem("data")
}

showTask();


document.addEventListener("DOMContentLoaded", function () {
    // Get the anchor element by its ID
    var anchor = document.getElementById("delayed-link");
  
    // Function to handle the click event
    function handleClick(event) {
      event.preventDefault(); // Prevent the default navigation behavior
  
      // Add a delay (in milliseconds) before navigating to the link
      var delay = 500; // 1 seconds (you can adjust this value)
  
      setTimeout(function () {
        // Redirect to the link after the delay
        window.location.href = anchor.getAttribute("href");
      }, delay);
    }
  
    // Add a click event listener to the anchor element
    anchor.addEventListener("click", handleClick);
  });
