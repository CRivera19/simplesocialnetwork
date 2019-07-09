// Define UI Vars
const logInForm = document.querySelector('#logInForm');
const welcome = document.querySelector('#welcome');
const thoughtForm = document.querySelector('#form');
const timeLine = document.querySelector('#timeline');
const userThought = document.querySelector('#userThought');

// Load all event listeners
loadAllEventListeners();

// Load all event listeners
function loadAllEventListeners() {
  // add thought event
  thoughtForm.addEventListener('submit', addThought);
}

// Add Thought
function addThought(e) {
  if(userThought.value === '') {
    alert('Add a thought');
  }
  e.preventDefault();
}

let database = [
  {
    username: "Chris",
    password: "secretpassword"
  }
];

let newsfeed = [
  {
    username: "Isaac",
    timeline: "So tired from swimming in pool all day."
  },
  {
    username: "Joe",
    timeline: "I am also tired."
  }
];


function isUserValid(username, password) {
  for (let i = 0; i < database.length; i++) {
    if (
      database[i].username === username &&
      database[i].password === password
    ) {
      return true;
    }
  }
  return false;
}

function signIn(username, password) {
  if (isUserValid(username, password)) {
    console.log(newsfeed);
  } else {
    alert("Sorry, wrong username and password.");
  }
}

// let userNamePrompt = prompt("What's your username?");
// let passwordPrompt = prompt("What's your password?");

// signIn(userNamePrompt, passwordPrompt);


// user types in what is on their mind and shows up on timeline. 

