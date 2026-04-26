// Careers page JavaScript functionality
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
            
            // Careers page content
            'careers-title': 'Careers',
            'careers-subtitle': 'Careers at Skynex Global',
            
            // Introduction
            'careers-intro-text': 'Skynex Global develops as a long-term system that brings together individuals dedicated to education, media, technology, and social development.',
            
            // Hiring Model
            'careers-model-title': 'Our Approach',
            'careers-model-text': 'We do not hire according to the classic corporate model. Roles within the ecosystem are formed organically, in accordance with the development of individual branches and projects.',
            
            // Open Positions
            'careers-positions-title': 'Open Positions',
            'careers-positions-text': 'Currently, there are no open positions.',
            
            // Contact
            'careers-contact-title': 'Express Interest',
            'careers-contact-text': 'If you would like to express interest in future collaboration within the Skynex Global ecosystem, you can send a brief biography and area of interest to:',
            'careers-contact-email-label': 'E-mail:',
            'careers-contact-email-alt': '(or contact@skynexg.com temporarily or to create a subdomain)',
            'careers-contact-note': 'All contacts are considered exclusively in the context of long-term contribution to the system.',
            
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
            'footer-copyright': '© 2026 Skynex. All rights reserved.'
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

            // Careers page content
            'careers-title': 'Karijera',
            'careers-subtitle': 'Karijera u Skynex Global',

            // Introduction
            'careers-intro-text': 'Skynex Global se razvija kao dugoročni sistem koji okuplja pojedince posvećene obrazovanju, medijima, tehnologiji i društvenom razvoju.',

            // Hiring Model
            'careers-model-title': 'Naš Pristup',
            'careers-model-text': 'Ne zapošljavamo po klasičnom korporativnom modelu. Uloge unutar ekosistema se formiraju organski, u skladu sa razvojem pojedinih grana i projekata.',

            // Open Positions
            'careers-positions-title': 'Otvorene Pozicije',
            'careers-positions-text': 'Trenutno nema otvorenih pozicija.',

            // Contact
            'careers-contact-title': 'Izrazi Interesovanje',
            'careers-contact-text': 'Ukoliko želite da izrazite interesovanje za buduću saradnju u okviru Skynex Global ekosistema, možete poslati kratku biografiju i oblast interesovanja na:',
            'careers-contact-email-label': 'E-mail:',
            'careers-contact-email-alt': '(ili contact@skynexg.com privremeno ili da pravim poddomen)',
            'careers-contact-note': 'Svi kontakti se razmatraju isključivo u kontekstu dugoročnog doprinosa sistemu.',
            
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
            'footer-copyright': '© 2026 Skynex. Sva prava zadržana.'
        }
    };

    // Use the same localStorage key as other pages
    let currentLanguage = localStorage.getItem('lang') || 'en';

    // Language switching functionality
    function switchLanguage(lang) {
        currentLanguage = lang;
        localStorage.setItem('lang', lang); // unified key
        translatePage(lang);
        updateLanguageSelectors();
    }

    // Translation function similar to index.js
    function translatePage(lang) {
        const t = translations[lang];

        // Navigation
        const navLinks = document.querySelectorAll(
            '.wp-block-navigation__container .wp-block-navigation-link a, .mobile-menu ul li a'
        );
        const navOrder = ["home", "about", "ecosystem", "network", "contact"];
        navLinks.forEach((a, i) => {
            const key = navOrder[i % navOrder.length];
            if (t.nav && t.nav[key]) {
                a.textContent = t.nav[key];
            }
        });

        // Language selectors
        const desktopLangSelect = document.getElementById('languageSelect');
        const mobileLangSelect = document.getElementById('mobileLanguageSelect');
        if (desktopLangSelect) {
            desktopLangSelect.value = lang;
        }
        if (mobileLangSelect) {
            mobileLangSelect.value = lang;
        }

        // Careers page specific content
        const careersTitle = document.querySelector('.legal-hero-title');
        if (careersTitle) careersTitle.textContent = t['careers-title'];

        const introText = document.querySelector('[data-translate="careers-intro-text"]');
        if (introText) introText.textContent = t['careers-intro-text'];

        const modelTitle = document.querySelector('[data-translate="careers-model-title"]');
        if (modelTitle) modelTitle.textContent = t['careers-model-title'];

        const modelText = document.querySelector('[data-translate="careers-model-text"]');
        if (modelText) modelText.textContent = t['careers-model-text'];

        const positionsTitle = document.querySelector('[data-translate="careers-positions-title"]');
        if (positionsTitle) positionsTitle.textContent = t['careers-positions-title'];

        const positionsText = document.querySelector('[data-translate="careers-positions-text"]');
        if (positionsText) positionsText.textContent = t['careers-positions-text'];

        const contactTitle = document.querySelector('[data-translate="careers-contact-title"]');
        if (contactTitle) contactTitle.textContent = t['careers-contact-title'];

        const contactText = document.querySelector('[data-translate="careers-contact-text"]');
        if (contactText) contactText.textContent = t['careers-contact-text'];

        const contactEmailLabel = document.querySelector('[data-translate="careers-contact-email-label"]');
        if (contactEmailLabel) contactEmailLabel.textContent = t['careers-contact-email-label'];

        const contactNote = document.querySelector('[data-translate="careers-contact-note"]');
        if (contactNote) contactNote.textContent = t['careers-contact-note'];

        // Footer elements
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

        // Update page title
        document.title = lang === 'sr' ? 'Karijera - Skynex' : 'Careers - Skynex';

        // Update HTML lang attribute
        document.documentElement.lang = lang === 'sr' ? 'sr-RS' : 'en-US';
    }

    // Update content based on current language (now calls translatePage)
    function updateContent() {
        translatePage(currentLanguage);
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
        translatePage(currentLanguage);

        console.log('Careers page initialized successfully');
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

