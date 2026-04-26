// Products Page Translation and Functionality

const productsTranslations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      ecosystem: "Ecosystem",
      network: "Network",
      contact: "Contact",
    },
    lang: {
      en: "EN",
      sr: "SR",
    },
    hero: {
      title: "PRODUCTS",
    },
    description: "Easy Aerial is listed on the DIU's Blue Clear List and is an ISO9001 and AS9100 certified company. All products are NDAA compliant.",
    cards: [
      {
        subtitle: "Easy Mobile",
        description: "Designed for mounted deployments on vehicles and vessels, the system can be installed on vehicles such as mobile command units, first responder vehicles and armored personnel carriers.",
        readMore: "Read More",
      },
      {
        subtitle: "Easy Site",
        description: "Easy Site Inspection systems are designed for ground operations that require a more robust payload capacity, as opposed to our Easy Mobile systems which provide rugged solutions with lighter payload capacity for on the move operations.",
        readMore: "Read More",
      },
      {
        subtitle: "Spare Parts – Coming Soon",
        description: "Contact us to discuss custom parts or early collaboration opportunities",
        readMore: "Read More",
      },
    ],
    easySite: {
      title: "SPECIFICATIONS",
      equipmentTitle: "SYSTEM EQUIPMENT",
      equipmentDescription: "CAMERA COMBINATION CAN BE CHOSEN",
      close: "Close",
    },
    thirdCard: {
      close: "Close",
    },
    specifications: {
      title: "SPECIFICATIONS:",
      description: "Designed for mounted deployments on vehicles and vessels, the system can be installed on vehicles such as mobile command units, first responder vehicles and armored personnel carriers.",
      idealTitle: "IDEAL FOR:",
      idealList: [
        "Large area surveillance",
        "Patrolling",
        "Incident response",
      ],
      componentsTitle: "System Components:",
      componentsDescription: "The system can be installed on such vehicles as mobile command units, first responder vehicles and armored personnel carriers.",
      equipmentTitle: "SYSTEM EQUIPMENT:",
      equipmentDescription: "CAMERA COMBINATION CAN BE CHOSEN",
      close: "Close",
      sliderAlt: ["Slider 1", "Slider 2", "Slider 3"],
      imageTitles: ["Component 1", "Component 2", "Component 3"],
    },
    footer: {
      createdText: "Created in Serbia.<br>Designed for the world.",
      location: "Belgrade, Serbia",
      contactEmail: "info@skynexg.com",
      explore: "EXPLORE",
      contact: "CONTACT / INFO",
      iris: "IRIS Education",
      buzzy: "Buzzy Global Media",
      skynex: "Skynex Technologies",
      contactUs: "Contact Us",
      careers: "Career",
      media: "Media",
      legal: "Legal",
      copyright: "© 2026 Skynex. All rights reserved.",
    },
  },
  sr: {
    nav: {
      home: "Home",
      about: "O nama",
      ecosystem: "Ekosistem",
      network: "Mreža",
      contact: "Kontakt",
    },
    lang: {
      en: "EN",
      sr: "SR",
    },
    hero: {
      title: "PROIZVODI",
    },
    description: "Easy Aerial je na DIU Blue Clear listi i ISO9001 i AS9100 sertifikovana kompanija. Svi proizvodi su NDAA usaglašeni.",
    cards: [
      {
        subtitle: "Easy Mobile",
        description: "Dizajniran za ugradnju na vozila i plovila, sistem se može instalirati na vozila kao što su mobilne komandne jedinice, vozila hitnih službi i oklopni transporteri.",
        readMore: "Pročitaj više",
      },
      {
        subtitle: "Easy Site",
        description: "Easy Site inspekcijski sistemi su dizajnirani za zemaljske operacije koje zahtevaju robusniji kapacitet tereta, za razliku od naših Easy Mobile sistema koji pružaju otporna rešenja sa lakšim kapacitetom tereta za operacije u pokretu.",
        readMore: "Pročitaj više",
      },
      {
        subtitle: "Rezervni delovi – Uskoro",
        description: "Kontaktirajte nas da razgovaramo o prilagođenim delovima ili mogućnostima rane saradnje",
        readMore: "Pročitaj više",
      },
    ],
    easySite: {
      title: "SPECIFIKACIJE",
      equipmentTitle: "OPREMA KOJA PRATI SISTEM",
      equipmentDescription: "KOMBINACIJA KAMERA MOŽE DA SE BIRA",
      close: "Zatvori",
    },
    thirdCard: {
      close: "Zatvori",
    },
    specifications: {
      title: "SPECIFIKACIJE:",
      description: "Dizajniran za ugradnju na vozila i plovila, sistem se može instalirati na vozila kao što su mobilne komandne jedinice, vozila hitnih službi i oklopni transporteri.",
      idealTitle: "IDEALNO ZA:",
      idealList: [
        "Nadzor velikih teritorija",
        "Patroliranje",
        "Incident response",
      ],
      componentsTitle: "Komponente sistema:",
      componentsDescription: "Sistem se može instalirati na vozila kao što su mobilne komandne jedinice, vozila hitnih službi i oklopni transporteri.",
      equipmentTitle: "OPREMA KOJA PRATI SISTEM:",
      equipmentDescription: "KOMBINACIJA SA KAMERAMA MOŽE DA SE BIRA",
      close: "Zatvori",
      sliderAlt: ["Slajd 1", "Slajd 2", "Slajd 3"],
      imageTitles: ["Komponenta 1", "Komponenta 2", "Komponenta 3"],
    },
    footer: {
      createdText: "Kreirano u Srbiji.<br>Dizajnirano za svet.",
      location: "Beograd, Srbija",
      contactEmail: "info@skynexg.com",
      explore: "ISTRAŽI",
      contact: "KONTAKT / INFO",
      iris: "IRIS Education",
      buzzy: "Buzzy Global Media",
      skynex: "Skynex Technologies",
      contactUs: "Kontaktiraj nas",
      careers: "Karijera",
      media: "Mediji",
      legal: "Pravno",
      copyright: "© 2026 Skynex. Sva prava zadržana.",
    },
  },
};

