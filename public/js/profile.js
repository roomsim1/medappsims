//Let's the user add times

var addTimeForm = document.forms.addTimeForm;

addTimeForm.addEventListener("submit", function(e) {
    addTime(e);
});

var timeArrays = [];

function addTime(e) {
    e.preventDefault();
    var timeUl = document.querySelector("#patient-list");
    var timeInput = document.querySelector("#patientName").value;
    var clearTime = document.querySelector("#patientName").value = "";

    var timeLi = document.createElement("li");
    var timeForm = document.createElement("form");
    var timeBtn = document.createElement("button");
    timeBtn.classList.add("btn", "btn-block", "med-list-button");
    timeBtn.setAttribute("type", "submit",);
    timeBtn.setAttribute("value", timeInput);
  //  patientBtn.setAttribute("formaction", "users/profile/submit");
  //  patientBtn.setAttribute("formmethod", "post");
  timeForm.setAttribute("action", "users/profile/submit");
    timeForm.setAttribute("method", "post");

    if (timeInput === "") {
        alert("Oops, please type in a time.")
    } else {
        timeUl.appendChild(timeLi);
    }

    timeArrays.push(timeInput);

    timeLi.appendChild(timeForm);
    timeForm.appendChild(timeBtn);
    timeBtn.innerHTML = timeInput;

}
