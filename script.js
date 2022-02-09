document.addEventListener("DOMContentLoaded", function(event) {
    event.preventDefault();
    // or return false;

    // Setup values
    //compute();
});

// Simple Interest Calculator A = P(1 + rt)
function compute()
{
    // Get current year
    const d = new Date();
    let currentYear = d.getFullYear().toPrecision();

    // Assign form values to related variables
    let principal = document.getElementById("principal").value;
    let rate = document.getElementById("rate").value;
    let years = document.getElementById("years").value;

    // Calculate Interest and Total
    const total = principal * (1 + ((rate/100) * years));
    const interest = total - principal;

    // Calculate Projected Year
    let projectedYear = Number(currentYear) + Number(years);

    // Assign results
    const text = `If you deposit <mark>${principal}</mark>,<br />
            at an interest rate of <mark>${rate}%</mark>.<br />
            You will receive an amount of <mark>${interest}</mark>,<br />
            in the year <mark>${projectedYear}</mark>`

    // Print results
    document.getElementById("textValues").innerHTML = text;
    document.getElementById("textValues").style.display = 'block';
    console.log('Total:', total, 'Interest:', interest);

    // Commenting out results fields
    //document.getElementById("result").value = interest;
    //document.getElementById("total").innerHTML = total.toString();
}
        