function translateProductsPage(lang) {
  const t = productsTranslations[lang];

  // Navigation
  const navOrder = ["home", "about", "ecosystem", "network", "contact"];
  const navLinks = document.querySelectorAll(
    '.wp-block-navigation__container .wp-block-navigation-item__label, .mobile-menu ul li a'
  );
  const orderLength = navOrder.length;
  if (!orderLength) {
    console.warn('Navigation order is empty in translateProductsPage');
  } else {
    navLinks.forEach((a, i) => {
      const key = navOrder[i % orderLength];
      if (t.nav[key]) a.textContent = t.nav[key];
    });
  }

  // Language selectors
  const desktopLangSelect = document.getElementById('languageSelect');
  const mobileLangSelect = document.getElementById('mobileLanguageSelect');
  if (desktopLangSelect) {
    desktopLangSelect.value = lang;
    desktopLangSelect.querySelectorAll('option').forEach(opt => {
      opt.textContent = t.lang[opt.value];
    });
  }
  if (mobileLangSelect) {
    mobileLangSelect.value = lang;
    mobileLangSelect.querySelectorAll('option').forEach(opt => {
      opt.textContent = t.lang[opt.value];
    });
  }

  // Hero title
  const productsTitle = document.querySelector('.products-title');
  if (productsTitle) productsTitle.textContent = t.hero.title;

  // Description
  const productsText = document.querySelector('.products-text');
  if (productsText) productsText.textContent = t.description;

  // Product cards
  const productCards = document.querySelectorAll('.product-card');
  t.cards.forEach((cardData, i) => {
    const card = productCards[i];
    if (!card) return;
    const subtitle = card.querySelector('.product-card-subtitle');
    const description = card.querySelector('.product-card-description');
    const readMoreBtn = card.querySelector('.read-more-btn');
    if (subtitle) subtitle.textContent = cardData.subtitle;
    if (description) description.textContent = cardData.description;
    if (readMoreBtn) readMoreBtn.textContent = cardData.readMore;
  });

  // Easy Site
  const easySiteTitle = document.querySelector('.easy-site-title');
  if (easySiteTitle) easySiteTitle.textContent = t.easySite.title;
  const easySiteEquipmentTitle = document.querySelector('.easy-site-equipment-title');
  if (easySiteEquipmentTitle) easySiteEquipmentTitle.textContent = t.easySite.equipmentTitle;
  const easySiteEquipmentDescription = document.querySelector('.easy-site-equipment-description');
  if (easySiteEquipmentDescription) easySiteEquipmentDescription.textContent = t.easySite.equipmentDescription;
  const easySiteCloseBtn = document.querySelector('#easySiteSpecifications .close-btn');
  if (easySiteCloseBtn) easySiteCloseBtn.textContent = t.easySite.close;

  // Third Card
  const thirdCardCloseBtn = document.querySelector('#thirdCardSpecifications .close-btn');
  if (thirdCardCloseBtn) thirdCardCloseBtn.textContent = t.thirdCard.close;

  // Specifications section
  const specSection = document.getElementById('specificationsSection');
  if (specSection) {
    const specTitle = specSection.querySelector('.spec-title');
    if (specTitle) specTitle.textContent = t.specifications.title;
    const specDesc = specSection.querySelector('.spec-description');
    if (specDesc) specDesc.textContent = t.specifications.description;
    const idealTitle = specSection.querySelector('.ideal-title');
    if (idealTitle) idealTitle.textContent = t.specifications.idealTitle;
    const idealList = specSection.querySelector('.ideal-list');
    if (idealList) {
      idealList.innerHTML = "";
      t.specifications.idealList.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        idealList.appendChild(li);
      });
    }
    const componentsTitle = specSection.querySelector('.components-title');
    if (componentsTitle) componentsTitle.textContent = t.specifications.componentsTitle;
    const componentsDesc = specSection.querySelector('.components-description');
    if (componentsDesc) componentsDesc.textContent = t.specifications.componentsDescription;
    const equipmentTitle = specSection.querySelector('.equipment-title');
    if (equipmentTitle) equipmentTitle.textContent = t.specifications.equipmentTitle;
    const equipmentDesc = specSection.querySelector('.equipment-description');
    if (equipmentDesc) equipmentDesc.textContent = t.specifications.equipmentDescription;
    const specCloseBtn = specSection.querySelector('.close-btn');
    if (specCloseBtn) specCloseBtn.textContent = t.specifications.close;
    // Slider alt texts
    const sliderImages = specSection.querySelectorAll('.slider-image');
    sliderImages.forEach((img, idx) => {
      if (t.specifications.sliderAlt[idx]) img.alt = t.specifications.sliderAlt[idx];
    });
    // Image titles
    const imageTitles = specSection.querySelectorAll('.images-row .image-title');
    imageTitles.forEach((div, idx) => {
      if (t.specifications.imageTitles[idx]) div.textContent = t.specifications.imageTitles[idx];
    });
  }

  // Footer Translations
  const footerCreatedText = document.getElementById('footerCreatedText');
  if (footerCreatedText) footerCreatedText.innerHTML = t.footer.createdText;

  const footerLocation = document.getElementById('footerLocation');
  if (footerLocation) footerLocation.textContent = t.footer.location;

  const footerContactEmail = document.getElementById('footerContactEmail');
  if (footerContactEmail) {
    footerContactEmail.textContent = t.footer.contactEmail;
    footerContactEmail.href = `mailto:${t.footer.contactEmail}`;
  }

  const footerExplore = document.getElementById('footerExplore');
  if (footerExplore) footerExplore.textContent = t.footer.explore;

  const footerContact = document.getElementById('footerContact');
  if (footerContact) footerContact.textContent = t.footer.contact;

  const footerLinkIRIS = document.getElementById('footerLinkIRIS');
  if (footerLinkIRIS) footerLinkIRIS.textContent = t.footer.iris;

  const footerLinkBuzzy = document.getElementById('footerLinkBuzzy');
  if (footerLinkBuzzy) footerLinkBuzzy.textContent = t.footer.buzzy;

  const footerLinkSkynex = document.getElementById('footerLinkSkynex');
  if (footerLinkSkynex) footerLinkSkynex.textContent = t.footer.skynex;

  const footerLinkContactUs = document.getElementById('footerLinkContactUs');
  if (footerLinkContactUs) footerLinkContactUs.textContent = t.footer.contactUs;

  const footerLinkCareers = document.getElementById('footerLinkCareers');
  if (footerLinkCareers) footerLinkCareers.textContent = t.footer.careers;

  const footerLinkMedia = document.getElementById('footerLinkMedia');
  if (footerLinkMedia) footerLinkMedia.textContent = t.footer.media;

  const footerLinkLegal = document.getElementById('footerLinkLegal');
  if (footerLinkLegal) footerLinkLegal.textContent = t.footer.legal;

  const footerCopyright = document.getElementById('footerCopyright');
  if (footerCopyright) footerCopyright.textContent = t.footer.copyright;
}

