const rates = {
  USD: { USD: 1, EUR: 0.91, GBP: 0.77, NPR: 132 },
  EUR: { USD: 1.1, EUR: 1, GBP: 0.85, NPR: 145 },
  GBP: { USD: 1.3, EUR: 1.17, GBP: 1, NPR: 170 },
  NPR: { USD: 0.0075, EUR: 0.0069, GBP: 0.0059, NPR: 1 }
};

function convert() {
  const amount = parseFloat(document.getElementById('amount').value);
  const from = document.getElementById('fromCurrency').value;
  const to = document.getElementById('toCurrency').value;

  if (isNaN(amount)) {
    document.getElementById('result').innerText = 'Please enter a valid amount';
    return;
  }

  const rate = rates[from][to];
  const result = (amount * rate).toFixed(2);

  document.getElementById('result').innerText = `${amount} ${from} = ${result} ${to}`;
}

