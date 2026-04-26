// Header HTML template
const headerHTML = `
      <header class="wp-block-template-part" style="position: fixed; top: 0; left: 0; right: 0; z-index: 1000; background-color: #000; box-shadow: 0 2px 10px rgba(0,0,0,0.3);">
        <div
          class="wp-block-group alignfull has-background-color has-white-color has-black-background-color has-text-color has-background has-link-color wp-elements-6a2ea69f4f1f926da248ced00a8648c4 has-global-padding is-layout-constrained wp-container-core-group-is-layout-23b1a4dc wp-block-group-is-layout-constrained"
          style="
            padding-top: var(--wp--preset--spacing--30);
            padding-right: var(--wp--preset--spacing--30);
            padding-bottom: var(--wp--preset--spacing--30);
            padding-left: var(--wp--preset--spacing--30);
          "
        >
          <div
            class="wp-block-group alignwide is-content-justification-space-between is-layout-flex wp-container-core-group-is-layout-b585a4aa wp-block-group-is-layout-flex"
          >
            <div
              class="wp-block-group is-layout-flex wp-block-group-is-layout-flex"
            >
              <div class="wp-block-site-logo">
                <a href="/" class="custom-logo-link" rel="home"
                  ><img
                    width="100"
                    height="100"
                    src="/img/Logo-beli-edited.png"
                    class="custom-logo"
                    alt="nikolavujicic"
                    decoding="async"
                    sizes="(max-width: 100px) 100vw, 100px"
                /></a>
              </div>
            </div>

            <div
              class="wp-block-group is-layout-flex wp-block-group-is-layout-flex"
            >
              <nav
                class="is-responsive wp-block-navigation is-layout-flex wp-block-navigation-is-layout-flex"
                aria-label="Header menu"
                data-wp-interactive="core/navigation"
                data-wp-context='{"overlayOpenedBy":{"click":false,"hover":false,"focus":false},"type":"overlay","roleAttribute":"","ariaLabel":"Menu"}'
              >
                <div
                  class="wp-block-navigation__responsive-container"
                  id="modal-1"
                  data-wp-class--has-modal-open="state.isMenuOpen"
                  data-wp-class--is-menu-open="state.isMenuOpen"
                  data-wp-watch="callbacks.initMenu"
                  data-wp-on--keydown="actions.handleMenuKeydown"
                  data-wp-on-async--focusout="actions.handleMenuFocusout"
                  tabindex="-1"
                >
                  <div
                    class="wp-block-navigation__responsive-close"
                    tabindex="-1"
                  >
                    <div
                      class="wp-block-navigation__responsive-dialog"
                      data-wp-bind--aria-modal="state.ariaModal"
                      data-wp-bind--aria-label="state.ariaLabel"
                      data-wp-bind--role="state.roleAttribute"
                    >
                      <div
                        class="wp-block-navigation__responsive-container-content"
                        data-wp-watch="callbacks.focusFirstElement"
                        id="modal-1-content"
                      >
                        <ul
                          class="wp-block-navigation__container is-responsive wp-block-navigation"
                        >
                          <li
                            class="wp-block-navigation-item wp-block-navigation-link"
                          >
                            <a
                              class="wp-block-navigation-item__content"
                              href="#wlcmBcg"
                              ><span class="wp-block-navigation-item__label"
                                >Home</span
                              ></a
                            >
                          </li>
                          <li
                            class="wp-block-navigation-item wp-block-navigation-link"
                          >
                            <a
                              class="wp-block-navigation-item__content"
                              href="#aboutUsContainer"
                              ><span class="wp-block-navigation-item__label"
                                >About</span
                              ></a
                            >
                          </li>
                          <li
                            class="wp-block-navigation-item wp-block-navigation-link"
                          >
                            <a
                              class="wp-block-navigation-item__content"
                              href="#sta-radimo-section"
                              ><span class="wp-block-navigation-item__label"
                                >Ecosystem</span
                              ></a
                            >
                          </li>
                          <li
                            class="wp-block-navigation-item wp-block-navigation-link"
                          >
                            <a
                              class="wp-block-navigation-item__content"
                              href="#partnerWhy"
                              ><span class="wp-block-navigation-item__label"
                                >Network</span
                              ></a
                            >
                          </li>
                          <li
                            class="wp-block-navigation-item wp-block-navigation-link"
                          >
                            <a
                              class="wp-block-navigation-item__content"
                              href="#contactForm"
                              ><span class="wp-block-navigation-item__label"
                                >Contact</span
                              ></a
                            >
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>

              <!-- Language dropdown - shown on desktop -->
              <div class="language-dropdown">
                <div class="language-selector">
                  <select id="languageSelect" class="language-select">
                    <option value="en">EN</option>
                    <option value="sr">SR</option>
                  </select>
                </div>
              </div>

              <!-- Mobile menu container -->
              <div class="mobile-menu-container">
                <!-- Language dropdown - shown on mobile -->
                <div class="language-dropdown mobile-language">
                  <div class="language-selector">
                    <select id="mobileLanguageSelect" class="language-select">
                      <option value="en">EN</option>
                      <option value="sr">SR</option>
                    </select>
                  </div>
                </div>

                <!-- Hamburger menu button -->
                <div class="hamburger-menu">
                  <button
                    class="hamburger-btn"
                    id="hamburgerBtn"
                    aria-label="Toggle menu"
                    type="button"
                    style="pointer-events: auto !important; cursor: pointer !important;"
                  >
                    <span class="hamburger-line"></span>
                    <span class="hamburger-line"></span>
                    <span class="hamburger-line"></span>
                  </button>
                </div>
              </div>

              <!-- Mobile menu overlay -->
              <div class="mobile-menu" id="mobileMenu">
                <ul>
                  <li>
                    <a href="#wlcmBcg"
                      >Home</a
                    >
                  </li>
                  <li>
                    <a href="#aboutUsContainer"
                      >About</a
                    >
                  </li>
                  <li>
                    <a href="#sta-radimo-section"
                      >Ecosystem</a
                    >
                  </li>
                  <li>
                    <a href="#partnerWhy"
                      >Network</a
                    >
                  </li>
                  <li>
                    <a href="#contactForm"
                      >Contact</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
`;

