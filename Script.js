const defaultSettings = {
  // Exchange rates
  egpToBif: 0,
  egpToTzs: 0,
  egpToRwf: 0,
  egpToUgx: 0,
  egpToCdf: 0,
  egpToKes: 0,
  egpToCad: 0,
  egpToUsd: 0,
  egpToEur: 0,
  egpToXof: 0, // Added XOF rate for Togo
  // Fees
  feeBurundi: 0,
  feeTanzania: 0
};

// Currency symbols map
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
  togo: 'XOF' // Added Togo with XOF currency
};

// ... rest of the JavaScript code remains the same ...

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
    egpToXof: parseFloat(document.getElementById("egpToXof").value), // Added
    feeBurundi: parseFloat(document.getElementById("feeBurundi").value),
    feeTanzania: parseFloat(document.getElementById("feeTanzania").value)
  };
  // ... rest of the function remains the same ...
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
  document.getElementById("egpToXof").value = saved.egpToXof || defaultSettings.egpToXof; // Added
  document.getElementById("feeBurundi").value = saved.feeBurundi || defaultSettings.feeBurundi;
  document.getElementById("feeTanzania").value = saved.feeTanzania || defaultSettings.feeTanzania;
}

// ... rest of the JavaScript code remains the same ...