// Convert Cyrillic to Latin
function convertCyrillicToLatin(text) {
  const cyrillicToLatin = {
    'А': 'A', 'а': 'a',
    'Б': 'B', 'б': 'b',
    'В': 'V', 'в': 'v',
    'Г': 'G', 'г': 'g',
    'Д': 'D', 'д': 'd',
    'Ђ': 'Đ', 'ђ': 'đ',
    'Е': 'E', 'е': 'e',
    'Ж': 'Ž', 'ж': 'ž',
    'З': 'Z', 'з': 'z',
    'И': 'I', 'и': 'i',
    'Ј': 'J', 'ј': 'j',
    'К': 'K', 'к': 'k',
    'Л': 'L', 'л': 'l',
    'Љ': 'Lj', 'љ': 'lj',
    'М': 'M', 'м': 'm',
    'Н': 'N', 'н': 'n',
    'Њ': 'Nj', 'њ': 'nj',
    'О': 'O', 'о': 'o',
    'П': 'P', 'п': 'p',
    'Р': 'R', 'р': 'r',
    'С': 'S', 'с': 's',
    'Т': 'T', 'т': 't',
    'Ћ': 'Ć', 'ћ': 'ć',
    'У': 'U', 'у': 'u',
    'Ф': 'F', 'ф': 'f',
    'Х': 'H', 'х': 'h',
    'Ц': 'C', 'ц': 'c',
    'Ч': 'Č', 'ч': 'č',
    'Џ': 'Dž', 'џ': 'dž',
    'Ш': 'Š', 'ш': 'š'
  };
  
  return text.split('').map(char => cyrillicToLatin[char] || char).join('');
}