// Footer HTML template (only the modern footer, not the contact form)
const footerHTML = `
      <!-- Modern Custom Footer -->
      <footer class="skynex-footer">
        <div class="footer-container">
          <!-- Footer Top Section -->
          <div class="footer-top">
            <!-- KOLONA 1 - IDENTITET (LEVO) -->
            <div class="footer-brand">
              <a href="#wlcmBcg" class="footer-logo-link">
                <img src="/img/Logo-beli-edited.png" alt="Skynex Logo" class="footer-logo">
              </a>
              
              <!-- Newsletter Section -->
              <div class="footer-newsletter">
                <p class="newsletter-label">Newsletter</p>
                <form class="newsletter-form" id="newsletterForm">
                  <input 
                    type="email" 
                    class="newsletter-input" 
                    placeholder="Your email" 
                    aria-label="Email address for newsletter subscription"
                  />
                  <button type="submit" class="newsletter-submit" aria-label="Subscribe">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </button>
                </form>
              </div>
              
              <p class="footer-created-text" id="footerCreatedText">Created in Serbia.<br>Designed for the world.</p>
              <div class="footer-contact-info">
                <p class="footer-location" id="footerLocation">Belgrade, Serbia</p>
                <a href="mailto:info@skynexg.com" class="footer-email" id="footerContactEmail">info@skynexg.com</a>
              </div>
            </div>

            <div class="footer-links">
              <!-- KOLONA 2 - EXPLORE (SREDINA LEVO) -->
              <div class="footer-column">
                <h4 id="footerExplore">EXPLORE</h4>
                <ul>
                  <li><a href="#iris-education-block" id="footerLinkIRIS">IRIS Education</a></li>
                  <li><a href="#buzzy-media-block" id="footerLinkBuzzy">Buzzy Global Media</a></li>
                  <li><a href="#skynex-tech-block" id="footerLinkSkynex">Skynex Technologies</a></li>
                </ul>
              </div>

              <!-- KOLONA 3 - CONTACT / INFO (SREDINA DESNO) -->
              <div class="footer-column">
                <h4 id="footerContact">CONTACT / INFO</h4>
                <ul>
                  <li><a href="#contactForm" id="footerLinkContactUs">Contact Us</a></li>
                  <li><a href="/careers" id="footerLinkCareers">Careers</a></li>
                  <li><a href="/media" id="footerLinkMedia">Media</a></li>
                  <li><a href="/legal" id="footerLinkLegal">Legal</a></li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Footer Bottom -->
          <div class="footer-bottom">
            <div class="footer-accent-line"></div>
            <div class="footer-bottom-content">
              <p class="footer-copyright">
                <span id="footerCopyright">© 2026 Skynex Global. Sva prava zadržana.</span>
              </p>
              <div class="footer-social-icons">
                <a href="https://www.linkedin.com/company/skynexg/posts/?feedView=all" target="_blank" rel="noopener" aria-label="LinkedIn" class="footer-social-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com/skynexglobal/" target="_blank" rel="noopener" aria-label="Instagram" class="footer-social-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="https://www.youtube.com/" target="_blank" rel="noopener" aria-label="YouTube" class="footer-social-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
`;

