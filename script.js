const page1 = document.querySelector(".page-1");
const btnClickEl = document.getElementById("btn-click");
const jokeEl = document.getElementById("joke");
const containerEl = document.getElementById("container");
const btnGetEl = document.getElementById("btn-get");

// open a joke page
function getJokePage() {
  page1.style.display = "none";
  containerEl.style.visibility = "visible";

  getNewJoke();
}

// get a joke

function getNewJoke() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "88f9782fe8msh810c96a7cdcae07p1fb273jsn20f9ea24ba2c",
      "X-RapidAPI-Host": "geek-jokes.p.rapidapi.com",
    },
  };

  fetch("https://geek-jokes.p.rapidapi.com/api?format=json", options)
    .then((response) => response.json())
    .then((response) => {
      const joke = response.joke;
      jokeEl.innerText = joke;
    })
    .catch((err) => alert("Try again 🐽"));
}

// Event Listner

btnClickEl.addEventListener("click", getJokePage);

btnGetEl.addEventListener("click", getNewJoke);
