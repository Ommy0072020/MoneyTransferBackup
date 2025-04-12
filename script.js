// Default settings - all rates set to 0 (admin must configure)
const defaultSettings = {
  egpToBif: 0,
  egpToTzs: 0,
  egpToRwf: 0,
  egpToUgx: 0,
  egpToCdf: 0,
  egpToKes: 0,
  egpToCad: 0,
  egpToUsd: 0,
  egpToEur: 0,
  egpToXof: 0,
  feeBurundi: 0,
  feeTanzania: 0
};

const currencySymbols = {
  egypt: 'EGP',
  burundi: 'BIF',
  tanzania: 'TZS',
  rwanda: 'RWF',
  ouganda: 'UGX',
  drc: 'CDF',
  kenya: 'KES',
  canada: 'CAD',
  usa: 'USD',
  france: 'EUR',
  belgium: 'EUR',
  holland: 'EUR',
  togo: 'XOF'
};

let currentUser = '';
let transactionHistory = [];

// Initialize the application
window.onload = function() {
  document.getElementById('rolePanel').style.display = 'block';
  document.getElementById('usernamePanel').style.display = 'none';
  document.getElementById('calculatorPanel').style.display = 'none';
  loadSettings();
  
  if (!localStorage.getItem("transferSettings")) {
    localStorage.setItem("transferSettings", JSON.stringify(defaultSettings));
  }
};

function showPanel(panelId) {
  document.getElementById('rolePanel').style.display = 'none';
  document.getElementById('usernamePanel').style.display = 'none';
  document.getElementById('calculatorPanel').style.display = 'none';
  document.getElementById(panelId).style.display = 'block';
  
  if (panelId === 'calculatorPanel' && localStorage.getItem("currentRole") === "customer") {
    document.getElementById("settingsPanel").style.display = "none";
  }
}

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

function submitUsername() {
  const username = document.getElementById("usernameInput").value.trim();
  const usernameError = document.getElementById("usernameError");
  
  if (username === "") {
    usernameError.textContent = "Please enter a username.";
    return;
  }
  
  currentUser = username;
  showPanel('calculatorPanel');
  
  const settingsButton = document.getElementById("settingsButton");
  const currentRole = localStorage.getItem("currentRole");
  settingsButton.style.display = currentRole === "customer" ? "none" : "block";
  
  const savedHistory = localStorage.getItem(`transferHistory_${currentUser}`);
  if (savedHistory) {
    transactionHistory = JSON.parse(savedHistory);
    updateHistoryDisplay();
  }
}

function logout() {
  localStorage.setItem(`transferHistory_${currentUser}`, JSON.stringify(transactionHistory));
  currentUser = '';
  localStorage.removeItem("currentRole");
  document.getElementById("password").value = '';
  document.getElementById("usernameInput").value = '';
  document.getElementById("settingsButton").style.display = "block";
  showPanel('rolePanel');
}

function toggleSettings() {
  const panel = document.getElementById("settingsPanel");
  panel.style.display = panel.style.display === "none" ? "block" : "none";
  document.getElementById("settingsMessage").textContent = "";
}

function saveSettings() {
  const settings = {
    egpToBif: parseFloat(document.getElementById("egpToBif").value),
    egpToTzs: parseFloat(document.getElementById("egpToTzs").value),
    egpToRwf: parseFloat(document.getElementById("egpToRwf").value),
    egpToUgx: parseFloat(document.getElementById("egpToUgx").value),
    egpToCdf: parseFloat(document.getElementById("egpToCdf").value),
    egpToKes: parseFloat(document.getElementById("egpToKes").value),
    egpToCad: parseFloat(document.getElementById("egpToCad").value),
    egpToUsd: parseFloat(document.getElementById("egpToUsd").value),
    egpToEur: parseFloat(document.getElementById("egpToEur").value),
    egpToXof: parseFloat(document.getElementById("egpToXof").value),
    feeBurundi: parseFloat(document.getElementById("feeBurundi").value),
    feeTanzania: parseFloat(document.getElementById("feeTanzania").value)
  };
  
  for (const key in settings) {
    if (isNaN(settings[key])) {
      document.getElementById("settingsMessage").textContent = "Please enter valid numbers for all fields.";
      document.getElementById("settingsMessage").className = "error";
      return;
    }
  }
  
  localStorage.setItem("transferSettings", JSON.stringify(settings));
  document.getElementById("settingsMessage").textContent = "Settings saved successfully!";
  document.getElementById("settingsMessage").className = "success";
  
  setTimeout(() => {
    document.getElementById("settingsPanel").style.display = "none";
  }, 2000);
}

function resetSettings() {
  if (confirm("Are you sure you want to reset to default settings?")) {
    localStorage.removeItem("transferSettings");
    loadSettings();
    document.getElementById("settingsMessage").textContent = "Settings reset to defaults!";
    document.getElementById("settingsMessage").className = "success";
  }
}