// Function to load header
function loadHeader() {
  const headerPlaceholder = document.getElementById('header-placeholder');
  if (headerPlaceholder) {
    headerPlaceholder.innerHTML = headerHTML;

    // Add padding-top to body to account for fixed header
    document.body.style.paddingTop = '120px'; // Approximate header height

    // Initialize hamburger menu after header is loaded
    setTimeout(() => {
      initializeHamburgerMenu();
    }, 100);

    // Initialize desktop navigation links after header is loaded
    initializeDesktopNavLinks();

    // Initialize language selectors after header is loaded
    initializeLanguageSelectors();
  }
}

// Function to load footer
function loadFooter() {
  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (footerPlaceholder) {
    footerPlaceholder.innerHTML = footerHTML;
    
    // Initialize footer functionality after footer is loaded
    initializeFooterLinks();
    initializeNewsletterForm();
    
    // Initialize YouTube toast after footer is loaded
    setTimeout(() => {
      initializeYouTubeToast();
    }, 100);
  }
}

// Initialize hamburger menu functionality - najjednostavnije moguće
function initializeHamburgerMenu() {
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileMenu = document.getElementById('mobileMenu');

  if (hamburgerBtn && mobileMenu) {
    // Jednostavno toggle na klik
    hamburgerBtn.addEventListener('click', function() {
      hamburgerBtn.classList.toggle('active');
      mobileMenu.classList.toggle('active');
      
      // Blokiraj scroll kada je meni otvoren
      if (mobileMenu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    });

    // Zatvori meni kada se klikne na link
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');
    mobileMenuLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        if (href && href.startsWith('#')) {
          e.preventDefault();
          
          // Zatvori meni
          hamburgerBtn.classList.remove('active');
          mobileMenu.classList.remove('active');
          document.body.style.overflow = '';
          
          // Proveri da li smo na index stranici
          const isIndexPage = window.location.pathname === '/' || window.location.pathname.endsWith('index.html');
          
          if (!isIndexPage) {
            window.location.href = '/' + href;
            return;
          }
          
          // Smooth scroll
          const section = document.querySelector(href);
          if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
          }
        } else {
          hamburgerBtn.classList.remove('active');
          mobileMenu.classList.remove('active');
          document.body.style.overflow = '';
        }
      });
    });
  }
}

// Initialize language selectors
function initializeLanguageSelectors() {
  const desktopLanguageSelect = document.getElementById('languageSelect');
  const mobileLanguageSelect = document.getElementById('mobileLanguageSelect');
  
  if (desktopLanguageSelect && mobileLanguageSelect) {
    // Sync language selectors
    desktopLanguageSelect.addEventListener('change', function() {
      mobileLanguageSelect.value = this.value;
      handleLanguageChange(this.value);
    });
    
    mobileLanguageSelect.addEventListener('change', function() {
      desktopLanguageSelect.value = this.value;
      handleLanguageChange(this.value);
    });
    
    // Set initial language from localStorage
    const savedLang = localStorage.getItem('lang') || 'en';
    desktopLanguageSelect.value = savedLang;
    mobileLanguageSelect.value = savedLang;
  }
}

