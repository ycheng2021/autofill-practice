const resetButton = document.getElementById("reset-btn");
const barWidth = document.getElementById("frontbar");
const input = document.getElementById("input");
const genOptions = document.getElementById("gen-options");

timeInterval = setInterval(runProgress, 100);
let x = 0;

// function to make the progress bar run
function runProgress() {
  barWidth.style.width = x + "%";
  x = x + 1;
  if (x > 100) {
    clearInterval(timeInterval);
    barWidth.innerHTML = "Completed!";
  }
}

// array of state abbreviations
const stateAbbrevs = [
  "AL",
  "AK",
  "AZ",
  "AR",
  "CA",
  "CO",
  "CT",
  "DE",
  "FL",
  "GA",
  "HI",
  "ID",
  "IL",
  "IN",
  "IA",
  "KS",
  "KY",
  "LA",
  "ME",
  "MD",
  "MA",
  "MI",
  "MN",
  "MS",
  "MO",
  "MT",
  "NE",
  "NV",
  "NH",
  "NJ",
  "NM",
  "NY",
  "NC",
  "ND",
  "OH",
  "OK",
  "OR",
  "PA",
  "RI",
  "SC",
  "SD",
  "TN",
  "TX",
  "UT",
  "VT",
  "VA",
  "WA",
  "WV",
  "WI",
  "WY",
];

// function to filter out the array based on input
function filterArray(userInput) {
  if (userInput === "") {
    genOptions.innerHTML = "";
    return;
  } else {
    const result = stateAbbrevs.filter((word) => {
      if (userInput.length < 2) {
        for (let i = 0; i < userInput.length; i++) {
          if (word[i] === userInput[i]) {
            return word;
          }
        }
      } else {
        return word === userInput;
      }
    });
    generateOptions(result);
  }
}

// function to generate autofill options
function generateOptions(array) {
  genOptions.innerHTML = "";
  array.map((state) => {
    const pTag = document.createElement("p");
    pTag.innerText = state;
    pTag.classList.add("p-tag");
    genOptions.append(pTag);
  });
}

// updates the value when change happens to input field
input.addEventListener("input", updateValue);

// function to filter the array based on input
function updateValue(e) {
  userInput = e.target.value;
  filterArray(userInput);
}

// event listener for the autofill options to override the user input when clicked
genOptions.addEventListener("click", function (e) {
  // But only alert for elements that have an p-tag class
  if (e.target.classList.contains("p-tag")) {
    input.value = e.target.innerHTML;
    genOptions.innerHTML = "";
  }
});

// reset button to clear out interval and set x back to 0 in progress bar
resetButton.addEventListener("click", function () {
  barWidth.innerHTML = "";
  clearInterval(timeInterval);
  x = 0;
  timeInterval = setInterval(runProgress, 100);
  runProgress();
});
