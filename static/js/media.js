// Media page JavaScript functionality
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
            
            // Media page content
            'media-title': 'Media Inquiries',
            'media-subtitle': 'Media & Press Inquiries',
            
            // Buttons
            'media-btn-read-more': 'Read more',
            'media-btn-show-less': 'Show less',

            // IT Logs Post
            'media-itlogs-category': 'IN THE MEDIA',
            'media-itlogs-date': 'September 9, 2026',
            'media-itlogs-title': 'Skynex Global in IT Logs: Education for an Unpredictable Future',
            'media-itlogs-p1': 'International technology media outlet IT Logs featured Skynex Global in an interview with founder Nikola Vujičić.',
            'media-itlogs-p2': 'In the article by journalist Bojan Stojkovski, the vision of connecting education, media, and technology was presented, alongside the IRIS Learning Model — an interdisciplinary program aimed at developing abilities children can apply across diverse life situations.',
            'media-itlogs-p3': 'Special focus was placed on critical thinking, adaptability, decision-making, and preparing youth for a world whose future developments cannot be predicted in advance.',
            'media-itlogs-link-label': 'Read the original article on IT Logs (EN):',
            'media-itlogs-link': 'Open article on IT Logs (EN)',

            // Official Initiative
            'media-initiative-title': 'OFFICIAL INITIATIVE',
            'media-initiative-date': 'October 2026',
            'media-initiative-headline': '15 GIRLS. ONE WORLD CHAMPIONSHIP.',
            'media-initiative-subheading': 'They earned their place. Let\'s help them reach the world stage.',
            'media-initiative-p1': 'Skynex Global has launched an initiative to raise donations and partner support for 15 young dancers from Belgrade, Novi Sad, and Vršac to attend the IDO World Show Dance Championships and IDO World Performing Arts Improvisation Championships 2026, held from December 5 to 9 in Poland.',
            'media-initiative-p2': 'The initiative brings together companies, organizations, and individuals wishing to contribute to funding travel, accommodation, competition fees, equipment, and other needs of the delegation comprising 15 competitors and five coaches.',
            'media-initiative-goal': '<strong>Initial initiative goal: 35,000 EUR</strong>, through financial donations and direct partner support.',
            'media-initiative-invite': 'We invite all interested parties to get involved and support the young talents of Serbia.',
            
            // Introduction
            'media-intro-title': 'Media & Press Inquiries',
            'media-intro-text': 'Skynex Global communicates with media in the context of education, social development, media responsibility, and technological systems.',
            
            // Scope
            'media-scope-title': 'Inquiry Scope',
            'media-scope-text': 'Media inquiries are limited to topics related to:',
            'media-scope-item1': 'Skynex Global ecosystem',
            'media-scope-item2': 'IRIS Education',
            'media-scope-item3': 'Buzzy Global Media',
            'media-scope-item4': 'Systems approach to education, media, and technology',
            
            // Guidelines
            'media-guidelines-title': 'Media Guidelines',
            'media-guidelines-text': 'Skynex Global does not participate in promotional or sensationalistic media formats, nor in commercial content that affects editorial independence, credibility, or system integrity.',
            
            // Contact
            'media-contact-title': 'Media Contact',
            'media-contact-text': 'For official media inquiries, interviews, and information:',
            'media-contact-email-label': 'E-mail:',
            'media-contact-email-alt': '(or info@skynexg.com until a dedicated email is set up)',
            
            // Media Releases & Announcements (formerly Press Materials)
            'media-materials-title': 'Media Releases & Announcements',
            'media-materials-text': 'Follow announcements about Skynex Global\'s work, interviews in domestic and international media, official statements, and initiatives we implement.',
            
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
            
            // Media page content
            'media-title': 'Medijski upiti',

            // Buttons
            'media-btn-read-more': 'Pogledaj više',
            'media-btn-show-less': 'Pogledaj manje',

            // IT Logs Post
            'media-itlogs-category': 'U MEDIJIMA',
            'media-itlogs-date': '9. septembar 2026.',
            'media-itlogs-title': 'Skynex Global u IT Logs: Obrazovanje za budućnost koju ne možemo predvideti',
            'media-itlogs-p1': 'Međunarodni tehnološki medij IT Logs predstavio je Skynex Global kroz razgovor sa osnivačem Nikolom Vujičićem.',
            'media-itlogs-p2': 'U tekstu novinara Bojana Stojkovskog predstavljeni su vizija povezivanja obrazovanja, medija i tehnologije, kao i IRIS Learning Model – interdisciplinarni program usmeren na razvoj sposobnosti koje deca mogu primenjivati u različitim životnim situacijama.',
            'media-itlogs-p3': 'Poseban fokus stavljen je na kritičko mišljenje, prilagodljivost, donošenje odluka i pripremu mladih za svet čiji razvoj nije moguće unapred precizno predvideti.',
            'media-itlogs-link-label': 'Pročitajte originalni članak na IT Logs (EN):',
            'media-itlogs-link': 'Otvori članak na IT Logs (EN)',

            // Zvanična Inicijativa
            'media-initiative-title': 'ZVANIČNA INICIJATIVA',
            'media-initiative-date': 'Oktobar 2026.',
            'media-initiative-headline': '15 DEVOJČICA. JEDNO SVETSKO PRVENSTVO.',
            'media-initiative-subheading': 'Plasman su izborile. Pomozimo im da stignu do svetske scene.',
            'media-initiative-p1': 'Skynex Global pokrenuo je inicijativu prikupljanja donacija i partnerske podrške za odlazak 15 mladih plesačica iz Beograda, Novog Sada i Vršca na IDO World Show Dance Championships i IDO World Performing Arts Improvisation Championships 2026, koji se održavaju od 5. do 9. decembra u Poljskoj.',
            'media-initiative-p2': 'Inicijativa okuplja kompanije, organizacije i pojedince koji žele da doprinesu finansiranju putovanja, smeštaja, takmičarskih troškova, opreme i drugih potreba delegacije koju čini 15 takmičarki i pet trenera.',
            'media-initiative-goal': '<strong>Početni cilj inicijative: 35.000 EUR</strong>, kroz finansijske donacije i direktnu podršku partnera.',
            'media-initiative-invite': 'Pozivamo sve zainteresovane da se uključe i podrže mlade talente Srbije.',

            // Introduction
            'media-intro-title': 'Medijski upiti',
            'media-intro-text': 'Skynex Global komunicira sa medijima u kontekstu obrazovanja, društvenog razvoja, medijske odgovornosti i tehnoloških sistema.',
            
            // Scope
            'media-scope-title': 'Obim upita',
            'media-scope-text': 'Medijski upiti su ograničeni na teme koje se odnose na:',
            'media-scope-item1': 'Skynex Global ekosistem',
            'media-scope-item2': 'IRIS Education',
            'media-scope-item3': 'Buzzy Global Media',
            'media-scope-item4': 'Sistemski pristup obrazovanju, medijima i tehnologiji',

            // Guidelines
            'media-guidelines-title': 'Medijske smernice',
            'media-guidelines-text': 'Skynex Global ne učestvuje u promotivnim ili senzacionalističkim medijskim formatima, niti u komercijalnim sadržajima koji utiču na uredničku nezavisnost, kredibilitet ili integritet sistema.',

            // Contact
            'media-contact-title': 'Kontakt za medije',
            'media-contact-text': 'Za zvanične medijske upite, intervjue i informacije:',
            'media-contact-email-label': 'E-mail:',
            'media-contact-email-alt': '(или info@skynexg.com док се не успостави посебна адреса)',

            // Medijske objave i saopštenja (ranije Materijali za štampu)
            'media-materials-title': 'MEDIJSKE OBJAVE I SAOPŠTENJA',
            'media-materials-text': 'Pratite objave o radu Skynex Globala, intervjue u domaćim i međunarodnim medijima, zvanična saopštenja i inicijative koje realizujemo.',
            
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
                    element.innerHTML = translations[currentLanguage][key];
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

        // Update page title
        if (currentLanguage === 'sr') {
            document.title = 'Media - Skynex';
        } else {
            document.title = 'Media - Skynex';
        }

        // Update HTML lang attribute
        document.documentElement.lang = currentLanguage === 'sr' ? 'sr-RS' : 'en-US';

        // Update read more buttons based on expansion state
        document.querySelectorAll('.media-read-more-btn').forEach(btn => {
            const isExpanded = btn.getAttribute('aria-expanded') === 'true';
            const textSpan = btn.querySelector('.btn-text');
            if (textSpan) {
                if (isExpanded) {
                    textSpan.textContent = currentLanguage === 'sr' ? 'Pogledaj manje' : 'Show less';
                } else {
                    textSpan.textContent = currentLanguage === 'sr' ? 'Pogledaj više' : 'Read more';
                }
            }
        });
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

    // Expandable content functionality (Read more / Pogledaj više)
    function initExpandableContent() {
        document.addEventListener('click', function(e) {
            const btn = e.target.closest('.media-read-more-btn');
            if (!btn) return;

            const targetId = btn.getAttribute('data-target');
            const target = document.getElementById(targetId);
            if (!target) return;

            const isExpanded = btn.getAttribute('aria-expanded') === 'true';
            const newExpanded = !isExpanded;
            btn.setAttribute('aria-expanded', newExpanded);

            if (newExpanded) {
                target.classList.add('show');
                const textSpan = btn.querySelector('.btn-text');
                if (textSpan) {
                    textSpan.textContent = currentLanguage === 'sr' ? 'Pogledaj manje' : 'Show less';
                }
                const icon = btn.querySelector('.btn-icon');
                if (icon) icon.style.transform = 'rotate(180deg)';
            } else {
                target.classList.remove('show');
                const textSpan = btn.querySelector('.btn-text');
                if (textSpan) {
                    textSpan.textContent = currentLanguage === 'sr' ? 'Pogledaj više' : 'Read more';
                }
                const icon = btn.querySelector('.btn-icon');
                if (icon) icon.style.transform = 'rotate(0deg)';
            }
        });
    }

    // Initialize all functionality
    function init() {
        initLanguageSelectors();
        initMobileMenu();
        initNewsletterForm();
        initSmoothScrolling();
        initExpandableContent();
        updateLanguageSelectors();
        updateContent();
        
        console.log('Media page initialized successfully');
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

