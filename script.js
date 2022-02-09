document.addEventListener("DOMContentLoaded", function(event) {
    event.preventDefault();
    // or return false;

    // Setup values
    //compute();

    // Range values
    const slider = document.getElementById("rate");
    const output = document.getElementById("rate_val");
    output.innerHTML = slider.value + '%';

    slider.oninput = function() {
        output.innerHTML = this.value + '%';
    }
});

// Simple Interest Calculator A = P(1 + rt)
function compute()
{
    // Get current year
    const d = new Date();
    let currentYear = d.getFullYear();

    // Check and Assign form values to related variables
    let principal = document.getElementById("principal").value;
    let rate = document.getElementById("rate").value;
    let years = document.getElementById("years").value;

    const pError = document.getElementById('error');
    const yError = document.getElementById('yearError');

    // validation fails if the principal input is 0 or less
    // Principal amount validation
    if (principal < 1) {
        pError.innerHTML = "Please enter a positive number";
        pError.style.display = 'block';
        document.getElementById("principal").focus();
        return false;
    } else {
        pError.style.display = 'none';
    }
    // Number of years validation
    if (parseFloat(years) < 1 || isNaN(years) ) {
        yError.innerHTML = "Please enter a positive number";
        yError.style.display = 'block';
        document.getElementById("years").focus();
        return false;
    } else {
        yError.style.display = 'none';
    }

    // Calculate Interest and Total
    const total = principal * (1 + ((rate/100) * years));
    const interest = total - principal;

    // Calculate Projected Year
    let projectedYear = Number(currentYear) + parseInt(years);

    // Assign results
    const text = `If you deposit <mark>${principal}</mark>,<br />
            at an interest rate of <mark>${rate}%</mark>.<br />
            You will receive an amount of <mark>${interest.toFixed(2)}</mark>,<br />
            in the year <mark>${projectedYear}</mark>`

    // Print results
    document.getElementById("textValues").innerHTML = text;
    document.getElementById("textValues").style.display = 'block';
    console.log('Total:', total, 'Interest:', interest);

    // Commenting out results fields
    //document.getElementById("result").value = interest;
    //document.getElementById("total").innerHTML = total.toString();
}
        