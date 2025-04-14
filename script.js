// Fixed exchange rates (two-way rates)
const exchangeRates = {
  egypt: {
    burundi: 133.5,  // EGP to BIF
    rwanda: 25.5,    // EGP to RWF
    kenya: 2.3,      // EGP to KES
    tanzania: 48,    // EGP to TZS
    ouganda: 66.60,  // EGP to UGX
    drc: 51.85,      // EGP to CDF
    canada: 0.0116   // EGP to CAD
  },
  burundi: { egypt: 0.0075 },  // BIF to EGP
  rwanda: { egypt: 0.0392 },   // RWF to EGP
  kenya: { egypt: 0.4348 },    // KES to EGP
  tanzania: { egypt: 0.0208 }, // TZS to EGP
  ouganda: { egypt: 0.0150 },  // UGX to EGP
  drc: { egypt: 0.0193 },      // CDF to EGP
  canada: { egypt: 86.21 }     // CAD to EGP
};

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

let currentUser = '';
let currentRole = '';

// Initialize the application
window.onload = function() {
  document.getElementById('rolePanel').style.display = 'block';
  document.getElementById('usernamePanel').style.display = 'none';
  document.getElementById('calculatorPanel').style.display = 'none';
  
  // Set up event listeners for country changes
  document.getElementById('fromCountry').addEventListener('change', updateCountries);
  document.getElementById('toCountry').addEventListener('change', updateCountries);
};

function showPanel(panelId) {
  document.getElementById('rolePanel').style.display = 'none';
  document.getElementById('usernamePanel').style.display = 'none';
  document.getElementById('calculatorPanel').style.display = 'none';
  document.getElementById(panelId).style.display = 'block';
}

function login() {
  const role = document.getElementById("role").value;
  const password = document.getElementById("password").value;
  const loginError = document.getElementById("loginError");
  
  if ((role === "admin" && password === "Kabura@2025") || 
      (role === "customer" && password === "KMC@2025")) {
    currentRole = role;
    localStorage.setItem("currentRole", role);
    showPanel('usernamePanel');
    loginError.textContent = "";
  } else {
    loginError.textContent = "Invalid password. Please try again.";
  }
}

function submitUsername() {
  const username = document.getElementById("usernameInput").value.trim();
  const usernameError = document.getElementById("usernameError");
  
  if (username === "") {
    usernameError.textContent = "Please enter a username.";
    return;
  }
  
  currentUser = username;
  showPanel('calculatorPanel');
  
  // Show appropriate request button based on role
  if (currentRole === "admin") {
    document.getElementById("customerRequestForm").style.display = "none";
    document.getElementById("adminRequestForm").style.display = "block";
  } else {
    document.getElementById("customerRequestForm").style.display = "block";
    document.getElementById("adminRequestForm").style.display = "none";
  }
}

function logout() {
  currentUser = '';
  currentRole = '';
  localStorage.removeItem("currentRole");
  document.getElementById("password").value = '';
  document.getElementById("usernameInput").value = '';
  showPanel('rolePanel');
}

function updateCountries() {
  const fromCountry = document.getElementById("fromCountry").value;
  const toCountry = document.getElementById("toCountry").value;
  
  // If from country is changed to non-Egypt, set to country to Egypt
  if (fromCountry !== "egypt") {
    document.getElementById("toCountry").value = "egypt";
  }
  // If to country is changed to non-Egypt, set from country to Egypt
  else if (toCountry !== "egypt") {
    document.getElementById("fromCountry").value = "egypt";
  }
}

function swapCountries() {
  const fromCountry = document.getElementById("fromCountry").value;
  const toCountry = document.getElementById("toCountry").value;
  
  // Only allow swapping if one of them is Egypt
  if (fromCountry === "egypt" || toCountry === "egypt") {
    document.getElementById("fromCountry").value = toCountry;
    document.getElementById("toCountry").value = fromCountry;
    updateCountries();
  }
}

function calculateTransfer() {
  const amount = parseFloat(document.getElementById("amount").value);
  const fromCountry = document.getElementById("fromCountry").value;
  const toCountry = document.getElementById("toCountry").value;
  const resultDiv = document.getElementById("result");

  if (isNaN(amount) || amount <= 0) {
    resultDiv.textContent = "Please enter a valid positive amount.";
    resultDiv.style.color = "#d9534f";
    return;
  }

  let rate, sourceCurrency, targetCurrency;
  
  if (fromCountry === "egypt") {
    // Transfer from Egypt to another country
    rate = exchangeRates.egypt[toCountry];
    sourceCurrency = currencySymbols.egypt;
    targetCurrency = currencySymbols[toCountry];
  } else {
    // Transfer from another country to Egypt
    rate = exchangeRates[fromCountry].egypt;
    sourceCurrency = currencySymbols[fromCountry];
    targetCurrency = currencySymbols.egypt;
  }

  const received = amount * rate;

  const formattedReceived = received.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });

  resultDiv.textContent = `Recipient receives: ${formattedReceived} ${targetCurrency}`;
  resultDiv.style.color = "#003580";
}

// Open Google Form in new tab (for customers)
function openTransferForm() {
  window.open(
    'https://docs.google.com/forms/d/e/1FAIpQLSd5EONg0TWXuERMa4cUYBKk2oImEP0oxcLWt-887pO0Nw7kgA/viewform',
    '_blank'
  );
}

// View requests in new tab (for admin)
function viewRequests() {
  window.open(
    'https://docs.google.com/spreadsheets/d/e/2PACX-1vR6YGDoO-g89zJhebQOk28ZAhH_S00YyEcHQTEZeh3eQXT97RToLZLFhI0L3b2PAiUn48c4OB9zsuzy/pubhtml?widget=true&headers=false',
    '_blank'
  );
}
