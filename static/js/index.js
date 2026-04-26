const getSuccessNotification = (lang) => {
  const texts = {
    en: {
      title: "Successfully forwarded!",
      message: "Your message has been successfully received and forwarded to the relevant team. You will be contacted as soon as possible."
    },
    sr: {
      title: "Uspešno prosleđeno!",
      message: "Vaša poruka je uspešno primljena i prosleđena nadležnom timu. Bićete kontaktirani u najkraćem mogućem roku."
    }
  };
  const text = texts[lang] || texts.en;
  
  return `
  <div style="
    background: linear-gradient(135deg, #d8eacc 0%, #e8f5dc 100%);
    border-left: 4px solid #46841E;
    border-radius: 12px;
    padding: 28px 32px;
    margin-top: 24px;
    animation: slideInUp 0.5s ease-out;
    box-shadow: 0 6px 20px rgba(70, 132, 30, 0.2);
  ">
    <div style="display: flex; align-items: center; gap: 20px;">
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" style="flex-shrink: 0;">
        <circle cx="28" cy="28" r="28" fill="#46841E" opacity="0.15"/>
        <circle cx="28" cy="28" r="24" fill="#46841E"/>
        <path d="M18 28L24 34L38 20" stroke="white" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <div style="flex: 1;">
        <h3 style="
          margin: 0 0 10px 0;
          font-size: 22px;
          font-weight: 700;
          color: #2d5016;
          letter-spacing: -0.4px;
        ">${text.title}</h3>
        <p style="
          margin: 0;
          font-size: 16px;
          color: #3d6820;
          line-height: 1.6;
        ">${text.message}</p>
      </div>
    </div>
  </div>
  <style>
    @keyframes slideInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  </style>
`;
};

const getErrorNotification = (lang) => {
  const texts = {
    en: {
      title: "An error occurred",
      message: "Your form could not be sent. Please check that all fields are properly filled and try again."
    },
    sr: {
      title: "Došlo je do greške",
      message: "Vaš formular nije mogao biti poslat. Molimo proverite da su sva polja pravilno popunjena i pokušajte ponovo."
    }
  };
  const text = texts[lang] || texts.en;
  
  return {
    title: text.title,
    message: text.message
  };
};

const falseNotification = `

  <div style="
    background: linear-gradient(135deg, #ffd3d3 0%, #ffe5e5 100%);
    border-left: 4px solid #C51919;
    border-radius: 12px;
    padding: 28px 32px;
    margin-top: 24px;
    animation: slideInUp 0.5s ease-out;
    box-shadow: 0 6px 20px rgba(197, 25, 25, 0.2);
  ">
    <div style="display: flex; align-items: center; gap: 20px;">
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" style="flex-shrink: 0;">
        <circle cx="28" cy="28" r="28" fill="#C51919" opacity="0.15"/>
        <circle cx="28" cy="28" r="24" fill="#C51919"/>
        <path d="M28 18v12M28 38v.01" stroke="white" stroke-width="3.5" stroke-linecap="round"/>
      </svg>
      <div style="flex: 1;">
        <h3 style="
          margin: 0 0 10px 0;
          font-size: 22px;
          font-weight: 700;
          color: #7d1212;
          letter-spacing: -0.4px;
        ">Došlo je do greške</h3>
        <p style="
          margin: 0;
          font-size: 16px;
          color: #9d1a1a;
          line-height: 1.6;
        ">Vaš formular nije mogao biti poslat. Molimo proverite da su sva polja pravilno popunjena i pokušajte ponovo.</p>
      </div>
    </div>
  </div>








`;

document.addEventListener("DOMContentLoaded", function () {
  // Create hamburger menu only on mobile
  function createHamburgerMenu() {
    if (window.innerWidth <= 767) {
      // Find the navigation container
      const navContainer = document.querySelector(
        ".wp-block-group.is-layout-flex .wp-block-group.is-layout-flex:last-child"
      );

      if (navContainer && !document.querySelector(".hamburger-menu")) {
        // Create hamburger button
        const hamburgerMenu = document.createElement("div");
        hamburgerMenu.className = "hamburger-menu";

        const hamburgerBtn = document.createElement("button");
        hamburgerBtn.className = "hamburger-btn";
        hamburgerBtn.setAttribute("aria-label", "Toggle menu");

        // Create hamburger lines
        for (let i = 0; i < 3; i++) {
          const line = document.createElement("span");
          line.className = "hamburger-line";
          hamburgerBtn.appendChild(line);
        }

        hamburgerMenu.appendChild(hamburgerBtn);

        // Create mobile menu
        const mobileMenu = document.createElement("div");
        mobileMenu.className = "mobile-menu";

        const menuList = document.createElement("ul");

        // Menu items with current language translations
        const currentLang = localStorage.getItem('lang') || 'en';
        const currentTranslations = translations[currentLang];
        
        const menuItems = [
          {
            text: currentTranslations.nav.home,
            href: '#wlcmBcg',
            isSection: true
          },
          {
            text: currentTranslations.nav.about,
            href: '#aboutUsContainer',
            isSection: true
          },
          {
            text: currentTranslations.nav.ecosystem,
            href: '#sta-radimo-section',
            isSection: true
          },
          {
            text: currentTranslations.nav.network,
            href: '#partnerWhy',
            isSection: true
          },
          {
            text: currentTranslations.nav.contact,
            href: '#contactForm',
            isSection: true
          },
        ];

        menuItems.forEach((item) => {
          const li = document.createElement("li");
          const a = document.createElement("a");
          a.href = item.href;
          a.textContent = item.text;
          
          // Add scroll functionality
          a.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Close mobile menu
            hamburgerBtn.classList.remove("active");
            mobileMenu.classList.remove("active");
            document.body.style.overflow = "";
            
            if (item.isSection) {
              // Scroll to section
              const section = document.querySelector(item.href);
              if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
              }
            }
          });
          
          li.appendChild(a);
          menuList.appendChild(li);
        });

        mobileMenu.appendChild(menuList);

        // Add to DOM
        navContainer.appendChild(hamburgerMenu);
        document.body.appendChild(mobileMenu);

        // Add click and touch events for mobile compatibility
        function toggleMenu(e) {
          if (e) {
            e.preventDefault();
            e.stopPropagation();
          }
          hamburgerBtn.classList.toggle("active");
          mobileMenu.classList.toggle("active");

          // Prevent body scroll when menu is open
          if (mobileMenu.classList.contains("active")) {
            document.body.style.overflow = "hidden";
          } else {
            document.body.style.overflow = "";
          }
        }
        
        hamburgerBtn.addEventListener("click", toggleMenu);
        hamburgerBtn.addEventListener("touchstart", toggleMenu, { passive: false });

        // Close menu when clicking outside
        mobileMenu.addEventListener("click", function (e) {
          if (e.target === mobileMenu) {
            hamburgerBtn.classList.remove("active");
            mobileMenu.classList.remove("active");
            document.body.style.overflow = "";
          }
        });
      }
    }
  }

  // Remove hamburger menu on desktop
  function removeHamburgerMenu() {
    if (window.innerWidth > 767) {
      const hamburgerMenu = document.querySelector(".hamburger-menu");
      const mobileMenu = document.querySelector(".mobile-menu");

      if (hamburgerMenu) {
        hamburgerMenu.remove();
      }
      if (mobileMenu) {
        mobileMenu.remove();
      }

      // Reset body overflow
      document.body.style.overflow = "";
    }
  }

  // Initialize
  createHamburgerMenu();

  // Handle window resize
  window.addEventListener("resize", function () {
    removeHamburgerMenu();
    createHamburgerMenu();
  });
});

document.addEventListener('DOMContentLoaded', function() {
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

        // Close menu when clicking on a link and add scroll functionality
        const mobileMenuLinks = mobileMenu.querySelectorAll('a');
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                hamburgerBtn.classList.remove('active');
                mobileMenu.classList.remove('active');
                
                const href = this.getAttribute('href');
                
                // Handle different navigation items
                if (href === '#wp--skip-link--target') {
                    // Services section
                    const section = document.querySelector(href);
                    if (section) {
                        section.scrollIntoView({ behavior: 'smooth' });
                    }
                } else if (href === '#aboutUsContainer') {
                    // About section
                    const section = document.querySelector(href);
                    if (section) {
                        section.scrollIntoView({ behavior: 'smooth' });
                    }
                } else if (href === '#partnerWhy') {
                    // Partners section
                    const section = document.querySelector(href);
                    if (section) {
                        section.scrollIntoView({ behavior: 'smooth' });
                    }
                } else if (href === '#contactForm') {
                    // Contact section
                    const section = document.querySelector(href);
                    if (section) {
                        section.scrollIntoView({ behavior: 'smooth' });
                    }
                }
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!hamburgerBtn.contains(event.target) && !mobileMenu.contains(event.target)) {
                hamburgerBtn.classList.remove('active');
                mobileMenu.classList.remove('active');
            }
        });
    }

    // Sync language selectors
    const desktopLanguageSelect = document.getElementById('languageSelect');
    const mobileLanguageSelect = document.getElementById('mobileLanguageSelect');
    
    if (desktopLanguageSelect && mobileLanguageSelect) {
        desktopLanguageSelect.addEventListener('change', function() {
            mobileLanguageSelect.value = this.value;
        });
        
        mobileLanguageSelect.addEventListener('change', function() {
            desktopLanguageSelect.value = this.value;
        });
    }
});