function loadSettings() {
  const saved = JSON.parse(localStorage.getItem("transferSettings")) || defaultSettings;
  
  document.getElementById("egpToBif").value = saved.egpToBif || defaultSettings.egpToBif;
  document.getElementById("egpToTzs").value = saved.egpToTzs || defaultSettings.egpToTzs;
  document.getElementById("egpToRwf").value = saved.egpToRwf || defaultSettings.egpToRwf;
  document.getElementById("egpToUgx").value = saved.egpToUgx || defaultSettings.egpToUgx;
  document.getElementById("egpToCdf").value = saved.egpToCdf || defaultSettings.egpToCdf;
  document.getElementById("egpToKes").value = saved.egpToKes || defaultSettings.egpToKes;
  document.getElementById("egpToCad").value = saved.egpToCad || defaultSettings.egpToCad;
  document.getElementById("egpToUsd").value = saved.egpToUsd || defaultSettings.egpToUsd;
  document.getElementById("egpToEur").value = saved.egpToEur || defaultSettings.egpToEur;
  document.getElementById("egpToXof").value = saved.egpToXof || defaultSettings.egpToXof;
  document.getElementById("feeBurundi").value = saved.feeBurundi || defaultSettings.feeBurundi;
  document.getElementById("feeTanzania").value = saved.feeTanzania || defaultSettings.feeTanzania;
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

  const settings = JSON.parse(localStorage.getItem("transferSettings")) || defaultSettings;
  
  try {
    let received = 0;
    let fee = 0;
    
    if (fromCountry === "egypt") {
      const exchangeRate = settings[`egpTo${currencySymbols[toCountry]}`] || 0;
      received = amount * exchangeRate;
      
      if (toCountry === "burundi") {
        fee = settings.feeBurundi || 0;
        received -= fee;
      } 
      else if (toCountry === "tanzania") {
        fee = settings.feeTanzania || 0;
        received -= fee;
      }
    }
    else if (fromCountry === toCountry) {
      received = amount;
    }
    else {
      resultDiv.textContent = "Currency conversion not yet implemented for this pair.";
      resultDiv.style.color = "#d9534f";
      return;
    }

    const formattedReceived = received.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });

    resultDiv.textContent = `Recipient receives: ${formattedReceived} ${currencySymbols[toCountry]}`;
    resultDiv.style.color = "#003580";

    const transaction = {
      date: new Date().toLocaleString(),
      fromCountry: fromCountry.charAt(0).toUpperCase() + fromCountry.slice(1),
      toCountry: toCountry.charAt(0).toUpperCase() + toCountry.slice(1),
      amount: amount,
      received: received,
      fromCurrency: currencySymbols[fromCountry],
      toCurrency: currencySymbols[toCountry]
    };
    
    transactionHistory.unshift(transaction);
    if (transactionHistory.length > 10) {
      transactionHistory.pop();
    }
    
    updateHistoryDisplay();
    localStorage.setItem(`transferHistory_${currentUser}`, JSON.stringify(transactionHistory));
    
  } catch (error) {
    resultDiv.textContent = "An error occurred during calculation. Please check your inputs.";
    resultDiv.style.color = "#d9534f";
    console.error("Calculation error:", error);
  }
}

function updateHistoryDisplay() {
  const historyList = document.getElementById("historyList");
  historyList.innerHTML = '';
  
  if (transactionHistory.length === 0) {
    historyList.innerHTML = '<div class="history-item">No transactions yet</div>';
    return;
  }
  
  transactionHistory.forEach(transaction => {
    const formattedAmount = transaction.amount.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
    
    const formattedReceived = transaction.received.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
    
    const item = document.createElement('div');
    item.className = 'history-item';
    item.innerHTML = `
      <strong>${transaction.date}</strong><br>
      From: ${transaction.fromCountry} (${transaction.fromCurrency})<br>
      To: ${transaction.toCountry} (${transaction.toCurrency})<br>
      Sent: ${formattedAmount} ${transaction.fromCurrency}<br>
      Received: ${formattedReceived} ${transaction.toCurrency}
    `;
    historyList.appendChild(item);
  });
}

function clearHistory() {
  if (confirm("Are you sure you want to clear all transaction history?")) {
    transactionHistory = [];
    updateHistoryDisplay();
    localStorage.removeItem(`transferHistory_${currentUser}`);
  }
}

// Open Google Form in new tab
function openTransferForm() {
  window.open(
    'https://docs.google.com/forms/d/e/1FAIpQLSd5EONg0TWXuERMa4cUYBKk2oImEP0oxcLWt-887pO0Nw7kgA/viewform',
    '_blank'
  );
}
