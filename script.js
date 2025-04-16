/**
 * Money Transfer Calculator Application
 * 
 * Features:
 * - Multi-language support (English, French, Swahili)
 * - Role-based authentication (Customer, Admin)
 * - Currency conversion calculator
 * - Responsive design
 */

// Application Configuration
const AppConfig = {
    supportedLanguages: ['en', 'fr', 'sw'],
    defaultLanguage: 'en',
    exchangeRates: {
        egypt: {
            burundi: 137.04,    // EGP to BIF
            rwanda: 25.93,      // EGP to RWF
            kenya: 2.3,         // EGP to KES
            tanzania: 48,       // EGP to TZS
            uganda: 66.60,      // EGP to UGX
            drc: 51.85,         // EGP to CDF
            togo: 3.93,         // EGP to XOF
            belgium: 0.043,     // EGP to EUR
            france: 0.043,      // EGP to EUR
            netherlands: 0.043, // EGP to EUR
            canada: 0.0116,     // EGP to CAD
            usa: 0.032          // EGP to USD
        },
        burundi: { egypt: 0.0073 },
        rwanda: { egypt: 0.0386 },
        kenya: { egypt: 0.4348 },
        tanzania: { egypt: 0.0208 },
        uganda: { egypt: 0.0150 },
        drc: { egypt: 0.0193 },
        togo: { egypt: 0.254 },
        belgium: { egypt: 23.26 },
        france: { egypt: 23.26 },
        netherlands: { egypt: 23.26 },
        canada: { egypt: 86.21 },
        usa: { egypt: 31.25 }
    },
    currencySymbols: {
        egypt: 'EGP',
        burundi: 'BIF',
        rwanda: 'RWF',
        kenya: 'KES',
        tanzania: 'TZS',
        uganda: 'UGX',
        drc: 'CDF',
        togo: 'XOF',
        belgium: 'EUR',
        france: 'EUR',
        netherlands: 'EUR',
        canada: 'CAD',
        usa: 'USD'
    },
    credentials: {
        admin: "Kabura@2025",
        customer: "KMC@2025"
    }
};

// Internationalization (i18n)
const i18n = {
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
        placeholders: {
            password: 'Enter password',
            username: 'Enter username',
            amount: 'Enter amount'
        }
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
        placeholders: {
            password: 'Entrez le mot de passe',
            username: 'Entrez le nom d\'utilisateur',
            amount: 'Entrez le montant'
        }
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
        placeholders: {
            password: 'Weka nenosiri',
            username: 'Weka jina la mtumiaji',
            amount: 'Weka kiasi'
        }
    }
};

