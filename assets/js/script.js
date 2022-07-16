const resetButton =document.getElementById("reset-btn");
const barWidth = document.getElementById("frontbar");
const input = document.getElementById("input");
const userInput = input.value;

timeInterval = setInterval(runProgress, 100);

let x = 0;

// function to make the progress bar run 
function runProgress() {
    barWidth.style.width= x + "%";
    x = x + 1;
    if (x > 100) {
        clearInterval(timeInterval);
        barWidth.innerHTML = "Completed!";
    }
}

const stateAbbrevs = [ 'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY' ];

// function to filter out the array based on input
function filterArray(userInput) {
    const result = stateAbbrevs.filter(word => word.includes(userInput));
    console.log(result);
}

input.addEventListener("change", console.log(userInput));

// reset button to clear out interval and set x back to 0
resetButton.addEventListener("click", function(){
    barWidth.innerHTML = "";
    clearInterval(timeInterval);
    x = 0;
    timeInterval = setInterval(runProgress, 100);
    runProgress();
});
