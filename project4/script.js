// Get DOM Elements
const currencyOne = document.getElementById('currency-one');
const amountCurrencyOne = document.getElementById('amount-one');
const currencyTwo = document.getElementById('currency-two');
const amountCurrencyTwo = document.getElementById('amount-two');
const rate = document.getElementById('rate');
const swap = document.getElementById('swap');

// Fetch Exchange Rates & Update the DOM
function calculate(){
    // Get the currency code for currency one & two
    const currencyOneCode = currencyOne.value;
    const currencyTwoCode = currencyTwo.value;
    // console.log(currencyOneCode, currencyTwoCode);
    // Send request to exchangerate-API for conversion rates for currency one
    fetch(`https://v6.exchangerate-api.com/v6/7e40064a1425eaa95f1b6756/pair/${currencyOneCode}/${currencyTwoCode}`)
        .then(res => res.json())
        .then(data => {
            // Get the conversion rate from currency one to currency two
            const conversionRate = data.conversion_rate;
            // Update the DOM to display the conversion rate
            rate.innerText = `1 ${currencyOneCode} = ${conversionRate} ${currencyTwoCode}`;
            // Update the Currency Two Amount
            amountCurrencyTwo.value = amountCurrencyOne.value * conversionRate;
        });
};

// Event Listeners
// Recalculate exchange rate when currency-one changes
currencyOne.addEventListener('change', calculate);
// Recalculate exchange amount when currency-one amount changes
amountCurrencyOne.addEventListener('input', calculate);
// Recalculate exchange rate when currency-two changes
currencyTwo.addEventListener('change', calculate);
// Recalculate exchange amount when currency-two amount changes
amountCurrencyTwo.addEventListener('input', calculate);
// Execute calculate function on page load
calculate();