// Translation dictionary
const translations = {
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
      title: "Skynex Global",
      subtitle: "Generational Architecture of Education, Media, and Technology",
      subtitle2: "We design long-term systems that shape how societies learn, communicate, and innovate.\n\nBuilt for generations.\nDesigned to last.",
      desc: "Skynex Global is a next-generation strategic ecosystem that integrates education, media, and technology into a unique, long-term sustainable system for the development of society, knowledge, and markets.",
      additionalText: "Skynex Global is not a company, startup, or project, but a system architecture.",
      btn1: "Explore the Ecosystem",
      btn2: "Explore Partnerships",
    },
    about: {
      sectionTitle: "About Us",
      sectionDescription: "Skynex Global is a next-generation strategic ecosystem that integrates education, media, and technology into a unique, long-term sustainable system for the development of society, knowledge, and markets. Skynex Global is not a company, startup, or project, but a system architecture.",
      title: "OUR APPROACH",
      title2: "OUR FOCUS",
      paragraphs: [
        "Rather than functioning as a single organization, Skynex Global is structured as an interconnected ecosystem.",
        "This approach enables initiatives to develop, evolve and scale over time while remaining aligned around shared values and purpose.",
        "We focus on building systems where knowledge, responsibility and technology reinforce each other.",
      ],
      features: [
        "Human-centered education and future skills",
        "Responsible media and information literacy",
        "Applied technology and systems thinking",
      ],
    },
    purpose: {
      label: "OUR PURPOSE",
      subtitle: "Why Skynex Global Exists",
      mainText: "Education, media, and technology shape the world we live in yet they often evolve in isolation.",
      secondaryText: "Skynex Global exists to bring these systems together, creating frameworks that prepare people and institutions for long-term change.",
      labels: {
        education: "Education",
        media: "Media",
        technology: "Technology",
      },
    },
    services: {
      title: "ECOSYSTEM",
      intro: [
        "Skynex Global is an integrated ecosystem made up of three interconnected but clearly defined branches. While each branch operates independently, its true value is realized only as part of the complete system.",
      ],
      cards: [
        {
          title: "IRIS Education",
          subtitle: "Developing next-generation educational models.",
          desc: [
            "IRIS Education is a next-generation educational system focused on applicable knowledge, critical thinking, creativity, and future skills.",
            "IRIS is designed to evolve from an educational model into applied learning environments.",
            "Education is not preparation for tests.<br>Education is preparation for life.",
          ],
          cta: "Visit IRIS Education →",
        },
        {
          title: "Buzzy Global Media",
          subtitle: "Exploring responsible, independent media formats.",
          desc: [
            "Buzzy Global is a modern media system that connects knowledge, society, and technology through content that informs, encourages thinking, and builds trust.",
            "Media is not noise.<br>Media is the infrastructure of awareness.",
          ],
          cta: "Visit BuzzyGlobal →",
        },
        {
          title: "Skynex Technologies",
          subtitle: "Advancing applied technology and future systems.",
          desc: [
            "Skynex Technologies develops and implements modern technologies primarily for educational, developmental, and systemic purposes within the Skynex Global ecosystem, with the possibility of further application and development of technological solutions through research, industrial, and partnership projects.",
            "Technology here is not the goal.<br>It is a tool in service of knowledge, responsibility, and long-term value.",
          ],
          cta: "Visit Skynex Technologies →",
        },
      ],
    },
    partner: {
      title: "Network",
      texts: [
        "Skynex Global is built as an open ecosystem, gradually connecting institutions, experts, creators and partners aligned around long-term impact.",
        "Members of the Skynex Global network contribute expertise and perspective, while gaining access to collaboration, shared initiatives and evolving projects within the ecosystem."
      ],
      listItems: [
        "Relevance of the model",
        "Social significance of the ecosystem",
        "Potential for long-term application",
      ],
      cta: "Join the Network",
      cards: [
        {
          title: "Central Location",
          desc: "Fast access across Southeast Europe from our base in Serbia.",
        },
        {
          title: "Speed & Responsiveness",
          desc: "We reduce downtime through local storage, service teams, and on-site field support.",
        },
        {
          title: "End-to-End Ecosystem",
          desc: "From procurement to prototypes, training to service – we cover the entire UAV lifecycle.",
        },
        {
          title: "Technical Support",
          desc: "Support from professors at the University of Belgrade (ETF, Mechanical) and experienced UAV engineers.",
        },
        {
          title: "Proven Platforms",
          desc: "We offer mission-ready systems tested under real defense and security conditions.",
        },
        {
          title: "Support for New Manufacturers",
          desc: "For UAV manufacturers entering the European market, Skynex provides local presence, technical collaboration, and market access.",
        },
      ],
    },
    contact: {
      title: "CONTACT",
      subtitle: "",
      desc: "Skynex Global collaborates with institutions, organizations, partners and individuals whose ideas and objectives align with our mission.",
      form: {
        firstName: "First Name*",
        lastName: "Last Name*",
        phone: "Phone*",
        email: "E-mail*",
        city: "City*",
        country: "Country*",
        company: "Company Name",
        purposeOfInquiry: "Purpose of Inquiry*",
        help: "How can we help?*",
        message: "Message*",
        submit: "Get in touch",
        placeholderFirst: "Enter your first name*",
        placeholderLast: "Enter your last name*",
        placeholderPhone: "Enter your phone number*",
        placeholderEmail: "example@gmail.com*",
        placeholderCity: "Enter city*",
        placeholderCompany: "Enter company name",
        placeholderMessage: "Type here*",
        countryOptions: [
          "Serbia", "Angola", "Austria", "Bahrain", "Germany", "Slovakia", "Turkey", "Aruba", "Andorra", "American Samoa"
        ],
        purposeOfInquiryOptions: [
          "Education / Schools (IRIS model)",
          "Partnerships",
          "Institutions & Public Sector",
          "Private Companies & Initiatives",
          "Careers",
          "Media & Press",
          "Legal & IP",
          "Other"
        ],
        helpOptions: [
          "Sales and Orders",
          "Training and Demonstrations",
          "Custom Drone / R&D Projects",
          "Distribution and Partnership",
          "Customer Support",
          "Media Inquiry",
          "Other"
        ]
      }
    },
    defense: {
      title: "Defense & Public Safety",
      paragraphs: [
        "Skynex directly supports defense and public safety sectors with certified, field-proven UAV systems tailored to mission-critical applications. From border surveillance to tactical reconnaissance and emergency response, our platforms are engineered for reliability under pressure.",
        "We work with vetted national and international partners to deliver drone solutions that meet the operational requirements of military units, police forces, special operations, firefighting services, and disaster response agencies.",
        "All defense-grade systems offered by Skynex include platforms certified under recognized compliance programs (including select Blue UAS-listed systems) and are tested under simulated mission conditions at our private UAV range.",
        "Thanks to our regional location, we provide faster servicing, training, and spare parts support reducing mission downtime from weeks to just a few days.",
        "Whether for real-time situational awareness, perimeter control, or supporting field units during high-risk operations, Skynex delivers dependable UAV capabilities where and when it matters most."
      ],
    },
    values: {
      title: "What We Build On",
      items: [
        {
          title: "Integrity",
          desc: "We work transparently, responsibly, and with clear ethical standards, carrying long-term accountability to the community.",
        },
        {
          title: "Innovation",
          desc: "We create practical, applicable, and scalable solutions for today’s social and technological challenges.",
        },
        {
          title: "Impact",
          desc: "We aim to generate positive educational, technological, and social impact.",
        },
      ],
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
      careers: "Careers",
      media: "Media",
      legal: "Legal",
      copyright: "© 2026 Skynex Global. All rights reserved.",
    },
    ekosistem: {
      title: "Ecosystem in Action",
      cards: [
        {
          title: "IRIS Education",
          desc: "IRIS Education is a next-generation educational system focused on applicable knowledge, critical thinking, creativity, and future skills. Education is not preparation for tests. Education is preparation for life.",
          subtitle: "Developing human potential for the world to come",
          cta: "Visit IRIS Education →",
        },
        {
          title: "Skynex Technologies",
          desc: "Skynex Technologies develops and applies modern technologies exclusively for educational, developmental, and systemic purposes within the Skynex Global ecosystem. Technology here is not the goal. It is a tool in service of knowledge, responsibility, and long-term value.",
          subtitle: "Technology in service of knowledge and ecosystem",
          cta: "Visit Skynex Technologies →",
        },
        {
          title: "BuzzyGlobal Media",
          desc: "Buzzy Global is a modern media system that connects knowledge, society, and technology through content that informs, stimulates thinking, and builds trust. Media is not noise. Media is the infrastructure of consciousness.",
          subtitle: "Media with purpose and responsibility",
          cta: "Visit BuzzyGlobal →",
        },
      ],
    },
    technologies: {
      title: "For Media",
      cta: "Contact",
      paragraphs: [
        "Skynex Global communicates with media in the context of education, social development, media responsibility, and technology systems. Media inquiries are limited to topics related to the Skynex Global ecosystem, IRIS Education, Buzzy Global Media, and the systemic approach to education, media, and technology.",
        "Skynex Global does not participate in promotional or sensationalist media formats, nor in commercial content that affects editorial independence, credibility, or system integrity. For official media inquiries, interviews, and information, contact us at email: media@skynexg.com",
      ],
    },
    careers: {
      title: "Careers at Skynex Global",
      cta: "Contact",
      paragraphs: [
        "Skynex Global develops as a long-term system that brings together individuals dedicated to education, media, technology, and social development. We do not hire according to the classic corporate model. Roles within the ecosystem are formed organically, in accordance with the development of individual branches and projects.",
        "There are currently no open positions. If you wish to express interest in future collaboration within the Skynex Global ecosystem, you can send a short biography and area of interest to email: careers@skynexg.com",
      ],
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
      title: "Skynex Global",
      subtitle: "Generacijska arhitektura obrazovanja, medija i tehnologije",
      subtitle2: "Mi dizajniramo dugoročne sisteme koji oblikuju način na koji društva uče, komuniciraju i inoviraju.\n\nGrađeno za generacije.\nDizajnirano da traje.",
      desc: "Skynex Global je strateški ekosistem nove generacije koji integriše obrazovanje, medije i tehnologiju u jedinstven, dugoročno održiv sistem razvoja društva, znanja i tržišta.",
      additionalText: "Skynex Global nije kompanija, startup ili projekat, već arhitektura sistema.",
      btn1: "Upoznaj ekosistem",
      btn2: "Pridruži nam se",
    },
    about: {
      sectionTitle: "O nama",
      sectionDescription: "Skynex Global je strateški ekosistem nove generacije koji integriše obrazovanje, medije i tehnologiju u jedinstven, dugoročno održiv sistem razvoja društva, znanja i tržišta. Skynex Global nije kompanija, startup ili projekat, već arhitektura sistema.",
      title: "NAŠ PRISTUP",
      title2: "NAŠ FOKUS",
      paragraphs: [
        "Umesto da funkcioniše kao jedna organizacija, Skynex Global je strukturisan kao međusobno povezan ekosistem.",
        "Ovakav pristup omogućava inicijativama da se razvijaju, evoluiraju i skaliraju tokom vremena dok ostaju usklađene oko zajedničkih vrednosti i svrhe.",
        "Mi se fokusiramo na izgradnju sistema gde se znanje, odgovornost i tehnologija međusobno pojačavaju.",
        "Ključne oblasti fokusa:",
      ],
      features: [
        "Obrazovanje usmereno ka čoveku i budućim veštinama",
        "Odgovorni mediji i informaciona pismenost",
        "Primenjena tehnologija i sistemsko razmišljanje",
      ],
    },
    purpose: {
      label: "NAŠA SVRHA",
      subtitle: "Zašto Skynex Global postoji",
      mainText: "Obrazovanje, mediji i tehnologija oblikuju svet u kojem živimo ali se često razvijaju izolovano.",
      secondaryText: "Skynex Global postoji da poveže ove sisteme, stvarajući okvire koji pripremaju ljude i institucije za dugoročne promene.",
      labels: {
        education: "Obrazovanje",
        media: "Mediji",
        technology: "Tehnologija",
      },
    },
    services: {
      title: "Ekosistem",
      intro: [
        "Skynex Global je integrisani ekosistem sastavljen od tri međusobno povezane, ali jasno definisane grane. Iako svaka grana ima svoju autonomiju, pravu vrednost dobija tek kao deo celine.",
      ],
      cards: [
        {
          title: "IRIS Education",
          subtitle: "Razvoj obrazovnih modela nove generacije.",
          desc: [
            "IRIS Education je obrazovni sistem nove generacije fokusiran na primenljivo znanje, kritičko razmišljanje, kreativnost i buduće veštine.",
            "IRIS je dizajniran da evoluira iz obrazovnog modela u primenjena okruženja za učenje.",
            "Obrazovanje nije priprema za testove.<br>Obrazovanje je priprema za život.",
          ],
          cta: "Poseti IRIS Education →",
        },
        {
          title: "Buzzy Global Media",
          subtitle: "Istraživanje odgovornih, nezavisnih medijskih formata.",
          desc: [
            "Buzzy Global je savremeni medijski sistem koji povezuje znanje, društvo i tehnologiju kroz sadržaj koji informiše, podstiče razmišljanje i gradi poverenje.",
            "Mediji nisu buka.<br>Mediji su infrastruktura svesti.",
          ],
          cta: "Poseti BuzzyGlobal →",
        },
        {
          title: "Skynex Technologies",
          subtitle: "Unapređivanje primenjene tehnologije i budućih sistema.",
          desc: [
            "Skynex Technologies razvija i primenjuje savremene tehnologije prvenstveno u edukativne, razvojne i sistemske svrhe unutar Skynex Global ekosistema, uz mogućnost dalje primene i razvoja tehnoloških rešenja kroz istraživačke, industrijske i partnerske projekte.",
            "Tehnologija ovde nije cilj.<br>Ona je alat u službi znanja, odgovornosti i dugoročne vrednosti.",
          ],
          cta: "Poseti Skynex Technologies →",
        },
      ],
    },
    partner: {
      title: "Mreža partnera",
      texts: [
        "Skynex Global je izgrađen kao otvoren ekosistem, postupno povezujući institucije, stručnjake, kreatore i partnere usklađene oko dugoročnog uticaja.",
        "Članovi mreže Skynex Global doprinose stručnošću i perspektivom, dok dobijaju pristup saradnji, zajedničkim inicijativama i projektima u razvoju unutar ekosistema.",
      ],
      listItems: [
        "Relevantnost modela",
        "Društveni značaj ekosistema",
        "Potencijal za dugoročnu primenu",
      ],
      cta: "Pridruži se mreži",
    },
    values: {
      title: "Na cemu gradimo",
      items: [
        { title: "Integritet", desc: "Radimo transparentno, odgovorno i sa jasnim etičkim standardima, uz dugoročnu odgovornost prema zajednici." },
        { title: "Inovacija", desc: "Razvijamo praktična, primenljiva i skalabilna rešenja koja odgovaraju savremenim društvenim i tehnološkim izazovima." },
        { title: "Uticaj", desc: "Naš cilj je stvaranje pozitivnog obrazovnog, tehnološkog i društvenog uticaja." },
      ],
    },
    contact: {
      title: "KONTAKT",
      subtitle: "",
      desc: "Skynex Global sarađuje sa institucijama, organizacijama, partnerima i pojedincima čije su ideje i ciljevi usklađeni sa našom misijom.",
      form: {
        firstName: "Ime*",
        lastName: "Prezime*",
        phone: "Telefon*",
        email: "E-mail*",
        city: "Grad*",
        country: "Država*",
        company: "Naziv kompanije",
        purposeOfInquiry: "Svrha upita*",
        help: "Kako možemo da pomognemo?*",
        message: "Poruka*",
        submit: "Pošalji",
        placeholderFirst: "Unesite vaše ime*",
        placeholderLast: "Unesite vaše prezime*",
        placeholderPhone: "Unesite vaš telefon*",
        placeholderEmail: "primer@gmail.com*",
        placeholderCity: "Unesite grad*",
        placeholderCompany: "Unesite naziv kompanije",
        placeholderMessage: "Upišite ovde*",
        countryOptions: [
          "Srbija", "Angola", "Austrija", "Bahrein", "Nemačka", "Slovačka", "Turska", "Aruba", "Andora", "Američka Samoa"
        ],
        purposeOfInquiryOptions: [
          "Obrazovanje / Škole (IRIS model)",
          "Partnerstva",
          "Institucije i javni sektor",
          "Privatne kompanije i inicijative",
          "Karijera",
          "Media & Press",
          "Pravna i IP pitanja",
          "Ostalo"
        ],
        helpOptions: [
          "Prodaja i porudžbine",
          "Obuka i demonstracija",
          "Prilagođeni dron / R&D projekti",
          "Distribucija i partnerstvo",
          "Korisnička podrška",
          "Medijski upit",
          "Ostalo"
        ]
      }
    },
    defense: {
      title: "Odbrana i javna bezbednost",
      paragraphs: [
        "Skynex direktno podržava sektore odbrane i javne bezbednosti sertifikovanim, u praksi proverenim UAV sistemima prilagođenim kritičnim misijama. Od nadzora granica do taktičkog izviđanja i hitnog reagovanja, naše platforme su projektovane za pouzdanost pod pritiskom.",
        "Sarađujemo sa proverenim nacionalnim i međunarodnim partnerima kako bismo isporučili dron rešenja koja ispunjavaju operativne zahteve vojnih jedinica, policije, specijalnih službi, vatrogasaca i službi za vanredne situacije.",
        "Svi sistemi vojnog kvaliteta koje nudi Skynex uključuju platforme sertifikovane prema priznatim standardima (uključujući i Blue UAS sisteme) i testirani su u simuliranim uslovima misije na našem privatnom UAV poligonu.",
        "Zahvaljujući regionalnoj lokaciji, obezbeđujemo brži servis, obuku i podršku rezervnim delovima smanjujući zastoje sa nedelja na samo nekoliko dana.",
        "Bilo da je reč o situacionoj svesti u realnom vremenu, kontroli perimetra ili podršci jedinicama na terenu tokom visokorizičnih operacija, Skynex isporučuje pouzdane UAV kapacitete tamo gde su najpotrebniji.",
      ],
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
      copyright: "© 2026 Skynex Global. Sva prava zadržana.",
    },
    ekosistem: {
      title: "Ekosistem na delu",
      cards: [
        {
          title: "IRIS Education",
          desc: "IRIS Education je obrazovni sistem nove generacije fokusiran na primenljivo znanje, kritičko razmišljanje, kreativnost i buduće veštine. Obrazovanje nije priprema za testove. Obrazovanje je priprema za život.",
          subtitle: "Razvoj ljudskog potencijala za svet koji dolazi",
          cta: "Poseti IRIS Education →",
        },
        {
          title: "Skynex Technologies",
          desc: "Skynex Technologies razvija i primenjuje savremene tehnologije isključivo u edukativne, razvojne i sistemske svrhe unutar Skynex Global ekosistema. Tehnologija ovde nije cilj. Ona je alat u službi znanja, odgovornosti i dugoročne vrednosti.",
          subtitle: "Tehnologija u službi znanja i ekosistema",
          cta: "Poseti Skynex Technologies →",
        },
        {
          title: "BuzzyGlobal Media",
          desc: "Buzzy Global je savremeni medijski sistem koji povezuje znanje, društvo i tehnologiju kroz sadržaj koji informiše, podstiče razmišljanje i gradi poverenje. Mediji nisu buka. Mediji su infrastruktura svesti.",
          subtitle: "Mediji sa svrhom i odgovornošću",
          cta: "Poseti BuzzyGlobal →",
        },
      ],
    },
    technologies: {
      title: "Za medije",
      cta: "Kontakt",
      paragraphs: [
        "Skynex Global komunicira sa medijima u kontekstu obrazovanja, društvenog razvoja, medijske odgovornosti i tehnoloških sistema. Medijski upiti su ograničeni na teme koje se odnose na Skynex Global ekosistem, IRIS Education, Buzzy Global Media i sistemski pristup obrazovanju, medijima i tehnologiji.",
        "Skynex Global ne učestvuje u promotivnim ili senzacionalističkim medijskim formatima, niti u komercijalnim sadržajima koji utiču na uredničku nezavisnost, kredibilitet ili integritet sistema. Za zvanične medijske upite, intervjue i informacije kontaktirajte nas na email: media@skynexg.com",
      ],
    },
    careers: {
      title: "Karijere u Skynex Global",
      cta: "Kontakt",
      paragraphs: [
        "Skynex Global se razvija kao dugoročni sistem koji okuplja pojedince posvećene obrazovanju, medijima, tehnologiji i društvenom razvoju. Ne zapošljavamo po klasičnom korporativnom modelu. Uloge unutar ekosistema se formiraju organski, u skladu sa razvojem pojedinih grana i projekata.",
        "Trenutno nema otvorenih pozicija. Ukoliko želite da izrazite interesovanje za buduću saradnju u okviru Skynex Global ekosistema, možete poslati kratku biografiju i oblast interesovanja na email: careers@skynexg.com",
      ],
    },
  },
};

