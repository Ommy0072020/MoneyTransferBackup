// Fixed exchange rates (EGP to destination currencies)
const exchangeRates = {
  burundi: 133.5,   // EGP to BIF
  rwanda: 25.5,     // EGP to RWF
  kenya: 2.3,       // EGP to KES
  tanzania: 48,     // EGP to TZS
  ouganda: 66.60,   // EGP to UGX
  drc: 51.85,       // EGP to CDF
  canada: 0.0116    // EGP to CAD
};

// Currency symbols
const currencySymbols = {
  egypt: 'EGP',
  burundi: 'BIF',
  rwanda: 'RWF',
  kenya: 'KES',
  tanzania: 'TZS',
  ouganda: 'UGX',
  drc: 'CDF',
  canada: 'CAD'
};

// Track current user
let currentUser = '';

// When the page loads, show only the login panel
window.onload = function() {
  document.getElementById('rolePanel').style.display = 'block';
  document.getElementById('usernamePanel').style.display = 'none';
  document.getElementById('calculatorPanel').style.display = 'none';
};

// Utility: Show one panel and hide the rest
function showPanel(panelId) {
  document.getElementById('rolePanel').style.display = 'none';
  document.getElementById('usernamePanel').style.display = 'none';
  document.getElementById('calculatorPanel').style.display = 'none';
  document.getElementById(panelId).style.display = 'block';
}

// Login logic
function login() {
  const role = document.getElementById("role").value;
  const password = document.getElementById("password").value;
  const loginError = document.getElementById("loginError");

  if ((role === "admin" && password === "Kabura@2025") || 
      (role === "customer" && password === "KMC@2025")) {
    localStorage.setItem("currentRole", role);
    showPanel('usernamePanel');
    loginError.textContent = "";
  } else {
    loginError.textContent = "Invalid password. Please try again.";
  }
}

// Username submission
function submitUsername() {
  const username = document.getElementById("usernameInput").value.trim();
  const usernameError = document.getElementById("usernameError");

  if (username === "") {
    usernameError.textContent = "Please enter a username.";
    return;
  }

  currentUser = username;
  showPanel('calculatorPanel');
}

// Logout function
function logout() {
  currentUser = '';
  localStorage.removeItem("currentRole");
  document.getElementById("password").value = '';
  document.getElementById("usernameInput").value = '';
  showPanel('rolePanel');
}

// Calculate converted amount
function calculateTransfer() {
  const amount = parseFloat(document.getElementById("amount").value);
  const toCountry = document.getElementById("toCountry").value.trim().toLowerCase();
  const resultDiv = document.getElementById("result");

  // Check if amount is valid
  if (isNaN(amount) || amount <= 0) {
    resultDiv.textContent = "Please enter a valid positive amount.";
    resultDiv.style.color = "#d9534f";
    return;
  }

  // Check if country exists in exchange rates
  const rate = exchangeRates[toCountry];
  if (rate === undefined) {
    resultDiv.textContent = "Selected country is not supported or invalid.";
    resultDiv.style.color = "#d9534f";
    return;
  }

  const received = amount * rate;
  const currencySymbol = currencySymbols[toCountry] || '';

  const formattedReceived = received.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });

  resultDiv.textContent = `Recipient receives: ${formattedReceived} ${currencySymbol}`;
  resultDiv.style.color = "#003580";
}

// Open Google Form in a new tab
function openTransferForm() {
  window.open(
    'https://docs.google.com/forms/d/e/1FAIpQLSd5EONg0TWXuERMa4cUYBKk2oImEP0oxcLWt-887pO0Nw7kgA/viewform',
    '_blank'
  );
}
