// Legal page JavaScript functionality
document.addEventListener('DOMContentLoaded', function() {
    // Language translations
    const translations = {
        en: {
            // Navigation - same as index.html
            nav: {
                home: "Home",
                about: "About",
                ecosystem: "Ecosystem",
                network: "Network",
                contact: "Contact"
            },

            // Legal page content
            'legal-title': 'Legal Information',
            
            // Introduction
            'legal-intro-text': 'This page contains consolidated legal information governing the use of skynexg.com and related digital channels within the Skynex Global ecosystem.',
            'legal-intro-accept': 'By using this website, you agree to the site policies.',
            
            // Identity and Data Controller
            'legal-identity-title': '1. Identity and Data Controller',
            'legal-identity-text': 'Skynex Global is a strategic ecosystem integrating education, media and technology through protected intellectual frameworks.',
            'legal-identity-controller': 'Data Controller:',
            
            // Privacy Policy
            'privacy-title': '2. Privacy Policy (GDPR)',
            'privacy-collection-title': '2.1 Data we collect',
            'privacy-collection-text': 'We may collect: information voluntarily provided by users (name, email, message content); technical data (IP address, browser and device information); data collected through cookies and basic analytics tools.',
            'privacy-collection-note': 'We do not knowingly collect sensitive personal data or data related to minors without appropriate consent.',
            'privacy-use-title': '2.2 Purpose of processing',
            'privacy-use-text': 'Personal data is processed solely for: communication and responding to inquiries; website security and stability; improvement of website functionality and content; basic statistical analysis.',
            'privacy-legal-basis-title': '2.3 Legal basis',
            'privacy-legal-basis-text': 'Processing is conducted in accordance with the GDPR based on: user consent; legitimate interest related to website operation and development; compliance with legal obligations where applicable.',
            'privacy-retention-title': '2.4 Data retention and sharing',
            'privacy-retention-text': 'Data is retained only for as long as necessary and may be shared with trusted service providers strictly for operational purposes, under confidentiality obligations.',
            'privacy-no-sale-text': 'Personal data is not sold or used for marketing purposes.',
            'privacy-rights-title': '2.5 User rights',
            'privacy-rights-text': 'Users have the right to access, rectify, erase, restrict or object to processing, and to withdraw consent at any time by contacting info@skynexg.com.',
            
            // Cookie Policy
            'cookie-title': '3. Cookie Policy',
            'cookie-text': 'This website uses cookies for essential functionality and analytics.',
            'cookie-consent-text': 'Non-essential cookies are used only with user consent via a cookie consent mechanism. Users may manage or disable cookies through their browser settings.',
            
            // Terms of Use
            'terms-title': '4. Terms of Use',
            'terms-text': 'By using this website, you agree that: content is for informational and non-commercial use only; content may not be copied, modified or misused; Skynex Global is not liable for third-party content or external links.',
            
            // Media Policy
            'media-policy-title': '5. Media and Communication Policy',
            'media-policy-text': 'Skynex Global does not participate in promotional or sensationalist media formats, nor in commercial content that compromises editorial independence, credibility or system integrity.',
            'media-policy-sponsored-text': 'Sponsored or supported initiatives are permitted only with full transparency and without influence on content or values.',
            
            // Intellectual Property
            'ip-title': '6. Intellectual Property',
            'ip-text': 'All concepts, frameworks, system architectures, methodologies and content presented on this website are proprietary intellectual property of the author.',
            'ip-prohibited-text': 'Unauthorized use, reproduction, adaptation or distribution is prohibited without prior written consent.',
            
            // Updates
            'updates-title': '7. Updates',
            'updates-text': 'Skynex Global reserves the right to update these legal terms at any time. Updates take effect upon publication on this page.',
            
            // Footer
            'footer-created-text': 'Created in Serbia.<br>Designed for the world.',
            'footer-location': 'Belgrade, Serbia',
            'footer-contact-email': 'info@skynexg.com',
            'footer-explore': 'EXPLORE',
            'footer-contact': 'CONTACT / INFO',
            'footer-iris': 'IRIS Education',
            'footer-buzzy': 'Buzzy Global Media',
            'footer-skynex': 'Skynex Technologies',
            'footer-contact-us': 'Contact Us',
            'footer-careers': 'Career',
            'footer-media': 'Media',
            'footer-legal': 'Legal',
            'footer-copyright': '© 2026 Skynex. All rights reserved.',
            'footer-ip-text': 'All concepts, frameworks, system architectures and methodologies presented on this website are proprietary intellectual property of the author and are protected under applicable intellectual property laws. Unauthorized use, replication or adaptation is prohibited.'
        },
        sr: {
            // Navigation - same as index.html
            nav: {
                home: "Home",
                about: "O nama",
                ecosystem: "Ekosistem",
                network: "Mreža",
                contact: "Kontakt"
            },
            
            // Legal page content
            'legal-title': 'Pravne informacije',
            
            // Introduction
            'legal-intro-text': 'Ova stranica sadrži objedinjene pravne informacije koje se odnose na korišćenje veb-sajta skynexg.com i svih povezanih digitalnih kanala u okviru Skynex Global ekosistema.',
            'legal-intro-accept': 'Korišćenjem ovog sajta slažete se sa pravilnicima sajta.',
            
            // Identity and Data Controller
            'legal-identity-title': '1. Identitet i rukovalac podacima',
            'legal-identity-text': 'Skynex Global je strateški ekosistem koji integriše obrazovanje, medije i tehnologiju kroz zaštićene intelektualne okvire.',
            'legal-identity-controller': 'Rukovalac podacima:',
            
            // Privacy Policy
            'privacy-title': '2. Politika privatnosti (GDPR)',
            'privacy-collection-title': '2.1 Koje podatke prikupljamo',
            'privacy-collection-text': 'Možemo prikupljati sledeće kategorije podataka: podatke koje nam dobrovoljno dostavite (ime, email adresa, sadržaj poruke); tehničke podatke (IP adresa, tip uređaja i pretraživača, vreme pristupa); podatke prikupljene putem kolačića i osnovnih analitičkih alata.',
            'privacy-collection-note': 'Ne prikupljamo posebne kategorije ličnih podataka niti svesno obrađujemo podatke o maloletnim licima bez saglasnosti roditelja ili staratelja.',
            'privacy-use-title': '2.2 Svrha obrade',
            'privacy-use-text': 'Lični podaci se obrađuju isključivo u sledeće svrhe: komunikacija i odgovaranje na upite; održavanje bezbednosti i stabilnosti sajta; unapređenje funkcionalnosti i sadržaja sajta; osnovna statistička analiza korišćenja sajta.',
            'privacy-legal-basis-title': '2.3 Pravni osnov obrade',
            'privacy-legal-basis-text': 'Obrada podataka se vrši u skladu sa Opštom uredbom o zaštiti podataka (GDPR), na osnovu: saglasnosti korisnika; legitimnog interesa za funkcionisanje i razvoj sajta; zakonskih obaveza, kada je primenljivo.',
            'privacy-retention-title': '2.4 Čuvanje podataka',
            'privacy-retention-text': 'Podaci se čuvaju samo onoliko dugo koliko je neophodno za svrhe za koje su prikupljeni ili u skladu sa važećim propisima.',
            'privacy-no-sale-text': 'Lični podaci se ne prodaju, ne iznajmljuju niti koriste u svrhe direktnog marketinga.',
            'privacy-rights-title': '2.5 Prava korisnika',
            'privacy-rights-text': 'U skladu sa GDPR-om, imate pravo da: zatražite pristup svojim ličnim podacima; zatražite ispravku ili brisanje podataka; zatražite ograničenje obrade ili uložite prigovor; povučete saglasnost u bilo kom trenutku. Zahteve možete uputiti putem email adrese: info@skynexg.com',
            
            // Cookie Policy
            'cookie-title': '3. Politika kolačića (Cookies)',
            'cookie-text': 'Ovaj sajt koristi kolačiće radi osnovne funkcionalnosti i analitike.',
            'cookie-consent-text': 'Kolačići koji nisu neophodni koriste se isključivo uz prethodnu saglasnost korisnika putem cookie consent mehanizma. Korisnici mogu u svakom trenutku upravljati ili onemogućiti kolačiće kroz podešavanja svog internet pretraživača.',
            
            // Terms of Use
            'terms-title': '4. Uslovi korišćenja sajta',
            'terms-text': 'Korišćenjem ovog sajta saglasni ste da: Sadržaj koristite isključivo u informativne i nekomercijalne svrhe; Nećete pokušavati da kopirate, menjate, distribuirate ili zloupotrebljavate sadržaj sajta; Skynex Global ne garantuje potpunu tačnost, dostupnost ili kontinuitet sadržaja; Skynex Global ne snosi odgovornost za sadržaje ili politike trećih strana na koje sajt može upućivati.',
            
            // Media Policy
            'media-policy-title': '5. Medijska i komunikaciona politika',
            'media-policy-text': 'Skynex Global ne učestvuje u promotivnim ili senzacionalističkim medijskim formatima, niti u komercijalnim sadržajima koji narušavaju uredničku nezavisnost, kredibilitet ili integritet sistema.',
            'media-policy-sponsored-text': 'Sponzorisane, podržane ili partnerske inicijative su dozvoljene isključivo uz potpunu transparentnost i bez uticaja na sadržaj, strukturu ili vrednosti ekosistema.',
            
            // Intellectual Property
            'ip-title': '6. Intelektualna svojina',
            'ip-text': 'Svi koncepti, okviri, arhitekture sistema, metodologije, tekstovi, vizuelni elementi i struktura ovog sajta predstavljaju zaštićenu intelektualnu svojinu autora.',
            'ip-prohibited-text': 'Neovlašćeno korišćenje, kopiranje, prilagođavanje, distribucija ili imitacija bilo kog dela sadržaja nije dozvoljeno bez prethodne pisane saglasnosti.',
            
            // Updates
            'updates-title': '7. Izmene i važenje',
            'updates-text': 'Skynex Global zadržava pravo da u bilo kom trenutku izmeni ili dopuni ove pravne informacije. Sve izmene stupaju na snagu objavljivanjem na ovoj stranici.',
            
            // Footer
            'footer-created-text': 'Kreirano u Srbiji.<br>Dizajnirano za svet.',
            'footer-location': 'Beograd, Srbija',
            'footer-contact-email': 'info@skynexg.com',
            'footer-explore': 'ISTRAŽI',
            'footer-contact': 'KONTAKT / INFO',
            'footer-iris': 'IRIS Education',
            'footer-buzzy': 'Buzzy Global Media',
            'footer-skynex': 'Skynex Technologies',
            'footer-contact-us': 'Kontaktiraj nas',
            'footer-careers': 'Karijera',
            'footer-media': 'Mediji',
            'footer-legal': 'Pravno',
            'footer-copyright': '© 2026 Skynex. Sva prava zadržana.',
            'footer-ip-text': 'Svi koncepti, okviri, arhitekture sistema i metodologije predstavljene na ovom sajtu su zaštićena intelektualna svojina autora i zaštićene su zakonima o intelektualnoj svojini. Neovlašćeno korišćenje, replikacija ili prilagođavanje je zabranjeno.'
        }
    };

    // Use the same localStorage key as other pages
    let currentLanguage = localStorage.getItem('lang') || 'en';

    // Language switching functionality
    function switchLanguage(lang) {
        currentLanguage = lang;
        localStorage.setItem('lang', lang); // unified key
        updateContent();
        updateLanguageSelectors();
    }

    // Update content based on current language
    function updateContent() {
        const t = translations[currentLanguage];
        
        // Update navigation links
        const navOrder = ["home", "about", "ecosystem", "network", "contact"];
        const navLinks = document.querySelectorAll(
            '.wp-block-navigation__container .wp-block-navigation-item__label, .mobile-menu ul li a'
        );
        navLinks.forEach((link, i) => {
            const key = navOrder[i % navOrder.length];
            if (t.nav && t.nav[key]) {
                link.textContent = t.nav[key];
            }
        });
        
        const elements = document.querySelectorAll('[data-translate]');
        elements.forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[currentLanguage] && translations[currentLanguage][key]) {
                if (element.tagName === 'INPUT' && element.type === 'email') {
                    element.placeholder = translations[currentLanguage][key];
                } else {
                    element.textContent = translations[currentLanguage][key];
                }
            }
        });

        // Update footer elements by ID
        
        const footerCreatedText = document.getElementById('footerCreatedText');
        if (footerCreatedText) footerCreatedText.innerHTML = t['footer-created-text'];
        
        const footerLocation = document.getElementById('footerLocation');
        if (footerLocation) footerLocation.textContent = t['footer-location'];
        
        const footerContactEmail = document.getElementById('footerContactEmail');
        if (footerContactEmail) {
            footerContactEmail.textContent = t['footer-contact-email'];
            footerContactEmail.href = `mailto:${t['footer-contact-email']}`;
        }
        
        const footerExplore = document.getElementById('footerExplore');
        if (footerExplore) footerExplore.textContent = t['footer-explore'];
        
        const footerContact = document.getElementById('footerContact');
        if (footerContact) footerContact.textContent = t['footer-contact'];
        
        const footerLinkIRIS = document.getElementById('footerLinkIRIS');
        if (footerLinkIRIS) footerLinkIRIS.textContent = t['footer-iris'];
        
        const footerLinkBuzzy = document.getElementById('footerLinkBuzzy');
        if (footerLinkBuzzy) footerLinkBuzzy.textContent = t['footer-buzzy'];
        
        const footerLinkSkynex = document.getElementById('footerLinkSkynex');
        if (footerLinkSkynex) footerLinkSkynex.textContent = t['footer-skynex'];
        
        const footerLinkContactUs = document.getElementById('footerLinkContactUs');
        if (footerLinkContactUs) footerLinkContactUs.textContent = t['footer-contact-us'];
        
        const footerLinkCareers = document.getElementById('footerLinkCareers');
        if (footerLinkCareers) footerLinkCareers.textContent = t['footer-careers'];
        
        const footerLinkMedia = document.getElementById('footerLinkMedia');
        if (footerLinkMedia) footerLinkMedia.textContent = t['footer-media'];
        
        const footerLinkLegal = document.getElementById('footerLinkLegal');
        if (footerLinkLegal) footerLinkLegal.textContent = t['footer-legal'];
        
        const footerCopyright = document.getElementById('footerCopyright');
        if (footerCopyright) footerCopyright.textContent = t['footer-copyright'];
        
        // Footer IP text (only on legal page)
        const footerIP = document.getElementById('footerIP');
        if (footerIP) footerIP.textContent = t['footer-ip-text'];

        // Update page title
        if (currentLanguage === 'sr') {
            document.title = 'Pravne informacije - Skynex';
        } else {
            document.title = 'Legal Information - Skynex';
        }

        // Update HTML lang attribute
        document.documentElement.lang = currentLanguage === 'sr' ? 'sr-RS' : 'en-US';
    }

    // Update language selector dropdowns
    function updateLanguageSelectors() {
        const desktopSelect = document.getElementById('languageSelect');
        const mobileSelect = document.getElementById('mobileLanguageSelect');
        
        if (desktopSelect) desktopSelect.value = currentLanguage;
        if (mobileSelect) mobileSelect.value = currentLanguage;
    }

    // Initialize language selectors
    function initLanguageSelectors() {
        const desktopSelect = document.getElementById('languageSelect');
        const mobileSelect = document.getElementById('mobileLanguageSelect');

        if (desktopSelect) {
            desktopSelect.value = currentLanguage;
            desktopSelect.addEventListener('change', function() {
                switchLanguage(this.value);
                if (mobileSelect) mobileSelect.value = this.value;
            });
        }

        if (mobileSelect) {
            mobileSelect.value = currentLanguage;
            mobileSelect.addEventListener('change', function() {
                switchLanguage(this.value);
                if (desktopSelect) desktopSelect.value = this.value;
            });
        }
    }

    // Mobile menu functionality
    function initMobileMenu() {
        const hamburgerBtn = document.getElementById('hamburgerBtn');
        const mobileMenu = document.getElementById('mobileMenu');

        if (hamburgerBtn && mobileMenu) {
            function toggleMenuHandler(e) {
                if (e) {
                    e.preventDefault();
                    e.stopPropagation();
                }
                hamburgerBtn.classList.toggle('active');
                mobileMenu.classList.toggle('active');
                
                // Prevent body scroll when menu is open
                if (mobileMenu.classList.contains('active')) {
                    document.body.style.overflow = 'hidden';
                } else {
                    document.body.style.overflow = '';
                }
            }
            
            hamburgerBtn.addEventListener('click', toggleMenuHandler);
            hamburgerBtn.addEventListener('touchstart', toggleMenuHandler, { passive: false });

            // Close mobile menu when clicking on links
            const mobileLinks = mobileMenu.querySelectorAll('a');
            mobileLinks.forEach(link => {
                link.addEventListener('click', function() {
                    hamburgerBtn.classList.remove('active');
                    mobileMenu.classList.remove('active');
                    document.body.style.overflow = '';
                });
            });

            // Close mobile menu when clicking outside
            document.addEventListener('click', function(e) {
                if (!hamburgerBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
                    hamburgerBtn.classList.remove('active');
                    mobileMenu.classList.remove('active');
                    document.body.style.overflow = '';
                }
            });
        }
    }    // Newsletter form functionality
    function initNewsletterForm() {
        const newsletterForm = document.querySelector('.wp-block-gutena-forms');
        
        if (newsletterForm) {
            newsletterForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const emailInput = this.querySelector('input[type="email"]');
                const email = emailInput.value;
                
                if (email) {
                    // Simulate form submission
                    const submitBtn = this.querySelector('button');
                    const originalText = submitBtn.querySelector('strong').textContent;
                    
                    submitBtn.querySelector('strong').textContent = currentLanguage === 'sr' ? 'Šalje se...' : 'Sending...';
                    submitBtn.disabled = true;
                    
                    setTimeout(() => {
                        alert(currentLanguage === 'sr' ? 
                            'Hvala vam! Uspešno ste se prijavili za naš newsletter.' : 
                            'Thank you! You have successfully subscribed to our newsletter.');
                        
                        emailInput.value = '';
                        submitBtn.querySelector('strong').textContent = originalText;
                        submitBtn.disabled = false;
                    }, 2000);
                }
            });
        }
    }

    // Smooth scrolling for anchor links
    function initSmoothScrolling() {
        const links = document.querySelectorAll('a[href*="#"]');
        
        links.forEach(link => {
            link.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                
                // Check if it's an anchor link to current page
                if (href.startsWith('#') || href.includes(window.location.pathname + '#')) {
                    e.preventDefault();
                    
                    const targetId = href.split('#')[1];
                    const targetElement = document.getElementById(targetId);
                    
                    if (targetElement) {
                        targetElement.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                }
            });
        });
    }

    // Initialize all functionality
    function init() {
        initLanguageSelectors();
        initMobileMenu();
        initNewsletterForm();
        initSmoothScrolling();
        updateLanguageSelectors();
        updateContent();
        
        console.log('Legal page initialized successfully');
    }

    // Start initialization
    init();

    // Handle browser back/forward buttons
    window.addEventListener('popstate', function() {
        updateContent();
    });

    // Handle window resize
    window.addEventListener('resize', function() {
        // Close mobile menu on resize to desktop
        if (window.innerWidth > 767) {
            const hamburgerBtn = document.getElementById('hamburgerBtn');
            const mobileMenu = document.getElementById('mobileMenu');
            
            if (hamburgerBtn && mobileMenu) {
                hamburgerBtn.classList.remove('active');
                mobileMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        }
    });
});