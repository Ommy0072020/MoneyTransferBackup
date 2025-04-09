<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Money Transfer Calculator</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <!-- Panel 1: Welcome Page -->
  <div class="panel" id="welcomePanel">
    <div class="logo-container">
      <img src="Logo.png" alt="Money Transfer Calculator Logo" class="logo">
    </div>
    <h1>Welcome to Money Transfer Calculator</h1>
    <p class="welcome-text">Calculate international money transfers with ease</p>
    <div class="welcome-buttons">
      <button class="welcome-btn" id="customerWelcomeBtn">I'm a Customer</button>
      <button class="welcome-btn" id="adminWelcomeBtn">I'm an Admin</button>
    </div>
  </div>

  <!-- Panel 2: Name Input -->
  <div class="panel" id="namePanel" style="display:none">
    <div class="logo-container">
      <img src="Logo.png" alt="Money Transfer Calculator Logo" class="logo">
    </div>
    <h2>Tell Us About Yourself</h2>
    <div class="form-group">
      <label for="firstName">First Name</label>
      <input type="text" id="firstName" placeholder="Enter your first name" aria-required="true">
    </div>
    <div class="form-group">
      <label for="lastName">Last Name</label>
      <input type="text" id="lastName" placeholder="Enter your last name" aria-required="true">
    </div>
    <button id="continueBtn">Continue</button>
    <div id="nameMessage" class="message" role="alert" aria-live="assertive"></div>
  </div>

  <!-- Panel 3: Password -->
  <div class="panel" id="passwordPanel" style="display:none">
    <div class="logo-container">
      <img src="Logo.png" alt="Money Transfer Calculator Logo" class="logo">
    </div>
    <h2>Secure Access</h2>
    <div class="form-group">
      <label for="password">Password</label>
      <input type="password" id="password" placeholder="Enter password" aria-required="true">
    </div>
    <button id="loginBtn">
      <span id="loginBtnText">Login</span>
    </button>
    <div id="passwordMessage" class="message" role="alert" aria-live="assertive"></div>
  </div>

  <!-- Panel 4: Calculator -->
  <div class="panel" id="calculatorPanel" style="display:none">
    <div class="logo-container">
      <img src="Logo.png" alt="Money Transfer Calculator Logo" class="logo">
    </div>
    <div class="header">
      <h2>Money Transfer Calculator</h2>
      <button class="logout-btn" id="logoutBtn">Logout</button>
    </div>
    
    <div class="settings" id="settingsPanel">
      <h3>Exchange Rates (1 EGP to other currencies)</h3>
      <div class="settings-grid" id="exchangeRatesContainer"></div>
      
      <h3>Transfer Fees</h3>
      <div class="form-group">
        <h4>Fee Calculation Parameters</h4>
        <label for="baseAmount">Fee of <input type="number" step="0.01" id="baseFee" value="200"> EGP for amount of</label>
        <input type="number" step="0.01" id="baseAmount" value="5200">
        <span>EGP</span>
      </div>
      
      <div class="form-group">
        <button id="saveSettingsBtn">Save Settings</button>
        <button id="resetSettingsBtn" class="warning">Reset to Default</button>
      </div>
      <div id="settingsMessage" class="message" role="alert" aria-live="assertive"></div>
    </div>

    <div class="form-group">
      <label for="fromCountry">From Country</label>
      <select id="fromCountry" aria-required="true">
        <option value="EGP">🇪🇬 Egypt (EGP)</option>
      </select>
    </div>

    <div class="form-group">
      <label for="amount">Amount (EGP)</label>
      <input type="number" step="0.01" id="amount" placeholder="Enter amount in EGP" aria-required="true">
    </div>

    <div class="form-group">
      <label for="toCountry">To Country</label>
      <select id="toCountry" aria-required="true">
        <option value="KES">🇰🇪 Kenya (KES)</option>
        <option value="UGX">🇺🇬 Uganda (UGX)</option>
        <option value="TZS">🇹🇿 Tanzania (TZS)</option>
        <option value="RWF">🇷🇼 Rwanda (RWF)</option>
        <option value="BIF">🇧🇮 Burundi (BIF)</option>
        <option value="CDF">🇨🇩 DR Congo (CDF)</option>
      </select>
    </div>

    <div class="form-group">
      <button id="settingsButton">⚙ Settings</button>
      <button id="calculateBtn">
        <span id="calculateBtnText">Calculate Transfer</span>
      </button>
    </div>
    
    <div class="result" id="result" aria-live="polite"></div>
    
    <div class="history" id="historyPanel">
      <h3>Transaction History</h3>
      <div id="historyList"></div>
      <button class="clear-history" id="clearHistoryBtn">Clear History</button>
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>