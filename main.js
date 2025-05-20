var form = document.querySelector("form");
var myName = document.querySelector("#my-name");
var age = document.querySelector("#my-age");
var email = document.querySelector("#my-mail");
var submit = document.querySelector("#submit");

var nameErr = document.querySelector("#nameError");
var ageErr = document.querySelector("#ageError");
var mailErr = document.querySelector("#mailError");

form.addEventListener("submit", function (e) {
  let errors = [];
  nameErr.style.display = "none";
  ageErr.style.display = "none";
  mailErr.style.display = "none";

  if (myName.value === "" || myName.value == null) {
    errors.push("This Field is required");
    nameErr.style.display = "block";
  }

  if (age.value === "" || age.value == null) {
    errors.push("This Field is required");
    ageErr.style.display = "block";
  }

  if (email.value === "" || email.value == null) {
    errors.push("This Field is required");
    mailErr.style.display = "block";
  }

  if (errors.length > 0) {
    e.preventDefault();
  } else {
    e.preventDefault();
    var tableBody = document.querySelector("#tableBody");
    var newRow = document.createElement("tr");

    var nameCell = document.createElement("td");
    nameCell.textContent = myName.value;

    var ageCell = document.createElement("td");
    ageCell.textContent = age.value;

    var emailCell = document.createElement("td");
    emailCell.textContent = email.value;

    newRow.appendChild(nameCell);
    newRow.appendChild(ageCell);
    newRow.appendChild(emailCell);
    tableBody.appendChild(newRow);

    myName.value = "";
    age.value = "";
    email.value = "";
  }
});