// Helper for translating navigation and all page content
function translatePage(lang) {
  const t = translations[lang];

  // Helper: map nav items to section IDs or URLs
  const navSectionMap = {
    home: '#wlcmBcg',
    about: '#aboutUsContainer',
    ecosystem: '#sta-radimo-section',
    network: '#partnerWhy',
    contact: '#contactForm',
  };

  // Navigation
  const navLinks = document.querySelectorAll(
    '.wp-block-navigation__container .wp-block-navigation-link a, .mobile-menu ul li a'
  );
  const navOrder = ["home", "about", "ecosystem", "network", "contact"];
  const orderLength = navOrder.length;
  if (!orderLength) {
    console.warn('Navigation order is empty in translatePage');
  } else {
    navLinks.forEach((a, i) => {
      const key = navOrder[i % orderLength];
      if (t.nav[key]) a.textContent = t.nav[key];
      // Set hrefs for navigation
      if (navSectionMap[key]) {
        a.setAttribute('href', navSectionMap[key]);
      }
    });

    // Add smooth scroll for nav links
    navLinks.forEach((a, i) => {
      const sectionKey = navOrder[i % orderLength];
      if (navSectionMap[sectionKey] && navSectionMap[sectionKey].startsWith('#')) {
        a.addEventListener('click', function(e) {
          e.preventDefault();
          const section = document.querySelector(navSectionMap[sectionKey]);
          if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
          }
          // Close mobile menu if open
          const mobileMenu = document.querySelector('.mobile-menu');
          const hamburgerBtn = document.querySelector('.hamburger-btn');
          if (mobileMenu && hamburgerBtn) {
            mobileMenu.classList.remove('active');
            hamburgerBtn.classList.remove('active');
            document.body.style.overflow = '';
          }
        });
      }
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

  // Products page specific translations
  if (document.body.classList.contains('products-page')) {
    // Products hero title
    const productsTitle = document.querySelector('.products-title');
    if (productsTitle) productsTitle.textContent = t.products.title;
    
    // Products description
    const productsText = document.querySelector('.products-text');
    if (productsText) productsText.textContent = t.products.description;
    
    return; // Exit early for products page to avoid other translations
  }

  // Hero section
  const heroTitle = document.querySelector('.wp-block-heading[style*="font-size: 57px"]');
  if (heroTitle) heroTitle.innerHTML = `<strong><strong>${t.hero.title}</strong></strong>`;
  const heroSubtitle = document.querySelector('.has-regular-font-size strong');
  if (heroSubtitle) heroSubtitle.textContent = t.hero.subtitle;
  const heroSubtitle2 = document.querySelector('.hero-subtitle');
  if (heroSubtitle2 && t.hero.subtitle2) {
    heroSubtitle2.textContent = t.hero.subtitle2;
  }
  // Update all hero buttons robustly
  const heroBtnStrongEls = document.querySelectorAll('.wp-block-buttons .wp-block-button__link strong strong, .wp-block-buttons .wp-block-button__link strong');
  if (heroBtnStrongEls && heroBtnStrongEls.length > 0) {
    // First button is btn2 (Partnership), second button is btn1 (Ecosystem)
    heroBtnStrongEls.forEach((el, idx) => {
      if (idx === 0) el.textContent = t.hero.btn2;
      else if (idx === 1) el.textContent = t.hero.btn1;
      else if (el.textContent.trim() === 'Discover Our Capabilities' || el.textContent.trim() === 'Saznajte naše mogućnosti') {
        el.textContent = t.hero.btn2;
      }
    });
  }

  // Our Purpose section
  const purposeLabel = document.getElementById('purposeLabel');
  if (purposeLabel && t.purpose && t.purpose.label) {
    purposeLabel.textContent = t.purpose.label;
  }
  
  const purposeMainText = document.getElementById('purposeMainText');
  if (purposeMainText && t.purpose && t.purpose.mainText) {
    purposeMainText.textContent = t.purpose.mainText;
  }
  
  const purposeSecondaryText = document.getElementById('purposeSecondaryText');
  if (purposeSecondaryText && t.purpose && t.purpose.secondaryText) {
    purposeSecondaryText.textContent = t.purpose.secondaryText;
  }
  
  // Purpose circle labels
  if (t.purpose && t.purpose.labels) {
    const circleLabels = document.querySelectorAll('.purpose-circle-label');
    if (circleLabels.length >= 3) {
      circleLabels[0].textContent = t.purpose.labels.education;
      circleLabels[1].textContent = t.purpose.labels.media;
      circleLabels[2].textContent = t.purpose.labels.technology;
    }
  }

  // Services section (Sta radimo)
  const staRadimoTitle = document.querySelector('.sta-radimo-title');
  if (staRadimoTitle && t.services && t.services.title) staRadimoTitle.textContent = t.services.title;
  
  // Handle intro as array
  const staRadimoIntros = document.querySelectorAll('.sta-radimo-intro');
  if (staRadimoIntros && t.services && t.services.intro && Array.isArray(t.services.intro)) {
    staRadimoIntros.forEach((el, idx) => {
      if (t.services.intro[idx]) {
        el.innerHTML = t.services.intro[idx];
      }
    });
  } else if (staRadimoIntros && staRadimoIntros[0] && t.services && t.services.intro) {
    // Fallback for string format
    if (typeof t.services.intro === 'string') {
      staRadimoIntros[0].textContent = t.services.intro;
    }
  }

  const serviceCardTitles = document.querySelectorAll('.sta-radimo-block-title');
  const serviceCardSubtitles = document.querySelectorAll('.sta-radimo-block-subtitle');
  const serviceCardCTAs = document.querySelectorAll('.sta-radimo-cta');
  
  if (t.services.cards && Array.isArray(t.services.cards)) {
    t.services.cards.forEach((card, i) => {
      if (serviceCardTitles[i] && card.title) serviceCardTitles[i].textContent = card.title;
      if (serviceCardSubtitles[i] && card.subtitle) serviceCardSubtitles[i].textContent = card.subtitle;
      if (serviceCardCTAs[i] && card.cta) serviceCardCTAs[i].textContent = card.cta;
      
      // Handle desc as array - find all text elements within this block
      if (card.desc && Array.isArray(card.desc)) {
        const blocks = document.querySelectorAll('.sta-radimo-block');
        if (blocks[i]) {
          const blockTexts = blocks[i].querySelectorAll('.sta-radimo-block-text');
          card.desc.forEach((descText, descIdx) => {
            if (blockTexts[descIdx]) {
              blockTexts[descIdx].innerHTML = descText;
            }
          });
        }
      }
    });
  }

  // Why Partner with Skynex section
  const partnerTitle = document.querySelector('.partners-network-title');
  if (partnerTitle) partnerTitle.textContent = t.partner.title;

  if (t.partner.texts && Array.isArray(t.partner.texts)) {
    const partnerTexts = document.querySelectorAll('.partners-network-text');
    t.partner.texts.forEach((text, i) => {
      if (partnerTexts[i]) partnerTexts[i].innerHTML = text;
    });
  }

  // Translate partner list items
  if (t.partner.listItems && Array.isArray(t.partner.listItems)) {
    const partnerListTexts = document.querySelectorAll('.partners-network-list-text');
    t.partner.listItems.forEach((text, i) => {
      if (partnerListTexts[i]) partnerListTexts[i].textContent = text;
    });
  }

  const partnerCta = document.querySelector('.partners-network-cta');
  if (partnerCta && t.partner.cta) partnerCta.textContent = t.partner.cta;

  // About Us section
  const aboutSectionTitle = document.getElementById('aboutSectionTitle');
  if (aboutSectionTitle && t.about.sectionTitle) aboutSectionTitle.textContent = t.about.sectionTitle;
  
  const aboutSectionDescription = document.getElementById('aboutSectionDescription');
  if (aboutSectionDescription && t.about.sectionDescription) aboutSectionDescription.textContent = t.about.sectionDescription;
  
  const aboutTitles = document.querySelectorAll('.about-title');
  if (aboutTitles && aboutTitles.length > 0) {
    if (aboutTitles[0] && t.about.title) aboutTitles[0].textContent = t.about.title;
    if (aboutTitles[1] && t.about.title2) aboutTitles[1].textContent = t.about.title2;
  }

  // Translate all about-text paragraphs
  const aboutTexts = document.querySelectorAll('.about-text');
  if (aboutTexts && t.about.paragraphs && Array.isArray(t.about.paragraphs)) {
    aboutTexts.forEach((el, idx) => {
      if (t.about.paragraphs[idx]) {
        el.innerHTML = t.about.paragraphs[idx];
      }
    });
  }

  // Translate about feature items
  const aboutFeatures = document.querySelectorAll('.about-feature-text');
  if (aboutFeatures && t.about.features && Array.isArray(t.about.features)) {
    aboutFeatures.forEach((el, idx) => {
      if (t.about.features[idx]) {
        el.textContent = t.about.features[idx];
      }
    });
  }

  // Contact section
  // Title
  const contactTitle = document.querySelector(
    '#contactForm .wp-block-heading.has-section-title-font-size'
  );
  if (contactTitle) contactTitle.textContent = t.contact.title;

  // Subtitle
  const contactSubtitle = document.querySelector(
    '#contactForm .sub-title .wp-block-heading'
  );
  if (contactSubtitle) contactSubtitle.innerHTML = `<strong><strong>${t.contact.subtitle}</strong></strong>`;

  // Description
  const contactDesc = document.querySelector(
    '#contactForm .sub-title p.has-text-align-center'
  );
  if (contactDesc) contactDesc.textContent = t.contact.desc;

  // Form labels - now using field order: First Name, Last Name, Phone, Email, City, Country, Company, Purpose, Message
  const contactLabels = document.querySelectorAll(
    '#contactForm .form-label'
  );
  if (contactLabels.length >= 8) {
    contactLabels[0].textContent = t.contact.form.firstName;
    contactLabels[1].textContent = t.contact.form.lastName;
    contactLabels[2].textContent = t.contact.form.phone;
    contactLabels[3].textContent = t.contact.form.email;
    contactLabels[4].textContent = t.contact.form.city;
    contactLabels[5].textContent = t.contact.form.country;
    contactLabels[6].textContent = t.contact.form.company;
    contactLabels[7].textContent = t.contact.form.purposeOfInquiry;
    if (contactLabels[8]) contactLabels[8].textContent = t.contact.form.message;
  }

  // Placeholders
  const contactInputs = document.querySelectorAll('#contactForm input, #contactForm textarea');
  contactInputs.forEach(input => {
    if (input.name === "first_name") input.placeholder = t.contact.form.placeholderFirst;
    if (input.name === "last_name") input.placeholder = t.contact.form.placeholderLast;
    if (input.name === "subject") input.placeholder = t.contact.form.placeholderPhone;
    if (input.name === "f_0" || input.name === "email") input.placeholder = t.contact.form.placeholderEmail;
    if (input.name === "city") input.placeholder = t.contact.form.placeholderCity;
    if (input.name === "f_1") input.placeholder = t.contact.form.placeholderCompany;
    if (input.name === "message") input.placeholder = t.contact.form.placeholderMessage;
  });
  const contactTextarea = document.querySelector('#contactForm textarea[name="message"]');
  if (contactTextarea) contactTextarea.placeholder = t.contact.form.placeholderMessage;

  // Purpose of Inquiry dropdown options
  const purposeInquirySelect = document.getElementById('purpose_inquiry');
  if (purposeInquirySelect && t.contact.form.purposeOfInquiryOptions) {
    purposeInquirySelect.innerHTML = '';

    // Add default option
    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = lang === 'sr' ? 'Izaberite svrhu upita' : 'Select purpose of inquiry';
    purposeInquirySelect.appendChild(defaultOption);

    // Canonical values (always English, used for backend logic)
    const purposeValues = [
      "Education / Schools (IRIS model)",
      "Partnerships",
      "Institutions & Public Sector",
      "Private Companies & Initiatives",
      "Careers",
      "Media & Press",
      "Legal & IP",
      "Other"
    ];

    // Labels depend on language, but values stay in English
    const purposeLabels = t.contact.form.purposeOfInquiryOptions;

    purposeValues.forEach((value, idx) => {
      const option = document.createElement('option');
      option.value = value; // keep value in English for backend mapping
      option.textContent = purposeLabels[idx] || value; // display localized text if available
      purposeInquirySelect.appendChild(option);
    });
  }

  // Submit button
  const contactSubmit = document.querySelector('#contactForm button[type="submit"], #contactForm #formSubmit');
  if (contactSubmit) {
    const strong = contactSubmit.querySelector('strong');
    if (strong) strong.textContent = t.contact.form.submit;
    else contactSubmit.textContent = t.contact.form.submit;
  }

  // Defense & Public Safety section
  const defenseTitle = document.querySelector(
    'h2.wp-block-heading.has-text-align-center.has-luminous-vivid-amber-color.has-text-color.has-link-color.wp-elements-7ec2657764307d72bffa954bb59e1f18'
  );
  if (defenseTitle) defenseTitle.textContent = t.defense.title;

  const defenseParagraphs = document.querySelectorAll(
    'section.wp-block-group.has-black-background-color.has-background.has-global-padding.is-layout-constrained.wp-container-core-group-is-layout-ac8a82ed.wp-block-group-is-layout-constrained > .wp-block-group.alignwide.is-layout-flow.wp-block-group-is-layout-flow > p, section.wp-block-group.has-black-background-color.has-background.has-global-padding.is-layout-constrained.wp-container-core-group-is-layout-ac8a82ed.wp-block-group-is-layout-constrained > .wp-block-group.alignwide.is-layout-flow.wp-block-group-is-layout-flow > p.has-text-align-left'
  );
  t.defense.paragraphs.forEach((text, i) => {
    if (defenseParagraphs[i]) defenseParagraphs[i].textContent = text;
  });

  // Values section
  if (t.values) {
    const valuesTitle = document.querySelector('.values-main-title');
    if (valuesTitle && t.values.title) valuesTitle.textContent = t.values.title;

    const valueTitles = document.querySelectorAll('.value-title');
    const valueTexts = document.querySelectorAll('.value-text');
    t.values.items.forEach((item, i) => {
      if (valueTitles[i]) valueTitles[i].textContent = item.title;
      if (valueTexts[i]) valueTexts[i].textContent = item.desc;
    });
  }

  // New Footer Translations
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
  if (footerLinkLegal) footerLinkLegal.textContent = "Legal";

  const footerCopyright = document.getElementById('footerCopyright');
  if (footerCopyright) footerCopyright.textContent = t.footer.copyright;

  // Ekosistem cards (IRIS / Skynex Technologies / BuzzyGlobal Media)
  if (t.ekosistem && Array.isArray(t.ekosistem.cards)) {
    const ecoTitle = document.querySelector('.ekosistem-title');
    if (ecoTitle && t.ekosistem.title) ecoTitle.textContent = t.ekosistem.title;
    const ecoTitles = document.querySelectorAll('.ekosistem-card-title');
    const ecoDescs = document.querySelectorAll('.ekosistem-card-desc');
    const ecoSubtitles = document.querySelectorAll('.ekosistem-card-subtitle');
    const ecoCtas = document.querySelectorAll('.ekosistem-card-cta');
    t.ekosistem.cards.forEach((card, i) => {
      if (ecoTitles[i]) ecoTitles[i].textContent = card.title;
      if (ecoDescs[i]) ecoDescs[i].textContent = card.desc;
      if (ecoSubtitles[i] && card.subtitle) ecoSubtitles[i].textContent = card.subtitle;
      if (ecoCtas[i] && card.cta) ecoCtas[i].textContent = card.cta;
    });
  }

  // Skynex Technologies section (title + two paragraphs)
  if (t.technologies) {
    const techTitle = document.querySelector('#uav-maintenance-section .uav-maintenance-title');
    if (techTitle && t.technologies.title) techTitle.textContent = t.technologies.title;

    const techCta = document.querySelector('#uav-maintenance-section .uav-cta-button');
    if (techCta && t.technologies.cta) techCta.textContent = t.technologies.cta;

    // Header subtitles inside the header (could be multiple)
    const headerParas = document.querySelectorAll('#uav-maintenance-section .uav-maintenance-header .uav-maintenance-subtitle');
    if (headerParas && headerParas.length > 0 && Array.isArray(t.technologies.paragraphs)) {
      headerParas.forEach((el, idx) => {
        el.textContent = t.technologies.paragraphs[idx] || t.technologies.paragraphs[0];
      });
    }

    // Content paragraph elements inside the main text block
    const contentParas = document.querySelectorAll('#uav-maintenance-section .uav-maintenance-text > p');
    if (contentParas && contentParas.length > 0 && Array.isArray(t.technologies.paragraphs)) {
      contentParas.forEach((el, idx) => {
        el.textContent = t.technologies.paragraphs[idx] || t.technologies.paragraphs[0];
      });
    }
  }

  // Careers section (title + two paragraphs)
  if (t.careers) {
    const careersTitle = document.querySelector('#uav-education-section .uav-maintenance-title');
    if (careersTitle && t.careers.title) careersTitle.textContent = t.careers.title;

    const careersCta = document.querySelector('#uav-education-section .uav-cta-button');
    if (careersCta && t.careers.cta) careersCta.textContent = t.careers.cta;

    // Content paragraph elements inside the main text block
    const contentParas = document.querySelectorAll('#uav-education-section .uav-maintenance-text > p');
    if (contentParas && contentParas.length > 0 && Array.isArray(t.careers.paragraphs)) {
      contentParas.forEach((el, idx) => {
        el.textContent = t.careers.paragraphs[idx] || t.careers.paragraphs[0];
      });
    }
  }

  // Attach scroll/redirect behavior to hero and other CTA buttons using their hrefs
  function setupPartnerButtonScroll() {
    const strongEls = Array.from(document.querySelectorAll('.wp-block-button__link strong, .wp-block-buttons .wp-block-button__link strong strong'));
    strongEls.forEach(strongEl => {
      const btn = strongEl.closest('a, button');
      if (!btn) return;

      // Prefer actual href on anchor tags
      const href = btn.getAttribute ? btn.getAttribute('href') : null;

      // If href points to sta-radimo section, scroll there
      if (href && href.includes('#sta-radimo-section')) {
        btn.addEventListener('click', function(e) {
          e.preventDefault();
          const section = document.querySelector('#sta-radimo-section');
          if (section) section.scrollIntoView({ behavior: 'smooth' });
        });
        return;
      }

      // If href points to ekosistem section, scroll there
      if (href && href.includes('#ekosistem-section')) {
        btn.addEventListener('click', function(e) {
          e.preventDefault();
          const section = document.querySelector('#ekosistem-section');
          if (section) section.scrollIntoView({ behavior: 'smooth' });
        });
        return;
      }

      // If href points to contact, scroll there
      if (href && href.includes('#contactForm')) {
        btn.addEventListener('click', function(e) {
          e.preventDefault();
          const contactSection = document.getElementById('contactForm');
          if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
        });
        return;
      }

      // If href points to services (or the button is intended to discover capabilities), scroll to services heading
      if (href && (href.includes('#wp--skip-link--target') || href.includes('services'))) {
        btn.addEventListener('click', function(e) {
          e.preventDefault();
          const servicesHeading = document.querySelector('h2.wp-block-heading.has-text-align-center.has-luminous-vivid-amber-color');
          if (servicesHeading) servicesHeading.scrollIntoView({ behavior: 'smooth' });
        });
        return;
      }

      // If href includes /products, allow default navigation (redirect)
      if (href && href.includes('/products')) {
        // no-op: let the link navigate
        return;
      }

      // Fallback: if button text contains legacy strings, map them to contact or services
      const txt = strongEl.textContent.trim();
      if (['Become a Partner','Postanite partner'].includes(txt)) {
        btn.addEventListener('click', function(e) {
          e.preventDefault();
          const section = document.getElementById('ekosistem-section') || document.getElementById('contactForm');
          if (section) section.scrollIntoView({ behavior: 'smooth' });
        });
      } else if (['Upoznaj ekosistem','Explore the ecosystem', 'EXPLORE THE ECOSYSTEM'].includes(txt)) {
        btn.addEventListener('click', function(e) {
          e.preventDefault();
          const section = document.getElementById('sta-radimo-section');
          if (section) section.scrollIntoView({ behavior: 'smooth' });
        });
      } else if (['Discover Our Capabilities','Saznajte naše mogućnosti'].includes(txt)) {
        btn.addEventListener('click', function(e) {
          e.preventDefault();
          const servicesHeading = document.querySelector('h2.wp-block-heading.has-text-align-center.has-luminous-vivid-amber-color');
          if (servicesHeading) servicesHeading.scrollIntoView({ behavior: 'smooth' });
        });
      }
    });
  }

  setupPartnerButtonScroll();
}

// Set default language to English on load
document.addEventListener('DOMContentLoaded', function () {
  // Set language from localStorage or default to English
  let lang = localStorage.getItem('lang') || 'en';
  translatePage(lang);

  // Load countries from REST Countries API
  loadCountries(lang);

  // Sync language selectors and translate on change
  const desktopLanguageSelect = document.getElementById('languageSelect');
  const mobileLanguageSelect = document.getElementById('mobileLanguageSelect');

  function handleLangChange(e) {
    const lang = e.target.value;
    translatePage(lang);
    loadCountries(lang);
    localStorage.setItem('lang', lang);
    // Sync both selectors
    if (desktopLanguageSelect) desktopLanguageSelect.value = lang;
    if (mobileLanguageSelect) mobileLanguageSelect.value = lang;
  }

  if (desktopLanguageSelect && mobileLanguageSelect) {
    desktopLanguageSelect.addEventListener('change', handleLangChange);
    mobileLanguageSelect.addEventListener('change', handleLangChange);
  }

  // Smooth scroll for Skynex Technologies CTA (Kontakt button in the tech section)
  const techCtaLinks = document.querySelectorAll('.uav-cta-button');
  techCtaLinks.forEach((link) => {
    link.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        e.preventDefault();
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // Smooth scroll for Partners CTA ("Pridruži se mreži")
  const partnersCtaLinks = document.querySelectorAll('.partners-network-cta');
  partnersCtaLinks.forEach((link) => {
    link.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        e.preventDefault();
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
});

// Convert Cyrillic to Latin script for Serbian
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

// Load countries from REST Countries API
function loadCountries(lang) {
  const countrySelect = document.getElementById('countrySelect');
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

// Footer smooth scroll functionality
function setupFooterLinks() {
  const footerLinks = document.querySelectorAll('.skynex-footer a[href^="#"]');
  footerLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

// Initialize footer links when page loads
document.addEventListener('DOMContentLoaded', setupFooterLinks);




// YouTube toast and Scroll to Top functionality moved to clone.js

// Contact Form Validation
function validateContactForm(lang = 'en') {
  const validationMessages = {
    en: {
      required: "This field is required",
      firstNameRequired: "First name is required",
      lastNameRequired: "Last name is required",
      phoneRequired: "Phone number is required",
      phoneInvalid: "Please enter a valid phone number",
      emailRequired: "Email address is required",
      emailInvalid: "Please enter a valid email address",
      cityRequired: "City is required",
      countryRequired: "Please select a country",
      purposeRequired: "Please select a purpose of inquiry",
      messageRequired: "Message is required",
      messageMinLength: "Message must be at least 10 characters long"
    },
    sr: {
      required: "Ovo polje je obavezno",
      firstNameRequired: "Ime je obavezno",
      lastNameRequired: "Prezime je obavezno",
      phoneRequired: "Broj telefona je obavezan",
      phoneInvalid: "Molimo unesite važeći broj telefona",
      emailRequired: "Email adresa je obavezna",
      emailInvalid: "Molimo unesite važeću email adresu",
      cityRequired: "Grad je obavezan",
      countryRequired: "Molimo izaberite državu",
      purposeRequired: "Molimo izaberite svrhu upita",
      messageRequired: "Poruka je obavezna",
      messageMinLength: "Poruka mora imati najmanje 10 karaktera"
    }
  };

  const messages = validationMessages[lang] || validationMessages.en;
  let isValid = true;
  
  // Clear previous errors
  const errorMessages = document.querySelectorAll('.gutena-forms-field-error-msg');
  errorMessages.forEach(msg => {
    msg.textContent = '';
    msg.style.display = 'none';
  });
  
  const errorInputs = document.querySelectorAll('.form-input.error, .form-select.error, .form-textarea.error');
  errorInputs.forEach(input => {
    input.classList.remove('error');
  });

  // Get form fields
  const firstName = document.getElementById('first_name');
  const lastName = document.getElementById('last_name');
  const phone = document.getElementById('phone');
  const email = document.getElementById('email');
  const city = document.getElementById('city');
  const country = document.getElementById('countrySelect');
  const purpose = document.getElementById('purpose_inquiry');
  const message = document.getElementById('message');

  // Validate First Name
  if (!firstName || !firstName.value.trim()) {
    showFieldError(firstName, messages.firstNameRequired);
    isValid = false;
  }

  // Validate Last Name
  if (!lastName || !lastName.value.trim()) {
    showFieldError(lastName, messages.lastNameRequired);
    isValid = false;
  }

  // Validate Phone
  if (!phone || !phone.value.trim()) {
    showFieldError(phone, messages.phoneRequired);
    isValid = false;
  } else {
    // Basic phone validation (at least 6 digits)
    const phoneRegex = /^[\d\s\-\+\(\)]{6,}$/;
    if (!phoneRegex.test(phone.value.trim())) {
      showFieldError(phone, messages.phoneInvalid);
      isValid = false;
    }
  }

  // Validate Email
  if (!email || !email.value.trim()) {
    showFieldError(email, messages.emailRequired);
    isValid = false;
  } else {
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
      showFieldError(email, messages.emailInvalid);
      isValid = false;
    }
  }

  // Validate City
  if (!city || !city.value.trim()) {
    showFieldError(city, messages.cityRequired);
    isValid = false;
  }

  // Validate Country
  if (!country || !country.value || country.value === '') {
    showFieldError(country, messages.countryRequired);
    isValid = false;
  }

  // Validate Purpose of Inquiry
  if (!purpose || !purpose.value || purpose.value === '') {
    showFieldError(purpose, messages.purposeRequired);
    isValid = false;
  }

  // Validate Message
  if (!message || !message.value.trim()) {
    showFieldError(message, messages.messageRequired);
    isValid = false;
  } else if (message.value.trim().length < 10) {
    showFieldError(message, messages.messageMinLength);
    isValid = false;
  }

  return isValid;
}

// Show field error message
function showFieldError(field, message) {
  if (!field) return;
  
  field.classList.add('error');
  const fieldGroup = field.closest('.wp-block-gutena-field-group');
  if (fieldGroup) {
    const errorMsg = fieldGroup.querySelector('.gutena-forms-field-error-msg');
    if (errorMsg) {
      errorMsg.textContent = message;
      errorMsg.style.display = 'block';
      errorMsg.style.color = '#C51919';
      errorMsg.style.fontSize = '14px';
      errorMsg.style.marginTop = '8px';
      errorMsg.style.animation = 'fadeInError 0.3s ease-out';
    }
  }
}

// Clear field error
function clearFieldError(field) {
  if (!field) return;
  
  field.classList.remove('error');
  const fieldGroup = field.closest('.wp-block-gutena-field-group');
  if (fieldGroup) {
    const errorMsg = fieldGroup.querySelector('.gutena-forms-field-error-msg');
    if (errorMsg) {
      errorMsg.textContent = '';
      errorMsg.style.display = 'none';
    }
  }
}

// Prevent mobile browsers from auto-zooming inputs on focus
function setupInputZoomPrevention() {
  const viewportMeta = document.querySelector('meta[name="viewport"]');
  if (!viewportMeta) return;

  const originalContent = viewportMeta.getAttribute('content') || 'width=device-width, initial-scale=1';
  const sanitizedContent = originalContent
    .replace(/maximum-scale=[^,]+,?\s*/i, '')
    .replace(/user-scalable=[^,]+,?\s*/i, '')
    .replace(/,\s*,/g, ',')
    .replace(/^,|,$/g, '')
    .trim();

  const lockedContent = `${sanitizedContent}${sanitizedContent ? ', ' : ''}maximum-scale=1, user-scalable=no`;

  const focusables = Array.from(document.querySelectorAll('input, textarea, select'))
    .filter(el => !el.disabled && !el.readOnly);

  if (!focusables.length) return;

  const disableZoom = () => viewportMeta.setAttribute('content', lockedContent);
  const restoreZoom = () => viewportMeta.setAttribute('content', originalContent);

  focusables.forEach(el => {
    el.addEventListener('focus', disableZoom, { passive: true });
    el.addEventListener('blur', restoreZoom, { passive: true });
  });

  window.addEventListener('beforeunload', restoreZoom);
}

document.addEventListener('DOMContentLoaded', setupInputZoomPrevention);
// Add validation styles
function addValidationStyles() {
  if (document.getElementById('form-validation-styles')) return;
  
  const style = document.createElement('style');
  style.id = 'form-validation-styles';
  style.textContent = `
    .form-input.error,
    .form-select.error,
    .form-textarea.error {
      border-color: #C51919 !important;
      background-color: #fff5f5 !important;
      box-shadow: 0 0 0 1px #C51919 !important;
    }
    
    .form-input.error:focus,
    .form-select.error:focus,
    .form-textarea.error:focus {
      border-color: #C51919 !important;
      box-shadow: 0 0 0 2px rgba(197, 25, 25, 0.2) !important;
      outline: none !important;
    }
    
    .gutena-forms-field-error-msg {
      display: none;
      color: #C51919;
      font-size: 14px;
      margin-top: 8px;
      line-height: 1.4;
    }
    
    @keyframes fadeInError {
      from {
        opacity: 0;
        transform: translateY(-5px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `;
  document.head.appendChild(style);
}

// Real-time validation on blur
function setupRealTimeValidation(lang = 'en') {
  const validationMessages = {
    en: {
      firstNameRequired: "First name is required",
      lastNameRequired: "Last name is required",
      phoneRequired: "Phone number is required",
      phoneInvalid: "Please enter a valid phone number",
      emailRequired: "Email address is required",
      emailInvalid: "Please enter a valid email address",
      cityRequired: "City is required",
      countryRequired: "Please select a country",
      purposeRequired: "Please select a purpose of inquiry",
      messageRequired: "Message is required",
      messageMinLength: "Message must be at least 10 characters long"
    },
    sr: {
      firstNameRequired: "Ime je obavezno",
      lastNameRequired: "Prezime je obavezno",
      phoneRequired: "Broj telefona je obavezan",
      phoneInvalid: "Molimo unesite važeći broj telefona",
      emailRequired: "Email adresa je obavezna",
      emailInvalid: "Molimo unesite važeću email adresu",
      cityRequired: "Grad je obavezan",
      countryRequired: "Molimo izaberite državu",
      purposeRequired: "Molimo izaberite svrhu upita",
      messageRequired: "Poruka je obavezna",
      messageMinLength: "Poruka mora imati najmanje 10 karaktera"
    }
  };

  const messages = validationMessages[lang] || validationMessages.en;

  // Validate single field
  function validateField(field, fieldType) {
    const value = field.value ? field.value.trim() : '';
    
    if (fieldType === 'firstName') {
      if (!value) {
        showFieldError(field, messages.firstNameRequired);
        return false;
      }
    } else if (fieldType === 'lastName') {
      if (!value) {
        showFieldError(field, messages.lastNameRequired);
        return false;
      }
    } else if (fieldType === 'phone') {
      if (!value) {
        showFieldError(field, messages.phoneRequired);
        return false;
      } else {
        const phoneRegex = /^[\d\s\-\+\(\)]{6,}$/;
        if (!phoneRegex.test(value)) {
          showFieldError(field, messages.phoneInvalid);
          return false;
        }
      }
    } else if (fieldType === 'email') {
      if (!value) {
        showFieldError(field, messages.emailRequired);
        return false;
      } else {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          showFieldError(field, messages.emailInvalid);
          return false;
        }
      }
    } else if (fieldType === 'city') {
      if (!value) {
        showFieldError(field, messages.cityRequired);
        return false;
      }
    } else if (fieldType === 'country') {
      if (!value || value === '') {
        showFieldError(field, messages.countryRequired);
        return false;
      }
    } else if (fieldType === 'purpose') {
      if (!value || value === '') {
        showFieldError(field, messages.purposeRequired);
        return false;
      }
    } else if (fieldType === 'message') {
      if (!value) {
        showFieldError(field, messages.messageRequired);
        return false;
      } else if (value.length < 10) {
        showFieldError(field, messages.messageMinLength);
        return false;
      }
    }
    
    clearFieldError(field);
    return true;
  }

  // Setup validation for each field
  const firstName = document.getElementById('first_name');
  const lastName = document.getElementById('last_name');
  const phone = document.getElementById('phone');
  const email = document.getElementById('email');
  const city = document.getElementById('city');
  const country = document.getElementById('countrySelect');
  const purpose = document.getElementById('purpose_inquiry');
  const message = document.getElementById('message');

  if (firstName) {
    firstName.addEventListener('blur', () => validateField(firstName, 'firstName'));
    firstName.addEventListener('input', () => {
      if (firstName.classList.contains('error')) {
        validateField(firstName, 'firstName');
      }
    });
  }

  if (lastName) {
    lastName.addEventListener('blur', () => validateField(lastName, 'lastName'));
    lastName.addEventListener('input', () => {
      if (lastName.classList.contains('error')) {
        validateField(lastName, 'lastName');
      }
    });
  }

  if (phone) {
    phone.addEventListener('blur', () => validateField(phone, 'phone'));
    phone.addEventListener('input', () => {
      if (phone.classList.contains('error')) {
        validateField(phone, 'phone');
      }
    });
  }

  if (email) {
    email.addEventListener('blur', () => validateField(email, 'email'));
    email.addEventListener('input', () => {
      if (email.classList.contains('error')) {
        validateField(email, 'email');
      }
    });
  }

  if (city) {
    city.addEventListener('blur', () => validateField(city, 'city'));
    city.addEventListener('input', () => {
      if (city.classList.contains('error')) {
        validateField(city, 'city');
      }
    });
  }

  if (country) {
    country.addEventListener('change', () => validateField(country, 'country'));
  }

  if (purpose) {
    purpose.addEventListener('change', () => validateField(purpose, 'purpose'));
  }

  if (message) {
    message.addEventListener('blur', () => validateField(message, 'message'));
    message.addEventListener('input', () => {
      if (message.classList.contains('error')) {
        validateField(message, 'message');
      }
    });
  }
}

// Contact Form Submission
document.addEventListener('DOMContentLoaded', function() {
  // Add validation styles
  addValidationStyles();
  
  const contactForm = document.querySelector('.gutena-forms-contact-form');
  const formSubmitBtn = document.getElementById('formSubmit');
  const formNotification = document.getElementById('formNotification');

  // Setup real-time validation
  const currentLang = localStorage.getItem('lang') || 'en';
  setupRealTimeValidation(currentLang);
  
  // Re-setup validation when language changes
  const desktopLanguageSelect = document.getElementById('languageSelect');
  const mobileLanguageSelect = document.getElementById('mobileLanguageSelect');
  
  function handleLangChangeForValidation() {
    const lang = localStorage.getItem('lang') || 'en';
    // Remove old event listeners by cloning elements (simplified approach)
    const firstName = document.getElementById('first_name');
    const lastName = document.getElementById('last_name');
    const phone = document.getElementById('phone');
    const email = document.getElementById('email');
    const country = document.getElementById('countrySelect');
    const purpose = document.getElementById('purpose_inquiry');
    const message = document.getElementById('message');
    
    // Clear errors and re-setup
    [firstName, lastName, phone, email, country, purpose, message].forEach(field => {
      if (field) clearFieldError(field);
    });
    
    setupRealTimeValidation(lang);
  }
  
  if (desktopLanguageSelect) {
    desktopLanguageSelect.addEventListener('change', handleLangChangeForValidation);
  }
  if (mobileLanguageSelect) {
    mobileLanguageSelect.addEventListener('change', handleLangChangeForValidation);
  }

  if (contactForm && formSubmitBtn) {
    contactForm.addEventListener('submit', async function(e) {
      e.preventDefault();

      // Get current language
      const currentLang = localStorage.getItem('lang') || 'en';
      
      // Validate form before submission
      if (!validateContactForm(currentLang)) {
        // Scroll to first error
        const firstError = contactForm.querySelector('.form-input.error, .form-select.error, .form-textarea.error');
        if (firstError) {
          firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
          firstError.focus();
        }
        return;
      }
      
      // Translation texts for loader and notifications
      const loaderTexts = {
        en: {
          title: "Forwarding your message...",
          subtitle: "Please wait, your message is being sent to the relevant team."
        },
        sr: {
          title: "Prosleđujem vašu poruku...",
          subtitle: "Trenutak, vaša poruka se šalje nadležnom timu."
        }
      };

      const loaderText = loaderTexts[currentLang] || loaderTexts.en;

      // Get success/error texts
      const successTexts = {
        en: {
          title: "Successfully forwarded!",
          message: "Your message has been successfully received and forwarded to the relevant team. You will be contacted as soon as possible."
        },
        sr: {
          title: "Uspešno prosleđeno!",
          message: "Vaša poruka je uspešno primljena i prosleđena nadležnom timu. Bićete kontaktirani u najkraćem mogućem roku."
        }
      };
      const successText = successTexts[currentLang] || successTexts.en;
      const errorText = getErrorNotification(currentLang);

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
      formSubmitBtn.disabled = true;

      // Get form data
      const formData = new FormData(contactForm);
      const data = {};
      formData.forEach((value, key) => {
        data[key] = value;
      });
      
      // Add language to data
      data.language = currentLang;

      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
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
              contactForm.reset();
              
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
            }
          }, 400);
          
        }, 300);

      } catch (error) {
        console.error('Error submitting form:', error);
        
        // Transform loading modal to error with smooth animation
        setTimeout(() => {
          const modalContent = loadingOverlay.querySelector('.modal-content');
          const modalTitle = loadingOverlay.querySelector('.modal-title');
          const modalMessage = loadingOverlay.querySelector('.modal-message');
          const loadingIcon = loadingOverlay.querySelector('.loading-icon');
          const errorIcon = loadingOverlay.querySelector('.error-icon');
          
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
          }, 400);
          
          // Close modal after 4 seconds (error)
          setTimeout(() => {
            const backdrop = loadingOverlay.querySelector('.modal-backdrop');
            backdrop.style.animation = 'fadeOut 0.3s ease-out';
            setTimeout(() => {
              loadingOverlay.remove();
            }, 300);
          }, 4000);
        }, 300);
      } finally {
        // Re-enable submit button
        setTimeout(() => {
          formSubmitBtn.disabled = false;
        }, 300);
      }
    });
  }
});


