//Let's the user add times
var addTimeForm = document.forms.addTimeForm;

addTimeForm.addEventListener("submit", function(e) {
    addTime(e);
});

var timeArrays = [];

function addTime(e) {
    e.preventDefault();
    var timeUl = document.querySelector("#time-list");
    var timeInput = document.querySelector("#medTime").value;
    var clearTime = document.querySelector("#medTime").value = "";

    

    var timeLi = document.createElement("li");
    var timeForm = document.createElement("form");
    var timeBtn = document.createElement("button");
    timeBtn.classList.add("btn", "btn-block", "med-list-button");
    timeBtn.setAttribute("type", "submit",);
    timeBtn.setAttribute("value", timeInput);
    timeBtn.setAttribute("id", "timeBtn");
    // timeForm.setAttribute("action", "users/submit");
    // timeForm.setAttribute("method", "post");

    if (timeInput === "") {
        alert("Oops, please type in a time.")
    } else {
        timeUl.appendChild(timeLi);
    }

    timeArrays.push(timeInput);

    timeLi.appendChild(timeForm);
    timeForm.appendChild(timeBtn);
    timeBtn.innerHTML = timeInput;

    var timeOutput = document.querySelector("#timeBtn");

    timeOutput.addEventListener("submit", function(e) {
        addMed(e);
    });

    function addMed(e) {
        e.preventDefault;
        var medDiv = document.querySelector(".med-div");
        var medLabel = document.createElement("label");
        var medInput = document.createElement("input");
        var medBtn = document.createElement("input");
        medLabel.setAttribute("for", "medAdd");
        medInput.setAttribute("type", "text");
        medInput.setAttribute("name", "medAdd");
        medInput.setAttribute("id", "medAdd");
        medInput.setAttribute("placeholder", "Your Meds Here");
        medBtn.setAttribute("type", "submit");
        medBtn.setAttribute("name", "add-med");
        medBtn.setAttribute("value", "Add");
        medBtn.classList.add("btn", "btn-primary", "btn-add-med");

        medDiv.appendChild(medLabel);
        medDiv.appendChild(medInput);
        medDiv.appendChild(medBtn);
        medLabel.innerHTML = "Add Medicine";
    }
}

//     medBtn.setAttribute("name", "add-med");
//     medBtn.setAttribute("value", "Add");
//     medBtn.classList.add("btn", "btn-primary", "btn-add-med");

//     medDiv.appendChild(medLabel);
//     medDiv.appendChild(medInput);
//     medDiv.appendChild(medBtn);
//     medLabel.innerHTML = "Add Medicine";
// });

// function addMed(e) {
    
// }