// Application State
const AppState = {
    currentUser: null,
    currentRole: null,
    currentLanguage: AppConfig.defaultLanguage,
    
    initialize: function() {
        this.setupEventListeners();
        this.showPanel('languagePanel');
    },
    
    setupEventListeners: function() {
        document.getElementById('fromCountry').addEventListener('change', this.updateCountries.bind(this));
        document.getElementById('toCountry').addEventListener('change', this.updateCountries.bind(this));
    },
    
    showPanel: function(panelId) {
        document.querySelectorAll('.panel').forEach(panel => {
            panel.classList.remove('active');
        });
        document.getElementById(panelId).classList.add('active');
    },
    
    setLanguage: function(language) {
        if (AppConfig.supportedLanguages.includes(language)) {
            this.currentLanguage = language;
            this.translatePage();
        }
    },
    
    translatePage: function() {
        const translations = i18n[this.currentLanguage];
        
        // Update text content
        Object.keys(translations).forEach(key => {
            if (key !== 'placeholders') {
                const element = document.getElementById(key);
                if (element) element.textContent = translations[key];
            }
        });
        
        // Update placeholders
        Object.keys(translations.placeholders).forEach(key => {
            const element = document.getElementById(key);
            if (element) element.placeholder = translations.placeholders[key];
        });
    },
    
    authenticate: function(role, password) {
        return AppConfig.credentials[role] === password;
    },
    
    updateCountries: function() {
        const fromCountry = document.getElementById("fromCountry").value;
        const toCountry = document.getElementById("toCountry").value;
        
        if (fromCountry !== "egypt" && toCountry !== "egypt") {
            document.getElementById("toCountry").value = "egypt";
        }
    },
    
    calculateTransfer: function() {
        const amount = parseFloat(document.getElementById("amount").value);
        const fromCountry = document.getElementById("fromCountry").value;
        const toCountry = document.getElementById("toCountry").value;
        const resultDiv = document.getElementById("result");
        
        if (isNaN(amount) || amount <= 0) {
            this.showResult(i18n[this.currentLanguage].validAmount, true);
            return;
        }
        
        let rate, targetCurrency;
        
        if (fromCountry === "egypt") {
            // Transfer from Egypt to another country
            rate = AppConfig.exchangeRates.egypt[toCountry];
            targetCurrency = AppConfig.currencySymbols[toCountry];
        } else if (toCountry === "egypt") {
            // Transfer from another country to Egypt
            rate = AppConfig.exchangeRates[fromCountry].egypt;
            targetCurrency = AppConfig.currencySymbols.egypt;
        } else {
            this.showResult("Only transfers to/from Egypt are supported", true);
            return;
        }
        
        const received = amount * rate;
        const formattedReceived = received.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
        
        const message = `${i18n[this.currentLanguage].recipientReceives} ${formattedReceived} ${targetCurrency}`;
        this.showResult(message, false);
    },
    
    showResult: function(message, isError) {
        const resultDiv = document.getElementById("result");
        resultDiv.textContent = message;
        resultDiv.style.color = isError ? 'var(--danger-color)' : 'var(--primary-color)';
    },
    
    swapCountries: function() {
        const fromCountry = document.getElementById("fromCountry").value;
        const toCountry = document.getElementById("toCountry").value;
        
        if (fromCountry === "egypt" || toCountry === "egypt") {
            document.getElementById("fromCountry").value = toCountry;
            document.getElementById("toCountry").value = fromCountry;
            this.updateCountries();
        }
    }
};

// Public Interface Functions
function selectLanguage(language) {
    AppState.setLanguage(language);
    AppState.showPanel('rolePanel');
}

function showLanguagePanel() {
    AppState.showPanel('languagePanel');
}

function login() {
    const role = document.getElementById("role").value;
    const password = document.getElementById("password").value;
    const loginError = document.getElementById("loginError");
    
    if (AppState.authenticate(role, password)) {
        AppState.currentRole = role;
        localStorage.setItem("currentRole", role);
        AppState.showPanel('usernamePanel');
        loginError.textContent = "";
    } else {
        loginError.textContent = i18n[AppState.currentLanguage].invalidPassword;
    }
}

function submitUsername() {
    const username = document.getElementById("usernameInput").value.trim();
    const usernameError = document.getElementById("usernameError");
    
    if (username === "") {
        usernameError.textContent = i18n[AppState.currentLanguage].enterUsername;
        return;
    }
    
    AppState.currentUser = username;
    AppState.showPanel('calculatorPanel');
    
    // Show appropriate request button based on role
    if (AppState.currentRole === "admin") {
        document.getElementById("customerRequestForm").style.display = "none";
        document.getElementById("adminRequestForm").style.display = "block";
    } else {
        document.getElementById("customerRequestForm").style.display = "block";
        document.getElementById("adminRequestForm").style.display = "none";
    }
}

function logout() {
    AppState.currentUser = null;
    AppState.currentRole = null;
    localStorage.removeItem("currentRole");
    document.getElementById("password").value = '';
    document.getElementById("usernameInput").value = '';
    AppState.showPanel('rolePanel');
}

function calculateTransfer() {
    AppState.calculateTransfer();
}

function swapCountries() {
    AppState.swapCountries();
}

function openTransferForm() {
    window.open(
        'https://docs.google.com/forms/d/e/1FAIpQLSd5EONg0TWXuERMa4cUYBKk2oImEP0oxcLWt-887pO0Nw7kgA/viewform',
        '_blank'
    );
}

function viewRequests() {
    window.open(
        'https://docs.google.com/spreadsheets/d/e/2PACX-1vR6YGDoO-g89zJhebQOk28ZAhH_S00YyEcHQTEZeh3eQXT97RToLZLFhI0L3b2PAiUn48c4OB9zsuzy/pubhtml?widget=true&headers=false',
        '_blank'
    );
}

// Initialize the application when the page loads
window.onload = function() {
    AppState.initialize();
};