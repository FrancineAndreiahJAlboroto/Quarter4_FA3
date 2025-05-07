function isNumeric(value) {
  return !isNaN(value);
}

var input;
do {
  input = prompt("Please enter a number:");
} while (!isNumeric(input));

var number = parseInt(input);
var output = "Number inputted: " + number + "<br><br>";

if (number % 2 !== 0) {
  // Rectangle for odd numbers
  for (var i = number; i >= 1; i--) {
    for (var j = 0; j < number; j++) {
      output += i + " ";
    }
    output += "<br>";
  }
} else {
  // Triangle for even numbers
  for (var i = number; i >= 1; i--) {
    for (var j = 0; j < i; j++) {
      output += i + " ";
    }
    output += "<br>";
  }
}

document.getElementById("output").innerHTML = output;

var contacts = [];

function updateDisplay() {
  document.getElementById("contactsDisplay").innerHTML = contacts.join(" ");
}

function addContact() {
  var name = document.getElementById("nameInput").value;
  if (name !== "") {
    if (contacts.length >= 7) {
      contacts.shift();
    }
    contacts.push(name);
    updateDisplay();
    document.getElementById("nameInput").value = "";
  }
}

function removeContact() {
  contacts.pop();
  updateDisplay();
}