// Load countries from REST Countries API for products page
function loadCountries(lang) {
  const countrySelect = document.getElementById('pCountry');
  if (!countrySelect) return;

  // Fallback country list in both languages
  const fallbackCountries = {
    en: [
      "Serbia", "United States", "United Kingdom", "Germany", "France", 
      "Italy", "Spain", "Canada", "Australia", "Austria", "Belgium", 
      "Bulgaria", "Croatia", "Cyprus", "Czech Republic", "Denmark", 
      "Estonia", "Finland", "Greece", "Hungary", "Ireland", "Latvia", 
      "Lithuania", "Luxembourg", "Malta", "Netherlands", "Poland", 
      "Portugal", "Romania", "Slovakia", "Slovenia", "Sweden", 
      "Albania", "Bosnia and Herzegovina", "Montenegro", "North Macedonia"
    ],
    sr: [
      "Srbija", "Sjedinjene Americke Drzave", "Ujedinjeno Kraljevstvo", 
      "Nemacka", "Francuska", "Italija", "Spanija", "Kanada", "Australija", 
      "Austrija", "Belgija", "Bugarska", "Hrvatska", "Kipar", "Ceska", 
      "Danska", "Estonija", "Finska", "Grcka", "Madarska", "Irska", 
      "Letonija", "Litvanija", "Luksemburg", "Malta", "Holandija", 
      "Poljska", "Portugalija", "Rumunija", "Slovacka", "Slovenija", 
      "Svedska", "Albanija", "Bosna i Hercegovina", "Crna Gora", 
      "Severna Makedonija"
    ]
  };

  // Try to fetch from REST Countries API
  fetch('https://restcountries.com/v3.1/all?fields=name,translations')
    .then(response => {
      if (!response.ok) throw new Error('API request failed');
      return response.json();
    })
    .then(data => {
      // Sort countries alphabetically
      const countries = data
        .map(country => {
          // Get country name based on language
          if (lang === 'sr') {
            // Get Serbian translation and convert from Cyrillic to Latin
            const serbianName = country.translations?.srp?.common || 
                               country.translations?.srp?.official || 
                               country.name.common;
            return convertCyrillicToLatin(serbianName);
          } else {
            // English
            return country.name.common;
          }
        })
        .sort((a, b) => a.localeCompare(b, lang === 'sr' ? 'sr' : 'en'));

      // Populate select with countries
      countrySelect.innerHTML = '';
      
      // Add Serbia/Srbija first
      const serbiaName = lang === 'sr' ? 'Srbija' : 'Serbia';
      const serbiaOption = document.createElement('option');
      serbiaOption.value = serbiaName;
      serbiaOption.textContent = serbiaName;
      countrySelect.appendChild(serbiaOption);

      // Add all other countries
      countries.forEach(countryName => {
        if (countryName !== serbiaName && countryName.toLowerCase() !== 'serbia' && countryName.toLowerCase() !== 'srbija') {
          const option = document.createElement('option');
          option.value = countryName;
          option.textContent = countryName;
          countrySelect.appendChild(option);
        }
      });
    })
    .catch(error => {
      console.warn('Failed to load countries from API, using fallback list:', error);
      // Use fallback list
      const countries = fallbackCountries[lang] || fallbackCountries.en;
      countrySelect.innerHTML = '';
      countries.forEach(countryName => {
        const option = document.createElement('option');
        option.value = countryName;
        option.textContent = countryName;
        countrySelect.appendChild(option);
      });
    });
}

