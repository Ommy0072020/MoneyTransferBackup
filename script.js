document.addEventListener('DOMContentLoaded', function () {
    const config = {
        exchangeRates: {
            egypt: {
                burundi: 137.04, rwanda: 25.93, kenya: 2.24,
                tanzania: 48, uganda: 66.60, drc: 51.85,
                togo: 10.56, saudi: 0.0784, belgium: 0.01488,
                france: 0.01488, netherlands: 0.01488,
                canada: 0.0241, usa: 0.01717
            },
            burundi: { egypt: 0.006538 },
            rwanda: { egypt: 0.0329 },
            kenya: { egypt: 0.3723 },
            tanzania: { egypt: 0.01855 },
            uganda: { egypt: 0.0136 },
            drc: { egypt: 0.017 },
            togo: { egypt: 0.085 },
            saudi: { egypt: 16.36 },
            belgium: { egypt: 51.00 },
            france: { egypt: 51.00 },
            netherlands: { egypt: 51.00 },
            canada: { egypt: 31.70 },
            usa: { egypt: 44.90 }
        },
        currencySymbols: {
            egypt: 'EGP', burundi: 'BIF', rwanda: 'RWF',
            kenya: 'KES', tanzania: 'TZS', uganda: 'UGX',
            drc: 'CDF', togo: 'XOF', saudi: 'SAR',
            belgium: 'EUR', france: 'EUR', netherlands: 'EUR',
            canada: 'CAD', usa: 'USD'
        },
        countryCodes: {
            egypt: 'eg', burundi: 'bi', rwanda: 'rw',
            kenya: 'ke', tanzania: 'tz', uganda: 'ug',
            drc: 'cd', togo: 'tg', saudi: 'sa',
            belgium: 'be', france: 'fr', netherlands: 'nl',
            canada: 'ca', usa: 'us'
        },
        countryFullNames: {
            bi: "Burundi",
            rw: "Rwanda",
            ke: "Kenya",
            tz: "Tanzania",
            ug: "Uganda",
            cd: "DR Congo",
            tg: "Togo",
            sa: "Saudi Arabia",
            be: "Belgium",
            fr: "France",
            nl: "Netherlands",
            ca: "Canada",
            us: "USA",
            eg: "Egypt"
        },
        adminPassword: "Kabura20@2025",
        translations: {
            en: {
                welcomeTitle: "Welcome To KMC",
                companyName: "Kabura Multiservice Company",
                welcomeMessage: "This is a Transfer Calculator",
                nextBtnText: "Next",
                adminLoginText: "Admin Login",
                backBtnTextCalc: "Back",
                fromCountryLabel: "From Country",
                toCountryLabel: "To Country",
                amountLabel: "Amount",
                calculateBtnText: "Calculate Transfer",
                requestBtnText: "Request Transfer",
                backBtnTextTransfer: "Back to Calculator",
                transferFormTitle: "Transfer Request Form",
                fullNameLabel: "First and Last Name:",
                phoneLabel: "Your Phone Number:",
                amountLabelTransfer: "Amount to Transfer:",
                directionLabel: "Transfer Direction:",
                egyptOutOption: "From Egypt to Outside",
                outEgyptOption: "From Outside to Egypt",
                cancelBtnText: "Cancel",
                nextBtnTextForm: "Next",
                collectionLabel: "Collection Point in Egypt:",
                destinationLabel: "Destination Country:",
                backBtnTextForm: "Back",
                submitBtnText: "Submit Request",
                whichCountryLabel: "Which Country?",
                methodLabel: "Method of Transfer:",
                cashOption: "Cash",
                mobileOption: "Mobile Money Transfer",
                bankOption: "Bank Transfer",
                backBtnTextForm2: "Back",
                submitBtnText2: "Submit Request",
                adminLoginTitle: "Admin Login",
                passwordLabel: "Password:",
                cancelBtnTextModal: "Cancel",
                loginBtnText: "Login",
                successTitle: "Success!",
                okBtnText: "OK"
            },
            fr: {
                welcomeTitle: "Bienvenue à KMC",
                companyName: "Kabura Multiservice Company",
                welcomeMessage: "Ceci est un calculateur de transfert",
                nextBtnText: "Suivant",
                adminLoginText: "Connexion Admin",
                backBtnTextCalc: "Retour",
                fromCountryLabel: "De Pays",
                toCountryLabel: "Vers Pays",
                amountLabel: "Montant",
                calculateBtnText: "Calculer le Transfert",
                requestBtnText: "Demande de Transfert",
                backBtnTextTransfer: "Retour au calculateur",
                transferFormTitle: "Formulaire de demande de transfert",
                fullNameLabel: "Prénom et nom:",
                phoneLabel: "Votre numéro de téléphone:",
                amountLabelTransfer: "Montant à transférer:",
                directionLabel: "Direction du transfert:",
                egyptOutOption: "D'Égypte vers l'extérieur",
                outEgyptOption: "De l'extérieur vers l'Égypte",
                cancelBtnText: "Annuler",
                nextBtnTextForm: "Suivant",
                collectionLabel: "Point de collecte en Égypte:",
                destinationLabel: "Pays de destination:",
                backBtnTextForm: "Retour",
                submitBtnText: "Soumettre la demande",
                whichCountryLabel: "Quel pays?",
                methodLabel: "Méthode de transfert:",
                cashOption: "Espèces",
                mobileOption: "Transfert d'argent mobile",
                bankOption: "Virement bancaire",
                backBtnTextForm2: "Retour",
                submitBtnText2: "Soumettre la demande",
                adminLoginTitle: "Connexion Admin",
                passwordLabel: "Mot de passe:",
                cancelBtnTextModal: "Annuler",
                loginBtnText: "Connexion",
                successTitle: "Succès!",
                okBtnText: "OK"
            },
            sw: {
                welcomeTitle: "Karibu KMC",
                companyName: "Kabura Multiservice Company",
                welcomeMessage: "Hii ni kikokotoo cha uhamisho",
                nextBtnText: "Inayofuata",
                adminLoginText: "Ingia ya Msimamizi",
                backBtnTextCalc: "Rudi",
                fromCountryLabel: "Kutoka Nchi",
                toCountryLabel: "Kwenda Nchi",
                amountLabel: "Kiasi",
                calculateBtnText: "Hesabu Uhamisho",
                requestBtnText: "Omba Uhamisho",
                backBtnTextTransfer: "Rudi kwa kikokotoo",
                transferFormTitle: "Fomu ya Ombi la Uhamisho",
                fullNameLabel: "Jina la kwanza na la mwisho:",
                phoneLabel: "Nambari yako ya simu:",
                amountLabelTransfer: "Kiasi cha kuhamisha:",
                directionLabel: "Mwelekeo wa uhamisho:",
                egyptOutOption: "Kutoka Misri kwenda nje",
                outEgyptOption: "Kutoka nje kwenda Misri",
                cancelBtnText: "Ghairi",
                nextBtnTextForm: "Inayofuata",
                collectionLabel: "Sehemu ya kukusanya huko Misri:",
                destinationLabel: "Nchi ya marudio:",
                backBtnTextForm: "Rudi",
                submitBtnText: "Wasilisha ombi",
                whichCountryLabel: "Nchi gani?",
                methodLabel: "Njia ya uhamisho:",
                cashOption: "Fedha taslimu",
                mobileOption: "Uhamisho wa pesa kwa simu",
                bankOption: "Uhamisho wa benki",
                backBtnTextForm2: "Rudi",
                submitBtnText2: "Wasilisha ombi",
                adminLoginTitle: "Ingia ya Msimamizi",
                passwordLabel: "Nenosiri:",
                cancelBtnTextModal: "Ghairi",
                loginBtnText: "Ingia",
                successTitle: "Mafanikio!",
                okBtnText: "Sawa"
            }
        }
    };

    const elements = {
        panels: {
            language: document.getElementById('languagePanel'),
            welcome: document.getElementById('welcomePanel'),
            calculator: document.getElementById('calculatorPanel'),
            transferPage: document.getElementById('transferPage')
        },
        calculator: {
            fromCountry: document.getElementById('fromCountry'),
            toCountry: document.getElementById('toCountry'),
            amount: document.getElementById('amount'),
            fromFlag: document.getElementById('fromFlag'),
            toFlag: document.getElementById('toFlag'),
            result: document.getElementById('result'),
            resultFromFlag: document.getElementById('resultFromFlag'),
            resultToFlag: document.getElementById('resultToFlag'),
            resultFromAmount: document.getElementById('resultFromAmount'),
            resultToAmount: document.getElementById('resultToAmount'),
            exchangeRate: document.getElementById('exchangeRate')
        },
        transferForm: {
            form: document.getElementById('transferForm'),
            fullName: document.getElementById('fullName'),
            phone: document.getElementById('phone'),
            transferAmount: document.getElementById('transferAmount')
        },
        textElements: {
            welcomeTitle: document.getElementById('welcomeTitle'),
            companyName: document.getElementById('companyName'),
            welcomeMessage: document.getElementById('welcomeMessage'),
            nextBtnText: document.getElementById('nextBtnText'),
            adminLoginText: document.getElementById('adminLoginText'),
            backBtnTextCalc: document.getElementById('backBtnTextCalc'),
            fromCountryLabel: document.getElementById('fromCountryLabel'),
            toCountryLabel: document.getElementById('toCountryLabel'),
            amountLabel: document.getElementById('amountLabel'),
            calculateBtnText: document.getElementById('calculateBtnText'),
            requestBtnText: document.getElementById('requestBtnText'),
            backBtnTextTransfer: document.getElementById('backBtnTextTransfer'),
            transferFormTitle: document.getElementById('transferFormTitle'),
            fullNameLabel: document.getElementById('fullNameLabel'),
            phoneLabel: document.getElementById('phoneLabel'),
            amountLabelTransfer: document.getElementById('amountLabelTransfer'),
            directionLabel: document.getElementById('directionLabel'),
            egyptOutOption: document.getElementById('egyptOutOption'),
            outEgyptOption: document.getElementById('outEgyptOption'),
            cancelBtnText: document.getElementById('cancelBtnText'),
            nextBtnTextForm: document.getElementById('nextBtnTextForm'),
            collectionLabel: document.getElementById('collectionLabel'),
            destinationLabel: document.getElementById('destinationLabel'),
            backBtnTextForm: document.getElementById('backBtnTextForm'),
            submitBtnText: document.getElementById('submitBtnText'),
            whichCountryLabel: document.getElementById('whichCountryLabel'),
            methodLabel: document.getElementById('methodLabel'),
            cashOption: document.getElementById('cashOption'),
            mobileOption: document.getElementById('mobileOption'),
            bankOption: document.getElementById('bankOption'),
            backBtnTextForm2: document.getElementById('backBtnTextForm2'),
            submitBtnText2: document.getElementById('submitBtnText2'),
            adminLoginTitle: document.getElementById('adminLoginTitle'),
            passwordLabel: document.getElementById('passwordLabel'),
            cancelBtnTextModal: document.getElementById('cancelBtnTextModal'),
            loginBtnText: document.getElementById('loginBtnText'),
            successTitle: document.getElementById('successTitle'),
            okBtnText: document.getElementById('okBtnText')
        }
    };

    const state = {
        currentLanguage: 'en',
        transferRequests: [],
        isAdmin: false
    };

    function init() {
        showPanel('language');
        updateFlag('from');
        updateFlag('to');
        setupEventListeners();
        populateCountries();
    }

    function showPanel(panelId) {
        Object.values(elements.panels).forEach(p => p.classList.remove('active'));
        if (elements.panels[panelId]) elements.panels[panelId].classList.add('active');
    }

    function selectLanguage(lang) {
        state.currentLanguage = lang;
        document.querySelectorAll('.lang-code').forEach(el => {
            el.textContent = lang.toUpperCase();
        });
        updateTextElements();
        showPanel('welcome');
    }

    function updateTextElements() {
        const translations = config.translations[state.currentLanguage];
        for (const [key, element] of Object.entries(elements.textElements)) {
            if (element && translations[key]) {
                element.textContent = translations[key];
            }
        }
    }

    function updateFlag(direction) {
        const country = elements.calculator[`${direction}Country`].value;
        const flag = elements.calculator[`${direction}Flag`];
        const code = config.countryCodes[country];
        if (code && flag) {
            flag.style.backgroundImage = `url(https://flagcdn.com/w40/${code}.png)`;
        }
    }

    function swapCountries() {
        const from = elements.calculator.fromCountry.value;
        const to = elements.calculator.toCountry.value;
        elements.calculator.fromCountry.value = to;
        elements.calculator.toCountry.value = from;
        updateFlag('from');
        updateFlag('to');
    }

    function calculateTransfer() {
        const amount = parseFloat(elements.calculator.amount.value);
        const from = elements.calculator.fromCountry.value;
        const to = elements.calculator.toCountry.value;

        if (isNaN(amount) || amount <= 0) {
            alert(state.currentLanguage === 'en' ? "Please enter a valid amount" : 
                  state.currentLanguage === 'fr' ? "Veuillez entrer un montant valide" : 
                  "Tafadhali ingiza kiasi halali");
            return;
        }

        let rate = 0;
        if (from === 'egypt') rate = config.exchangeRates.egypt[to];
        else if (to === 'egypt') rate = config.exchangeRates[from]?.egypt;
        else {
            alert(state.currentLanguage === 'en' ? "Transfers must be to or from Egypt." : 
                  state.currentLanguage === 'fr' ? "Les transferts doivent être vers ou depuis l'Égypte." : 
                  "Uhamisho lazima uwe kwenda au kutoka Misri.");
            return;
        }

        if (!rate) {
            alert(state.currentLanguage === 'en' ? "No rate found for this direction." : 
                  state.currentLanguage === 'fr' ? "Aucun taux trouvé pour cette direction." : 
                  "Hakuna kiwango kilichopatikana kwa mwelekeo huu.");
            return;
        }

        const result = amount * rate;
        const fromCode = config.countryCodes[from];
        const toCode = config.countryCodes[to];

        elements.calculator.resultFromFlag.style.backgroundImage = `url(https://flagcdn.com/w40/${fromCode}.png)`;
        elements.calculator.resultToFlag.style.backgroundImage = `url(https://flagcdn.com/w40/${toCode}.png)`;
        elements.calculator.resultFromAmount.textContent = `${amount.toFixed(2)} ${config.currencySymbols[from]}`;
        elements.calculator.resultToAmount.textContent = `${result.toFixed(2)} ${config.currencySymbols[to]}`;
        
        const rateText = state.currentLanguage === 'en' ? `Exchange rate: 1 ${config.currencySymbols[from]} = ${rate.toFixed(4)} ${config.currencySymbols[to]}` :
                         state.currentLanguage === 'fr' ? `Taux de change: 1 ${config.currencySymbols[from]} = ${rate.toFixed(4)} ${config.currencySymbols[to]}` :
                         `Kiwango cha ubadilishaji: 1 ${config.currencySymbols[from]} = ${rate.toFixed(4)} ${config.currencySymbols[to]}`;
        
        elements.calculator.exchangeRate.textContent = rateText;
        elements.calculator.result.style.display = 'block';
    }

    function populateCountries() {
        const destinationCountries = document.getElementById('destinationCountries');
        const sourceCountries = document.getElementById('sourceCountries');
        
        // Clear existing options
        destinationCountries.innerHTML = '';
        sourceCountries.innerHTML = '';
        
        // Add all countries except Egypt as destinations
        Object.entries(config.countryCodes).forEach(([key, code]) => {
            if (key !== 'egypt') {
                const name = config.countryFullNames[code] || key;
                const destBtn = document.createElement('button');
                destBtn.type = 'button';
                destBtn.className = 'option-btn';
                destBtn.innerHTML = `<span>${name}</span>`;
                destBtn.onclick = function() { selectCountry('destination', key, name); };
                destinationCountries.appendChild(destBtn);
            }
        });
        
        // Add all countries except Egypt as sources
        Object.entries(config.countryCodes).forEach(([key, code]) => {
            if (key !== 'egypt') {
                const name = config.countryFullNames[code] || key;
                const sourceBtn = document.createElement('button');
                sourceBtn.type = 'button';
                sourceBtn.className = 'option-btn';
                sourceBtn.innerHTML = `<span>${name}</span>`;
                sourceBtn.onclick = function() { 
                    selectCountry('source', key, name);
                    if (key === 'burundi') {
                        document.getElementById('burundiOptions').style.display = 'block';
                    } else {
                        document.getElementById('burundiOptions').style.display = 'none';
                    }
                };
                sourceCountries.appendChild(sourceBtn);
            }
        });
    }

    function nextFormStep() {
        const step1 = document.getElementById('formStep1');
        const transferDirection = document.getElementById('transferDirection').value;
        
        if (!transferDirection) {
            alert(state.currentLanguage === 'en' ? 'Please select transfer direction' : 
                  state.currentLanguage === 'fr' ? 'Veuillez sélectionner la direction du transfert' : 
                  'Tafadhali chagua mwelekeo wa uhamisho');
            return;
        }
        
        step1.classList.remove('active');
        document.getElementById(`formStep2-${transferDirection}`).classList.add('active');
    }

    function prevFormStep() {
        const transferDirection = document.getElementById('transferDirection').value;
        document.getElementById(`formStep2-${transferDirection}`).classList.remove('active');
        document.getElementById('formStep1').classList.add('active');
    }

    function selectTransferDirection(direction) {
        document.getElementById('transferDirection').value = direction;
        
        // Update button styles
        const buttons = document.querySelectorAll('.form-step#formStep1 .option-btn');
        buttons.forEach(btn => {
            btn.classList.remove('selected');
            if (btn.textContent.includes(direction === 'egypt-out' ? 
                (state.currentLanguage === 'en' ? 'From Egypt' : 
                 state.currentLanguage === 'fr' ? 'D\'Égypte' : 'Kutoka Misri') : 
                (state.currentLanguage === 'en' ? 'From Outside' : 
                 state.currentLanguage === 'fr' ? 'De l\'extérieur' : 'Kutoka nje'))) {
                btn.classList.add('selected');
            }
        });
    }

    function selectLocation(location) {
        document.getElementById('egyptLocation').value = location;
        
        // Update button styles
        const buttons = document.querySelectorAll('#formStep2-egypt-out .option-btn');
        buttons.forEach(btn => {
            btn.classList.remove('selected');
            if (btn.textContent === location) {
                btn.classList.add('selected');
            }
        });
    }

    function selectCountry(type, key, name) {
        const elementId = type === 'destination' ? 'destinationCountry' : 'sourceCountry';
        document.getElementById(elementId).value = key;
        
        // Update button styles
        const containerId = type === 'destination' ? 'destinationCountries' : 'sourceCountries';
        const buttons = document.querySelectorAll(`#${containerId} .option-btn`);
        buttons.forEach(btn => {
            btn.classList.remove('selected');
            if (btn.textContent === name) {
                btn.classList.add('selected');
            }
        });
    }

    function selectTransferMethod(method) {
        document.getElementById('transferMethod').value = method;
        
        // Update button styles
        const buttons = document.querySelectorAll('#burundiOptions .option-btn');
        buttons.forEach(btn => {
            btn.classList.remove('selected');
            if (btn.textContent.toLowerCase().includes(method)) {
                btn.classList.add('selected');
            }
        });
    }

    function openTransferForm() {
        if (!elements.calculator.amount.value || parseFloat(elements.calculator.amount.value) <= 0) {
            alert(state.currentLanguage === 'en' ? "Please calculate a transfer amount first" : 
                  state.currentLanguage === 'fr' ? "Veuillez d'abord calculer un montant de transfert" : 
                  "Tafadhali hesabu kiasi cha uhamisho kwanza");
            return;
        }

        elements.transferForm.transferAmount.value = elements.calculator.amount.value;
        
        // Reset form steps
        document.querySelectorAll('.form-step').forEach(step => step.classList.remove('active'));
        document.getElementById('formStep1').classList.add('active');
        
        // Reset any selections
        document.getElementById('transferDirection').value = '';
        document.getElementById('egyptLocation').value = '';
        document.getElementById('destinationCountry').value = '';
        document.getElementById('sourceCountry').value = '';
        document.getElementById('transferMethod').value = '';
        
        // Reset button selections
        document.querySelectorAll('.option-btn.selected').forEach(btn => {
            btn.classList.remove('selected');
        });
        
        // Hide Burundi options if shown
        document.getElementById('burundiOptions').style.display = 'none';
        
        showPanel('transferPage');
    }

    function handleTransferSubmit(e) {
        e.preventDefault();
        
        // Get form data
        const transferData = {
            name: elements.transferForm.fullName.value,
            phone: elements.transferForm.phone.value,
            amount: elements.transferForm.transferAmount.value,
            direction: document.getElementById('transferDirection').value,
            egyptLocation: document.getElementById('egyptLocation').value,
            destinationCountry: document.getElementById('destinationCountry').value,
            sourceCountry: document.getElementById('sourceCountry').value,
            transferMethod: document.getElementById('transferMethod').value,
            timestamp: new Date().toISOString()
        };
        
        state.transferRequests.push(transferData);
        
        const successMessage = state.currentLanguage === 'en' ? "Transfer request submitted successfully!" :
                              state.currentLanguage === 'fr' ? "Demande de transfert soumise avec succès!" :
                              "Ombi la uhamisho limewasilishwa kikamilifu!";
        
        document.getElementById('successMessage').textContent = successMessage;
        document.getElementById('successModal').style.display = 'flex';
        
        // Reset form
        e.target.reset();
        document.getElementById('formStep1').classList.add('active');
        const transferDirection = transferData.direction;
        if (document.getElementById(`formStep2-${transferDirection}`)) {
            document.getElementById(`formStep2-${transferDirection}`).classList.remove('active');
        }
        
        // Reset selected buttons
        document.querySelectorAll('.option-btn.selected').forEach(btn => {
            btn.classList.remove('selected');
        });
        
        // Hide Burundi options if shown
        document.getElementById('burundiOptions').style.display = 'none';
    }

    function showAdminLogin() {
        document.getElementById('adminLoginModal').style.display = 'flex';
    }

    function adminLogin() {
        const password = document.getElementById('adminPassword').value;
        if (password === config.adminPassword) {
            state.isAdmin = true;
            document.getElementById('adminLoginModal').style.display = 'none';
            alert(state.currentLanguage === 'en' ? "Admin login successful" :
                  state.currentLanguage === 'fr' ? "Connexion admin réussie" :
                  "Msimamizi ameingia kikamilifu");
        } else {
            alert(state.currentLanguage === 'en' ? "Incorrect password" :
                  state.currentLanguage === 'fr' ? "Mot de passe incorrect" :
                  "Nenosiri si sahihi");
        }
    }

    function setupEventListeners() {
        elements.calculator.fromCountry.addEventListener('change', () => updateFlag('from'));
        elements.calculator.toCountry.addEventListener('change', () => updateFlag('to'));
        elements.transferForm.form.addEventListener('submit', handleTransferSubmit);
    }

    // Expose functions globally
    window.selectLanguage = selectLanguage;
    window.showLanguagePanel = () => showPanel('language');
    window.showWelcomePanel = () => showPanel('welcome');
    window.showCalculatorPanel = () => showPanel('calculator');
    window.calculateTransfer = calculateTransfer;
    window.swapCountries = swapCountries;
    window.updateFlag = updateFlag;
    window.openTransferForm = openTransferForm;
    window.showAdminLogin = showAdminLogin;
    window.adminLogin = adminLogin;
    window.nextFormStep = nextFormStep;
    window.prevFormStep = prevFormStep;
    window.selectTransferDirection = selectTransferDirection;
    window.selectLocation = selectLocation;
    window.selectCountry = selectCountry;
    window.selectTransferMethod = selectTransferMethod;

    init();
});