// Handle language change (this will be called by index.js if it exists)
function handleLanguageChange(lang) {
  localStorage.setItem('lang', lang);
  
  // If index.js translatePage function exists, call it
  if (typeof translatePage === 'function') {
    translatePage(lang);
  }
}

// Initialize footer links smooth scroll
function initializeFooterLinks() {
  const footerLinks = document.querySelectorAll('.skynex-footer a[href^="#"]');
  footerLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');

      // Check if we're on the index page
      const isIndexPage = window.location.pathname === '/' || window.location.pathname.endsWith('index.html');

      // Ecosystem links that should redirect to index if not already there
      const ecosystemLinks = ['#iris-education-block', '#buzzy-media-block', '#skynex-tech-block', '#contactForm'];

      if (ecosystemLinks.includes(targetId) && !isIndexPage) {
        // Redirect to index.html with the appropriate anchor
        e.preventDefault();
        window.location.href = '/' + targetId;
        return;
      }

      // For other links or when already on index page, do smooth scroll
      e.preventDefault();
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

// Initialize desktop navigation links
function initializeDesktopNavLinks() {
  const navLinks = document.querySelectorAll('.wp-block-navigation__container a[href^="#"]');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');

      // Check if we're on the index page
      const isIndexPage = window.location.pathname === '/' || window.location.pathname.endsWith('index.html');

      if (!isIndexPage && href && href.startsWith('#')) {
        // Redirect to index.html with the appropriate anchor
        e.preventDefault();
        window.location.href = '/' + href;
        return;
      }

      // If on index page, let the default behavior handle smooth scrolling
      // The CSS handles the smooth scrolling for these links
    });
  });
}

// Validate newsletter email
function validateNewsletterEmail(email, lang = 'en') {
  const validationMessages = {
    en: {
      emailRequired: "Email address is required",
      emailInvalid: "Please enter a valid email address"
    },
    sr: {
      emailRequired: "Email adresa je obavezna",
      emailInvalid: "Molimo unesite važeću email adresu"
    }
  };

  const messages = validationMessages[lang] || validationMessages.en;

  if (!email || !email.trim()) {
    return { isValid: false, message: messages.emailRequired };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.trim())) {
    return { isValid: false, message: messages.emailInvalid };
  }

  return { isValid: true };
}

// Show newsletter field error (only visual - red border)
function showNewsletterFieldError(input) {
  if (!input) return;
  input.classList.add('error');
}

// Clear newsletter field error
function clearNewsletterFieldError(input) {
  if (!input) return;
  input.classList.remove('error');
}

// Get error notification for newsletter
function getNewsletterErrorNotification(lang) {
  const texts = {
    en: {
      title: "An error occurred",
      message: "Your subscription could not be processed. Please try again."
    },
    sr: {
      title: "Došlo je do greške",
      message: "Vaša pretplata nije mogla biti obrađena. Molimo pokušajte ponovo."
    }
  };
  return texts[lang] || texts.en;
}