// Init
document.addEventListener('DOMContentLoaded', function () {
  let lang = localStorage.getItem('lang') || 'en';
  translateProductsPage(lang);
  loadCountries(lang); // Load countries on page load

  const desktopLanguageSelect = document.getElementById('languageSelect');
  const mobileLanguageSelect = document.getElementById('mobileLanguageSelect');

  function handleLangChange(e) {
    const lang = e.target.value;
    translateProductsPage(lang);
    loadCountries(lang); // Reload countries when language changes
    localStorage.setItem('lang', lang);
    if (desktopLanguageSelect) desktopLanguageSelect.value = lang;
    if (mobileLanguageSelect) mobileLanguageSelect.value = lang;
  }

  if (desktopLanguageSelect) desktopLanguageSelect.addEventListener('change', handleLangChange);
  if (mobileLanguageSelect) mobileLanguageSelect.addEventListener('change', handleLangChange);

  // Mobile menu
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
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');
    mobileMenuLinks.forEach(link => {
      link.addEventListener('click', function() {
        hamburgerBtn.classList.remove('active');
        mobileMenu.classList.remove('active');
      });
    });
    document.addEventListener('click', function(event) {
      if (!hamburgerBtn.contains(event.target) && !mobileMenu.contains(event.target)) {
        hamburgerBtn.classList.remove('active');
        mobileMenu.classList.remove('active');
      }
    });
  }
});

// Read More
function handleReadMore(cardId) {
  if (cardId === 'card1') {
    // Show specifications section for first card
    const specsSection = document.getElementById('specificationsSection');
    const firstCard = document.querySelector('.product-card');
    
    if (specsSection && firstCard) {
      // Move the specifications section right after the first card
      firstCard.parentNode.insertBefore(specsSection, firstCard.nextSibling);
      
      specsSection.classList.add('active');
      
      // Scroll to specifications with a slight delay for animation
      setTimeout(() => {
        specsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  } else if (cardId === 'card2') {
    // Show Easy Site specifications for second card
    const easySiteSection = document.getElementById('easySiteSpecifications');
    const secondCard = document.querySelectorAll('.product-card')[1];
    
    if (easySiteSection && secondCard) {
      // Move the Easy Site section right after the second card
      secondCard.parentNode.insertBefore(easySiteSection, secondCard.nextSibling);
      
      easySiteSection.classList.add('active');
      
      // Scroll to Easy Site specifications with a slight delay for animation
      setTimeout(() => {
        easySiteSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  } else if (cardId === 'card3') {
    // Show third card specifications
    const thirdCardSection = document.getElementById('thirdCardSpecifications');
    const thirdCard = document.querySelectorAll('.product-card')[2];
    
    if (thirdCardSection && thirdCard) {
      // Move the third card section right after the third card
      thirdCard.parentNode.insertBefore(thirdCardSection, thirdCard.nextSibling);
      
      thirdCardSection.classList.add('active');
      
      // Scroll to third card specifications with a slight delay for animation
      setTimeout(() => {
        thirdCardSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  } else {
    // For other cards, redirect to contact form
    window.location.href = '/#contactForm';
  }
}

// Close specifications section
function closeSpecifications() {
  const specsSection = document.getElementById('specificationsSection');
  if (specsSection) {
    specsSection.classList.remove('active');
    // Scroll back to products section
    document.querySelector('.products-cards-section').scrollIntoView({ behavior: 'smooth' });
  }
}

// Close Easy Site specifications section
function closeEasySiteSpecifications() {
  const easySiteSection = document.getElementById('easySiteSpecifications');
  if (easySiteSection) {
    easySiteSection.classList.remove('active');
    // Scroll back to products section
    document.querySelector('.products-cards-section').scrollIntoView({ behavior: 'smooth' });
  }
}

// Close Third Card specifications section
function closeThirdCardSpecifications() {
  const thirdCardSection = document.getElementById('thirdCardSpecifications');
  if (thirdCardSection) {
    thirdCardSection.classList.remove('active');
    // Scroll back to products section
    document.querySelector('.products-cards-section').scrollIntoView({ behavior: 'smooth' });
  }
}

// Image slider functionality
let slideIndex = 1;

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  const slides = document.querySelectorAll('.slider-image');
  const dots = document.querySelectorAll('.dot');
  
  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }
  
  slides.forEach(slide => slide.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));
  
  if (slides[slideIndex - 1]) slides[slideIndex - 1].classList.add('active');
  if (dots[slideIndex - 1]) dots[slideIndex - 1].classList.add('active');
}

// Auto-advance slider every 5 seconds
setInterval(() => {
  if (document.getElementById('specificationsSection').classList.contains('active')) {
    slideIndex++;
    showSlides(slideIndex);
  }
}, 5000);