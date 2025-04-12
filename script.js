// Default settings with specified exchange rates
const defaultSettings = {
  egpToBif: 133.5,    // Egypt to Burundi
  egpToRwf: 25.5,     // Egypt to Rwanda
  egpToKes: 2.3,      // Egypt to Kenya
  egpToTzs: 48,       // Egypt to Tanzania
  egpToUgx: 66.60,    // Egypt to Uganda
  egpToCdf: 51.85,    // Egypt to DR Congo
  egpToCad: 0.0116    // Egypt to Canada
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
}

function logout() {
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
    egpToRwf: parseFloat(document.getElementById("egpToRwf").value),
    egpToKes: parseFloat(document.getElementById("egpToKes").value),
    egpToTzs: parseFloat(document.getElementById("egpToTzs").value),
    egpToUgx: parseFloat(document.getElementById("egpToUgx").value),
    egpToCdf: parseFloat(document.getElementById("egpToCdf").value),
    egpToCad: parseFloat(document.getElementById("egpToCad").value)
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
    localStorage.setItem("transferSettings", JSON.stringify(defaultSettings));
    loadSettings();
    document.getElementById("settingsMessage").textContent = "Settings reset to defaults!";
    document.getElementById("settingsMessage").className = "success";
  }
}

function loadSettings() {
  const saved = JSON.parse(localStorage.getItem("transferSettings")) || defaultSettings;
  
  document.getElementById("egpToBif").value = saved.egpToBif;
  document.getElementById("egpToRwf").value = saved.egpToRwf;
  document.getElementById("egpToKes").value = saved.egpToKes;
  document.getElementById("egpToTzs").value = saved.egpToTzs;
  document.getElementById("egpToUgx").value = saved.egpToUgx;
  document.getElementById("egpToCdf").value = saved.egpToCdf;
  document.getElementById("egpToCad").value = saved.egpToCad;
}

function calculateTransfer() {
  const amount = parseFloat(document.getElementById("amount").value);
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
    let exchangeRate = 0;
    
    switch(toCountry) {
      case "burundi":
        exchangeRate = settings.egpToBif;
        break;
      case "rwanda":
        exchangeRate = settings.egpToRwf;
        break;
      case "kenya":
        exchangeRate = settings.egpToKes;
        break;
      case "tanzania":
        exchangeRate = settings.egpToTzs;
        break;
      case "ouganda":
        exchangeRate = settings.egpToUgx;
        break;
      case "drc":
        exchangeRate = settings.egpToCdf;
        break;
      case "canada":
        exchangeRate = settings.egpToCad;
        break;
      default:
        resultDiv.textContent = "Invalid country selection.";
        resultDiv.style.color = "#d9534f";
        return;
    }
    
    received = amount * exchangeRate;

    const formattedReceived = received.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });

    resultDiv.textContent = `Recipient receives: ${formattedReceived} ${currencySymbols[toCountry]}`;
    resultDiv.style.color = "#003580";

    const transaction = {
      date: new Date().toLocaleString(),
      fromCountry: "Egypt",
      toCountry: toCountry.charAt(0).toUpperCase() + toCountry.slice(1),
      amount: amount,
      received: received,
      fromCurrency: "EGP",
      toCurrency: currencySymbols[toCountry]
    };
    
    transactionHistory.unshift(transaction);
    if (transactionHistory.length > 10) {
      transactionHistory.pop();
    }
    
  } catch (error) {
    resultDiv.textContent = "An error occurred during calculation. Please check your inputs.";
    resultDiv.style.color = "#d9534f";
    console.error("Calculation error:", error);
  }
}

// Open Google Form in new tab
function openTransferForm() {
  window.open(
    'https://docs.google.com/forms/d/e/1FAIpQLSd5EONg0TWXuERMa4cUYBKk2oImEP0oxcLWt-887pO0Nw7kgA/viewform',
    '_blank'
  );
}