// Initialize newsletter form
function initializeNewsletterForm() {
  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    const emailInput = newsletterForm.querySelector('input[type="email"]');
    const submitButton = newsletterForm.querySelector('button[type="submit"]');
    
    if (!emailInput || !submitButton) return;

    // Clear error on input
    emailInput.addEventListener('input', function() {
      clearNewsletterFieldError(this);
    });

    newsletterForm.addEventListener('submit', async function(e) {
      e.preventDefault();
      
      const email = emailInput.value.trim();
      const currentLang = localStorage.getItem('lang') || 'en';
      
      // Clear previous errors
      clearNewsletterFieldError(emailInput);
      
      // Validate email
      const validation = validateNewsletterEmail(email, currentLang);
      if (!validation.isValid) {
        showNewsletterFieldError(emailInput);
        emailInput.focus();
        emailInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
        return;
      }

      // Translation texts for loader and notifications
      const loaderTexts = {
        en: {
          title: "Subscribing to newsletter...",
          subtitle: "Please wait, your subscription is being processed."
        },
        sr: {
          title: "Pretplaćujem na newsletter...",
          subtitle: "Trenutak, vaša pretplata se obrađuje."
        }
      };

      const loaderText = loaderTexts[currentLang] || loaderTexts.en;

      // Get success/error texts
      const successTexts = {
        en: {
          title: "Successfully subscribed!",
          message: "Thank you for subscribing! Please check your email for confirmation."
        },
        sr: {
          title: "Uspešno pretplaćeno!",
          message: "Hvala vam na pretplati! Molimo proverite vašu email adresu za potvrdu."
        }
      };
      const successText = successTexts[currentLang] || successTexts.en;
      const errorText = getNewsletterErrorNotification(currentLang);

      // Create loading overlay with friendly message
      const loadingOverlay = document.createElement('div');
      loadingOverlay.className = 'form-submit-modal';
      loadingOverlay.innerHTML = `
        <div class="modal-backdrop" style="
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 99999;
          animation: fadeIn 0.3s ease-out;
        ">
          <div class="modal-content" style="
            background: #ffffff;
            padding: 48px 56px;
            border-radius: 20px;
            text-align: center;
            box-shadow: 0 25px 70px rgba(0, 0, 0, 0.4);
            animation: scaleIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
            max-width: 420px;
            width: calc(100% - 40px);
            margin: 20px;
            position: relative;
          ">
            <div class="modal-icon-container" style="
              display: flex;
              justify-content: center;
              align-items: center;
              margin-bottom: 24px;
            ">
              <svg class="loading-icon" width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" style="display: block; margin: 0 auto; max-width: 100%; height: auto;">
                <circle cx="40" cy="40" r="36" stroke="#FDB913" stroke-width="4" stroke-opacity="0.2"/>
                <circle cx="40" cy="40" r="36" stroke="#FDB913" stroke-width="4" stroke-linecap="round" stroke-dasharray="226" stroke-dashoffset="56.5">
                  <animateTransform attributeName="transform" type="rotate" from="0 40 40" to="360 40 40" dur="1s" repeatCount="indefinite"/>
                </circle>
                <!-- Clock hands -->
                <line x1="40" y1="40" x2="40" y2="28" stroke="#FDB913" stroke-width="3" stroke-linecap="round"/>
                <line x1="40" y1="40" x2="52" y2="40" stroke="#FDB913" stroke-width="3" stroke-linecap="round"/>
              </svg>
              <svg class="success-icon" width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" style="display: none; margin: 0 auto; max-width: 100%; height: auto;">
                <circle cx="40" cy="40" r="36" fill="#46841E" opacity="0.15"/>
                <circle cx="40" cy="40" r="32" fill="#46841E"/>
                <path d="M28 40L36 48L52 32" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <svg class="error-icon" width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" style="display: none; margin: 0 auto; max-width: 100%; height: auto;">
                <circle cx="40" cy="40" r="36" fill="#C51919" opacity="0.15"/>
                <circle cx="40" cy="40" r="32" fill="#C51919"/>
                <path d="M40 28v24M40 52v.01" stroke="white" stroke-width="4" stroke-linecap="round"/>
              </svg>
            </div>
            <h3 class="modal-title" style="
              margin: 0 0 12px 0;
              font-size: 24px;
              font-weight: 700;
              color: #000000;
              letter-spacing: -0.5px;
            ">${loaderText.title}</h3>
            <p class="modal-message" style="
              margin: 0;
              font-size: 16px;
              color: #666666;
              line-height: 1.5;
            ">${loaderText.subtitle}</p>
          </div>
        </div>
        <style>
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes fadeOut {
            from { opacity: 1; }
            to { opacity: 0; }
          }
          @keyframes scaleIn {
            from { transform: scale(0.85); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
          }
          @keyframes checkmarkDraw {
            0% { stroke-dashoffset: 50; opacity: 0; }
            50% { opacity: 1; }
            100% { stroke-dashoffset: 0; }
          }
          @keyframes iconBounce {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
          }
          .modal-content.transitioning {
            animation: scaleIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          }
          .modal-icon-container {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 24px;
          }
          .loading-icon {
            display: block;
            margin: 0 auto;
          }
          .success-icon,
          .error-icon {
            margin: 0 auto;
          }
          .success-icon path,
          .error-icon path {
            stroke-dasharray: 50;
            stroke-dashoffset: 50;
            animation: checkmarkDraw 0.6s ease-out forwards;
          }
          .success-icon circle,
          .error-icon circle {
            animation: iconBounce 0.5s ease-out;
          }
          @media (max-width: 768px) {
            .modal-backdrop {
              padding: 15px !important;
            }
            .modal-content {
              padding: 32px 24px !important;
              border-radius: 16px !important;
              max-width: calc(100% - 30px) !important;
              width: calc(100% - 30px) !important;
              margin: 15px !important;
            }
            .modal-icon-container {
              margin-bottom: 20px !important;
            }
            .loading-icon,
            .success-icon,
            .error-icon {
              width: 60px !important;
              height: 60px !important;
            }
            .modal-title {
              font-size: 20px !important;
              margin-bottom: 10px !important;
            }
            .modal-message {
              font-size: 14px !important;
            }
          }
          @media (max-width: 480px) {
            .modal-backdrop {
              padding: 10px !important;
            }
            .modal-content {
              padding: 24px 20px !important;
              border-radius: 12px !important;
              max-width: calc(100% - 20px) !important;
              width: calc(100% - 20px) !important;
              margin: 10px !important;
            }
            .modal-icon-container {
              margin-bottom: 16px !important;
            }
            .loading-icon,
            .success-icon,
            .error-icon {
              width: 50px !important;
              height: 50px !important;
            }
            .modal-title {
              font-size: 18px !important;
              margin-bottom: 8px !important;
            }
            .modal-message {
              font-size: 13px !important;
              line-height: 1.4 !important;
            }
          }
        </style>
      `;
      document.body.appendChild(loadingOverlay);
      
      const modalContent = loadingOverlay.querySelector('.modal-content');
      const modalTitle = loadingOverlay.querySelector('.modal-title');
      const modalMessage = loadingOverlay.querySelector('.modal-message');
      const loadingIcon = loadingOverlay.querySelector('.loading-icon');
      const successIcon = loadingOverlay.querySelector('.success-icon');
      const errorIcon = loadingOverlay.querySelector('.error-icon');

      // Disable submit button
      submitButton.disabled = true;

      try {
        const response = await fetch('/api/newsletter', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: email,
            language: currentLang
          })
        });

        const result = await response.json();

        // Transform loading modal to success/error with smooth animation
        setTimeout(() => {
          // Animate loading icon fade out and scale down
          loadingIcon.style.transition = 'opacity 0.4s ease-out, transform 0.4s ease-out';
          loadingIcon.style.opacity = '0';
          loadingIcon.style.transform = 'scale(0.8)';
          
          // After loading icon fades out, show success/error
          setTimeout(() => {
            loadingIcon.style.display = 'none';
            
            if (result.success) {
              // Show success state with animation
              successIcon.style.display = 'block';
              successIcon.style.opacity = '0';
              successIcon.style.transform = 'scale(0.5)';
              successIcon.style.transition = 'opacity 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)';
              
              // Trigger animation
              requestAnimationFrame(() => {
                successIcon.style.opacity = '1';
                successIcon.style.transform = 'scale(1)';
              });
              
              // Animate text change
              modalTitle.style.opacity = '0';
              modalTitle.style.transform = 'translateY(10px)';
              modalTitle.textContent = successText.title;
              modalTitle.style.color = '#2d5016';
              
              modalMessage.style.opacity = '0';
              modalMessage.style.transform = 'translateY(10px)';
              modalMessage.textContent = successText.message;
              modalMessage.style.color = '#3d6820';
              
              // Fade in text
              requestAnimationFrame(() => {
                modalTitle.style.transition = 'opacity 0.5s ease-out 0.2s, transform 0.5s ease-out 0.2s';
                modalMessage.style.transition = 'opacity 0.5s ease-out 0.3s, transform 0.5s ease-out 0.3s';
                modalTitle.style.opacity = '1';
                modalTitle.style.transform = 'translateY(0)';
                modalMessage.style.opacity = '1';
                modalMessage.style.transform = 'translateY(0)';
              });
              
              // Reset form
              emailInput.value = '';
              
              // Close modal after 5 seconds (success)
              setTimeout(() => {
                const backdrop = loadingOverlay.querySelector('.modal-backdrop');
                backdrop.style.animation = 'fadeOut 0.3s ease-out';
                setTimeout(() => {
                  loadingOverlay.remove();
                }, 300);
              }, 5000);
            } else {
              // Show error state with animation
              errorIcon.style.display = 'block';
              errorIcon.style.opacity = '0';
              errorIcon.style.transform = 'scale(0.5)';
              errorIcon.style.transition = 'opacity 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)';
              
              // Trigger animation
              requestAnimationFrame(() => {
                errorIcon.style.opacity = '1';
                errorIcon.style.transform = 'scale(1)';
              });
              
              // Animate text change
              modalTitle.style.opacity = '0';
              modalTitle.style.transform = 'translateY(10px)';
              modalTitle.textContent = errorText.title;
              modalTitle.style.color = '#7d1212';
              
              modalMessage.style.opacity = '0';
              modalMessage.style.transform = 'translateY(10px)';
              modalMessage.textContent = result.message || errorText.message;
              modalMessage.style.color = '#9d1a1a';
              
              // Fade in text
              requestAnimationFrame(() => {
                modalTitle.style.transition = 'opacity 0.5s ease-out 0.2s, transform 0.5s ease-out 0.2s';
                modalMessage.style.transition = 'opacity 0.5s ease-out 0.3s, transform 0.5s ease-out 0.3s';
                modalTitle.style.opacity = '1';
                modalTitle.style.transform = 'translateY(0)';
                modalMessage.style.opacity = '1';
                modalMessage.style.transform = 'translateY(0)';
              });
              
              // Close modal after 4 seconds (error)
              setTimeout(() => {
                const backdrop = loadingOverlay.querySelector('.modal-backdrop');
                backdrop.style.animation = 'fadeOut 0.3s ease-out';
                setTimeout(() => {
                  loadingOverlay.remove();
                }, 300);
              }, 4000);
            }
          }, 400);
          
        }, 300);

      } catch (error) {
        console.error('Newsletter subscription error:', error);
        
        // Transform loading modal to error with smooth animation
        setTimeout(() => {
          // Animate loading icon fade out and scale down
          loadingIcon.style.transition = 'opacity 0.4s ease-out, transform 0.4s ease-out';
          loadingIcon.style.opacity = '0';
          loadingIcon.style.transform = 'scale(0.8)';
          
          // After loading icon fades out, show error
          setTimeout(() => {
            loadingIcon.style.display = 'none';
            
            // Show error state with animation
            errorIcon.style.display = 'block';
            errorIcon.style.opacity = '0';
            errorIcon.style.transform = 'scale(0.5)';
            errorIcon.style.transition = 'opacity 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)';
            
            // Trigger animation
            requestAnimationFrame(() => {
              errorIcon.style.opacity = '1';
              errorIcon.style.transform = 'scale(1)';
            });
            
            // Animate text change
            modalTitle.style.opacity = '0';
            modalTitle.style.transform = 'translateY(10px)';
            modalTitle.textContent = errorText.title;
            modalTitle.style.color = '#7d1212';
            
            modalMessage.style.opacity = '0';
            modalMessage.style.transform = 'translateY(10px)';
            modalMessage.textContent = errorText.message;
            modalMessage.style.color = '#9d1a1a';
            
            // Fade in text
            requestAnimationFrame(() => {
              modalTitle.style.transition = 'opacity 0.5s ease-out 0.2s, transform 0.5s ease-out 0.2s';
              modalMessage.style.transition = 'opacity 0.5s ease-out 0.3s, transform 0.5s ease-out 0.3s';
              modalTitle.style.opacity = '1';
              modalTitle.style.transform = 'translateY(0)';
              modalMessage.style.opacity = '1';
              modalMessage.style.transform = 'translateY(0)';
            });
            
            // Close modal after 4 seconds (error)
            setTimeout(() => {
              const backdrop = loadingOverlay.querySelector('.modal-backdrop');
              backdrop.style.animation = 'fadeOut 0.3s ease-out';
              setTimeout(() => {
                loadingOverlay.remove();
              }, 300);
            }, 4000);
          }, 400);
        }, 300);
      } finally {
        // Re-enable submit button
        setTimeout(() => {
          submitButton.disabled = false;
        }, 300);
      }
    });
  }
}

