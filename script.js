// Get HTML Elements from the page
const loanElem = document.getElementById("loan");
const interestElem = document.getElementById("interest");
const monthsElem = document.getElementById("months");
const inputElems = document.querySelectorAll(".inputs");
const monthlyPaymentElem = document.getElementById("payment");

const calculateloan = () => {
  // Get the input values
  const loanValue = loanElem.value;
  const interestValue = interestElem.value;
  const monthsValue = monthsElem.value;

  // Calculate interest and update the monthly payment
  const interest = (loanValue * (interestValue * 0.01)) / monthsValue;
  const monthlyPayment = (loanValue / monthsValue + interest).toFixed(2);
  monthlyPaymentElem.innerText = `Monthly Payment: $${monthlyPayment}`;
};

// Display the default monthly payment when the page loads
calculateloan();

// Updates the montly payment value whenever the loan amount, interest rate, or months to pay are changed
inputElems.forEach((inputElem) => {
  inputElem.addEventListener("change", calculateloan);
});
