// Language translations
const translations = {
  en: {
    loginTitle: "Login",
    roleLabel: "Select Role",
    passwordLabel: "Password",
    loginBtn: "Login",
    usernameTitle: "Enter Username",
    continueBtn: "Continue",
    calculatorTitle: "Money Transfer Calculator",
    logoutBtn: "Logout",
    fromCountryLabel: "From Country",
    toCountryLabel: "To Country",
    amountLabel: "Amount",
    calculateBtn: "Calculate Transfer",
    requestTitle: "Need to make a transfer?",
    requestBtn: "Request Transfer",
    viewRequestsTitle: "View Submitted Requests",
    viewRequestsBtn: "View Requests",
    invalidPassword: "Invalid password. Please try again.",
    enterUsername: "Please enter a username.",
    validAmount: "Please enter a valid positive amount.",
    recipientReceives: "Recipient receives:",
    PasswordIndicator: "Write KMC@2025 as Password",
  },
  fr: {
    loginTitle: "Connexion",
    roleLabel: "Sélectionner un rôle",
    passwordLabel: "Mot de passe",
    loginBtn: "Se connecter",
    usernameTitle: "Entrez votre nom d'utilisateur",
    continueBtn: "Continuer",
    calculatorTitle: "Calculateur de transfert d'argent",
    logoutBtn: "Déconnexion",
    fromCountryLabel: "Pays d'origine",
    toCountryLabel: "Pays de destination",
    amountLabel: "Montant",
    calculateBtn: "Calculer le transfert",
    requestTitle: "Besoin d'effectuer un transfert?",
    requestBtn: "Demander un transfert",
    viewRequestsTitle: "Voir les demandes soumises",
    viewRequestsBtn: "Voir les demandes",
    invalidPassword: "Mot de passe incorrect. Veuillez réessayer.",
    enterUsername: "Veuillez entrer un nom d'utilisateur.",
    validAmount: "Veuillez entrer un montant positif valide.",
    recipientReceives: "Le bénéficiaire reçoit:",
    PasswordIndicator:"Ecrivez KMC@2025 comme mot de passe",
  },
  sw: {
    loginTitle: "Ingia",
    roleLabel: "Chagua Jukumu",
    passwordLabel: "Nenosiri",
    loginBtn: "Ingia",
    usernameTitle: "Weka Jina la Mtumiaji",
    continueBtn: "Endelea",
    calculatorTitle: "Kikokotoo cha Hamisha Pesa",
    logoutBtn: "Ondoka",
    fromCountryLabel: "Kutoka Nchi",
    toCountryLabel: "Kwenda Nchi",
    amountLabel: "Kiasi",
    calculateBtn: "Kokotoa Uhamisho",
    requestTitle: "Unahitaji kufanya uhamisho wa pesa?",
    requestBtn: "Omba Uhamisho",
    viewRequestsTitle: "Tazama Maombi Yaliyowasilishwa",
    viewRequestsBtn: "Tazama Maombi",
    invalidPassword: "Nenosiri batili. Tafadhali jaribu tena.",
    enterUsername: "Tafadhali weka jina la mtumiaji.",
    validAmount: "Tafadhali weka kiasi halali cha chanya.",
    recipientReceives: "Mpokeaji atapokea:",
    PasswordIndicator:"Andika KMC@2025 kama nenosiri"
  }
};

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
let currentLanguage = 'en';

// Initialize the application
window.onload = function() {
  document.getElementById('languagePanel').style.display = 'block';
  document.getElementById('rolePanel').style.display = 'none';
  document.getElementById('usernamePanel').style.display = 'none';
  document.getElementById('calculatorPanel').style.display = 'none';
  
  // Set up event listeners for country changes
  document.getElementById('fromCountry').addEventListener('change', updateCountries);
  document.getElementById('toCountry').addEventListener('change', updateCountries);
};

function selectLanguage(lang) {
  currentLanguage = lang;
  translatePage();
  showPanel('rolePanel');
}

function showLanguagePanel() {
  document.getElementById('languagePanel').style.display = 'block';
  document.getElementById('rolePanel').style.display = 'none';
  document.getElementById('usernamePanel').style.display = 'none';
  document.getElementById('calculatorPanel').style.display = 'none';
}

function translatePage() {
  const trans = translations[currentLanguage];
  document.getElementById('loginTitle').textContent = trans.loginTitle;
  document.getElementById('roleLabel').textContent = trans.roleLabel;
  document.getElementById('passwordLabel').textContent = trans.passwordLabel;
  document.getElementById('loginBtn').textContent = trans.loginBtn;
  document.getElementById('usernameTitle').textContent = trans.usernameTitle;
  document.getElementById('continueBtn').textContent = trans.continueBtn;
  document.getElementById('calculatorTitle').textContent = trans.calculatorTitle;
  document.getElementById('logoutBtn').textContent = trans.logoutBtn;
  document.getElementById('fromCountryLabel').textContent = trans.fromCountryLabel;
  document.getElementById('toCountryLabel').textContent = trans.toCountryLabel;
  document.getElementById('amountLabel').textContent = trans.amountLabel;
  document.getElementById('calculateBtn').textContent = trans.calculateBtn;
  document.getElementById('requestTitle').textContent = trans.requestTitle;
  document.getElementById('requestBtn').textContent = trans.requestBtn;
  document.getElementById('viewRequestsTitle').textContent = trans.viewRequestsTitle;
  document.getElementById('viewRequestsBtn').textContent = trans.viewRequestsBtn;

  
  // Update placeholders
  const placeholderTexts = {
    en: {
      password: 'Enter password',
      username: 'Enter username',
      amount: 'Enter amount'
    },
    fr: {
      password: 'Entrez le mot de passe',
      username: 'Entrez le nom d\'utilisateur',
      amount: 'Entrez le montant'
    },
    sw: {
      password: 'Weka nenosiri',
      username: 'Weka jina la mtumiaji',
      amount: 'Weka kiasi'
    }
  };
  
  document.getElementById('password').placeholder = placeholderTexts[currentLanguage].password;
  document.getElementById('usernameInput').placeholder = placeholderTexts[currentLanguage].username;
  document.getElementById('amount').placeholder = placeholderTexts[currentLanguage].amount;
}

function showPanel(panelId) {
  document.getElementById('languagePanel').style.display = 'none';
  document.getElementById('rolePanel').style.display = 'none';
  document.getElementById('usernamePanel').style.display = 'none';
  document.getElementById('calculatorPanel').style.display = 'none';
  document.getElementById(panelId).style.display = 'block';
    document.getElementById('PasswordIndicator').textContent =.display;
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
    loginError.textContent = translations[currentLanguage].invalidPassword;
  }
}

function submitUsername() {
  const username = document.getElementById("usernameInput").value.trim();
  const usernameError = document.getElementById("usernameError");
  
  if (username === "") {
    usernameError.textContent = translations[currentLanguage].enterUsername;
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
    resultDiv.textContent = translations[currentLanguage].validAmount;
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

  resultDiv.textContent = `${translations[currentLanguage].recipientReceives} ${formattedReceived} ${targetCurrency}`;
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