// Scroll to Top Button HTML
const scrollToTopHTML = `
    <!-- Scroll to Top Button -->
    <button id="scrollToTopBtn" class="scroll-to-top-btn" aria-label="Scroll to top">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M18 15l-6-6-6 6"/>
      </svg>
    </button>
`;

// Load scroll to top button
function loadScrollToTopButton() {
  // Check if button already exists
  if (!document.getElementById('scrollToTopBtn')) {
    document.body.insertAdjacentHTML('beforeend', scrollToTopHTML);
    initializeScrollToTopButton();
  }
}

// Initialize scroll to top button functionality
function initializeScrollToTopButton() {
  const scrollToTopBtn = document.getElementById('scrollToTopBtn');
  
  if (scrollToTopBtn) {
    let isVisible = false;
    
    // Show/hide button based on scroll position
    function toggleScrollButton() {
      if (window.pageYOffset > 300) {
        if (!isVisible) {
          isVisible = true;
          scrollToTopBtn.classList.remove('hiding');
          scrollToTopBtn.classList.add('show');
        }
      } else {
        if (isVisible) {
          isVisible = false;
          scrollToTopBtn.classList.remove('show');
          scrollToTopBtn.classList.add('hiding');
          
          // Remove hiding class after animation completes
          setTimeout(() => {
            if (!isVisible) {
              scrollToTopBtn.classList.remove('hiding');
            }
          }, 400);
        }
      }
    }
    
    // Initial check
    toggleScrollButton();
    
    // Listen for scroll events
    window.addEventListener('scroll', toggleScrollButton);
    
    // Smooth scroll to top on click
    scrollToTopBtn.addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
}

// Initialize YouTube toast notification
function initializeYouTubeToast() {
  const youtubeIcon = document.querySelector('a.footer-social-icon[aria-label="YouTube"]');
  
  if (youtubeIcon) {
    youtubeIcon.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Get current language
      const currentLang = localStorage.getItem('lang') || 'en';
      const message = currentLang === 'sr' 
        ? 'Hvala na interesovanju! 🎬 Radimo na tome da uskoro budemo i na YouTube-u. Pratite nas za najnovije vesti!' 
        : 'Thanks for your interest! 🎬 We\'re working on bringing our content to YouTube soon. Stay tuned for updates!';
      
      // Create toast container if it doesn't exist
      let toastContainer = document.getElementById('youtube-toast-container');
      if (!toastContainer) {
        toastContainer = document.createElement('div');
        toastContainer.id = 'youtube-toast-container';
        toastContainer.className = 'toast-container';
        // Ensure fixed positioning with high z-index
        toastContainer.style.position = 'fixed';
        toastContainer.style.bottom = '0';
        toastContainer.style.right = '0';
        toastContainer.style.zIndex = '99999';
        toastContainer.style.padding = '20px';
        toastContainer.style.pointerEvents = 'none';
        document.body.appendChild(toastContainer);
      }
      
      // Create toast element
      const toastElement = document.createElement('div');
      toastElement.className = 'toast skynex-toast';
      toastElement.setAttribute('role', 'alert');
      toastElement.setAttribute('aria-live', 'assertive');
      toastElement.setAttribute('aria-atomic', 'true');
      toastElement.innerHTML = `
        <div class="toast-header skynex-toast-header">
          <strong class="me-auto">Skynex Global</strong>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div class="toast-body skynex-toast-body">
          ${message}
        </div>
      `;
      
      toastContainer.appendChild(toastElement);
      
      // Initialize and show toast (check if Bootstrap is available)
      if (typeof bootstrap !== 'undefined' && bootstrap.Toast) {
        const toast = new bootstrap.Toast(toastElement, {
          autohide: true,
          delay: 5000
        });
        
        toast.show();
        
        // Remove toast element after it's hidden
        toastElement.addEventListener('hidden.bs.toast', function() {
          toastElement.remove();
        });
      } else {
        // Fallback if Bootstrap is not loaded yet
        console.warn('Bootstrap Toast not available');
        toastElement.style.display = 'block';
        setTimeout(() => {
          toastElement.style.opacity = '0';
          setTimeout(() => toastElement.remove(), 300);
        }, 5000);
      }
    });
  }
}

// Load header and footer when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  loadHeader();
  loadFooter();
  loadScrollToTopButton();
});

