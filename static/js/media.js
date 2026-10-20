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
            'media-initiative-p1': 'Fifteen young dancers from Belgrade, Novi Sad, and Vršac have earned the opportunity to represent Serbia at the World Dance Championships, taking place from <strong>December 5 to 9, 2026, in Poland.</strong>',
            'media-initiative-p2': 'Behind their success lie years of training, discipline, sacrifice, and perseverance. Ahead of them is a chance to present their talent and hard work on the international stage, alongside competitors from across the globe.',
            'media-initiative-p3': '<strong>Skynex Global is launching and organizing an initiative to collect donations and partner support to send these young dancers to the World Championships.</strong>',
            'media-initiative-p4': 'Our goal is simple: to ensure financial costs do not stand in the way of girls who have already earned their place on the world stage.',
            'media-initiative-sec1-title': 'WHO IS REPRESENTING SERBIA?',
            'media-initiative-sec1-p1': 'The competitors have earned qualification for:',
            'media-initiative-sec1-champ1': '<strong>IDO World Show Dance Championships 2026</strong>',
            'media-initiative-sec1-champ2': '<strong>IDO World Performing Arts Improvisation Championships 2026</strong>',
            'media-initiative-meta-loc-label': 'Location:',
            'media-initiative-meta-loc': 'Mikołajki, Poland – Hotel Gołębiewski',
            'media-initiative-meta-comp-label': 'Competition:',
            'media-initiative-meta-comp': 'December 5–9, 2026',
            'media-initiative-meta-trip-label': 'Travel Schedule:',
            'media-initiative-meta-trip': 'December 4–10, 2026',
            'media-initiative-meta-del-label': 'Delegation:',
            'media-initiative-meta-del': '15 competitors and 5 coaches',
            'media-initiative-clubs-p': 'Three dance clubs are participating in this initiative:',
            'media-initiative-club1': '<strong>Dance Station, Belgrade</strong> – 5 competitors and 2 coaches',
            'media-initiative-club2': '<strong>City Dance Studio, Novi Sad</strong> – 8 competitors and 2 coaches',
            'media-initiative-club3': '<strong>Super Star, Vršac</strong> – 2 competitors and 1 coach',
            'media-initiative-sec2-title': 'THEIR SUCCESS IS ALREADY ACHIEVED. NOW THEY NEED OUR SUPPORT.',
            'media-initiative-sec2-p1': 'For these girls, dance is not just an extracurricular activity. It represents years of dedication, rehearsals, sacrificed free time, and trying again whenever things don\'t go right on the first try.',
            'media-initiative-sec2-p2': 'They are not asking for anyone to hand them a result. They have already achieved it on merit.',
            'media-initiative-sec2-p3': 'However, qualifying for an international championship entails substantial expenses: transport, lodging, meals, entry fees, costumes, stage props, insurance, equipment, and other essential preparations.',
            'media-initiative-sec2-p4': 'These expenses are largely borne by families and clubs.',
            'media-initiative-sec2-highlight': '<strong>We believe that the opportunity for a child to represent their country should never depend solely on the financial means of their family.</strong>',
            'media-initiative-sec2-p5': 'That is why we decided to bring together companies, organizations, and individuals willing to support their hard work.',
            'media-initiative-sec3-title': 'INITIATIVE GOAL – 35,000 EUR',
            'media-initiative-sec3-p1': 'The initial initiative goal is <strong>35,000 EUR</strong>, through a combination of financial donations and direct partner support.',
            'media-initiative-sec3-p2': 'According to preliminary estimates, total expenses depend on logistics and transport choices and may exceed the initial goal.',
            'media-initiative-sec3-p3': 'Our goal is not to fund the entire sum solely through cash transfers, but to cover as much of the necessary costs as possible through direct partner engagement.',
            'media-initiative-sec4-title': 'HOW CAN YOU HELP?',
            'media-initiative-sec4-h1': 'Financial Donation',
            'media-initiative-sec4-p1': 'Citizens, companies, and organizations can contribute by donating to the dedicated Skynex Global bank account, clearly indicating the payment purpose.',
            'media-initiative-sec4-h2': 'Donation of Products or Services',
            'media-initiative-sec4-p2': 'We invite companies that can assist by providing transportation, accommodation, travel insurance, team apparel, equipment, food, water, refreshments, or other necessities for the delegation.',
            'media-initiative-sec4-h3': 'Direct Expense Coverage',
            'media-initiative-sec4-p3': 'Corporate partners can directly sponsor specific delegation needs based on official invoices and offers.',
            'media-initiative-sec4-h4': 'Spreading the Initiative',
            'media-initiative-sec4-p4': 'Share our call with companies, colleagues, and friends. Sometimes a single connection is enough to secure meaningful support.',
            'media-initiative-sec4-quote': '<strong>A single donor doesn\'t need to cover everything. It is enough for everyone who can to contribute a part towards our shared goal.</strong>',
            'media-initiative-sec5-title': 'PAYMENT DETAILS FOR DONATIONS',
            'media-initiative-sec5-rsd-badge': 'Donations from Serbia – RSD',
            'media-initiative-bank-recipient-label': 'Recipient:',
            'media-initiative-bank-recipient': 'SKAJNEKS GLOBAL',
            'media-initiative-bank-name-label': 'Bank:',
            'media-initiative-bank-name': 'Raiffeisen banka a.d. Beograd',
            'media-initiative-bank-acc-label': 'RSD Account:',
            'media-initiative-bank-purpose-label': 'Payment purpose:',
            'media-initiative-bank-purpose': 'Donacija – IDO svetska prvenstva, Poljska 2026.',
            'media-initiative-sec5-eur-badge': 'Donations from Abroad – EUR',
            'media-initiative-eur-beneficiary-label': 'Beneficiary:',
            'media-initiative-eur-address-label': 'Address:',
            'media-initiative-eur-currency-label': 'Currency:',
            'media-initiative-eur-purpose-label': 'Payment purpose:',
            'media-initiative-eur-purpose': 'Donation for IDO World Championships 2026 – Poland',
            'media-initiative-sec5-org-badge': 'Organization Information',
            'media-initiative-org-name-label': 'Name:',
            'media-initiative-org-name': 'Skynex Global (Skajneks Global – banking legal name)',
            'media-initiative-org-addr-label': 'Registered Address:',
            'media-initiative-org-addr': 'Čolak Antina 11, Savski venac, 11000 Belgrade, Serbia',
            'media-initiative-org-mb-label': 'Registration No.:',
            'media-initiative-sec6-title': 'TRANSPARENCY AND ACCOUNTABILITY',
            'media-initiative-sec6-p1': 'Skynex Global is the initiator and coordinator of donation collection and partner support.',
            'media-initiative-sec6-p2': 'Our role is to connect interested companies, organizations, and citizens with the concrete needs of the delegation, coordinate assistance, and maintain transparent records of received donations and their allocation.',
            'media-initiative-sec6-p3': 'Collected funds are dedicated exclusively to travel, preparation, and participation costs for the competitors and their coaches at these championships.',
            'media-initiative-sec6-p4': 'Dedicated bookkeeping will be maintained for all funds passing through Skynex Global, and upon conclusion of the initiative, a comprehensive summary of realized support and expenses will be compiled.',
            'media-initiative-sec6-p5': 'Wherever feasible, partners will be enabled to directly cover specific expenses.',
            'media-initiative-sec6-p6': 'Sports and competitive aspects are organized by the respective clubs and sports governing bodies. Skynex Global acts not as the championship organizer, but as the organizer of this support initiative.',
            'media-initiative-sec7-title': 'BE PART OF THEIR JOURNEY',
            'media-initiative-sec7-p1': 'This is not merely support for a single journey.',
            'media-initiative-sec7-p2': 'This is an opportunity for fifteen girls to see that years of hard work are recognized far beyond the dance studio. To see that there are people and companies who believe young talents deserve the chance to advance, gain experience, and represent Serbia.',
            'media-initiative-sec7-p3': 'We cannot take the stage for them. But we can help them reach the stage where they can show what they are capable of.',
            'media-initiative-sec7-highlight': '<strong>They have earned their place. Let\'s help them take it.</strong>',
            'media-initiative-sec8-title': 'CONTACT FOR DONATIONS AND PARTNERSHIPS',
            'media-initiative-sec8-tagline': '<strong>Let\'s support their journey to the world stage.</strong>',
            
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
            'media-initiative-p1': 'Petnaest mladih plesačica iz Beograda, Novog Sada i Vršca izborilo je priliku da predstavlja Srbiju na svetskim prvenstvima u plesu, koja će se održati od <strong>5. do 9. decembra 2026. godine u Poljskoj.</strong>',
            'media-initiative-p2': 'Iza njihovog uspeha stoje godine treninga, discipline, odricanja i upornosti. Pred njima je prilika da svoj talenat i rad predstave na međunarodnoj sceni, zajedno sa takmičarima iz drugih zemalja.',
            'media-initiative-p3': '<strong>Skynex Global pokreće i organizuje inicijativu prikupljanja donacija i partnerske podrške za odlazak ovih mladih takmičarki na svetsko prvenstvo.</strong>',
            'media-initiative-p4': 'Naš cilj je jednostavan: da finansijski troškovi ne budu prepreka devojčicama koje su svojim rezultatima već zaslužile mesto na svetskoj sceni.',
            'media-initiative-sec1-title': 'KO PREDSTAVLJA SRBIJU?',
            'media-initiative-sec1-p1': 'Takmičarke su izborile nastup na:',
            'media-initiative-sec1-champ1': '<strong>IDO World Show Dance Championships 2026</strong>',
            'media-initiative-sec1-champ2': '<strong>IDO World Performing Arts Improvisation Championships 2026</strong>',
            'media-initiative-meta-loc-label': 'Mesto:',
            'media-initiative-meta-loc': 'Mikołajki, Poljska – Hotel Gołębiewski',
            'media-initiative-meta-comp-label': 'Takmičenje:',
            'media-initiative-meta-comp': '5–9. decembar 2026.',
            'media-initiative-meta-trip-label': 'Plan putovanja:',
            'media-initiative-meta-trip': '4–10. decembar 2026.',
            'media-initiative-meta-del-label': 'Delegacija:',
            'media-initiative-meta-del': '15 takmičarki i 5 trenera',
            'media-initiative-clubs-p': 'U inicijativi učestvuju tri plesna kluba:',
            'media-initiative-club1': '<strong>Dance Station, Beograd</strong> – 5 takmičarki i 2 trenera',
            'media-initiative-club2': '<strong>City Dance Studio, Novi Sad</strong> – 8 takmičarki i 2 trenera',
            'media-initiative-club3': '<strong>Super Star, Vršac</strong> – 2 takmičarke i 1 trener',
            'media-initiative-sec2-title': 'NJIHOV USPEH JE VEĆ OSTVAREN. SADA IM JE POTREBNA PODRŠKA.',
            'media-initiative-sec2-p1': 'Za ove devojčice ples nije samo vannastavna aktivnost. To su godine posvećenosti, vežbanja, odustajanja od slobodnog vremena i ponovnih pokušaja kada nešto ne uspe iz prvog puta.',
            'media-initiative-sec2-p2': 'One ne traže da im neko pokloni rezultat. Svoj rezultat su već ostvarile.',
            'media-initiative-sec2-p3': 'Međutim, plasman na međunarodno takmičenje podrazumeva i značajne troškove: prevoz, smeštaj, ishranu, kotizacije, kostime, scenografiju, osiguranje, opremu i druge neophodne pripreme.',
            'media-initiative-sec2-p4': 'Te troškove u velikoj meri snose porodice i klubovi.',
            'media-initiative-sec2-highlight': '<strong>Verujemo da prilika da dete predstavlja svoju zemlju ne bi trebalo da zavisi isključivo od finansijskih mogućnosti njegove porodice.</strong>',
            'media-initiative-sec2-p5': 'Zato smo odlučili da okupimo kompanije, organizacije i pojedince koji žele da podrže njihov trud.',
            'media-initiative-sec3-title': 'CILJ INICIJATIVE – 35.000 EUR',
            'media-initiative-sec3-p1': 'Početni cilj inicijative iznosi <strong>35.000 EUR</strong>, kroz kombinaciju finansijskih donacija i direktne podrške partnera.',
            'media-initiative-sec3-p2': 'Prema preliminarnim procenama, ukupni troškovi zavise od izbora prevoza i logistike i mogu biti viši od početnog cilja.',
            'media-initiative-sec3-p3': 'Naš cilj nije da se čitav iznos obezbedi isključivo novčanim uplatama, već da što veći deo potrebnih troškova bude pokriven direktnim angažovanjem partnera.',
            'media-initiative-sec4-title': 'KAKO MOŽETE DA POMOGNETE?',
            'media-initiative-sec4-h1': 'Finansijskom donacijom',
            'media-initiative-sec4-p1': 'Građani, kompanije i organizacije mogu uplatiti donaciju na namenski račun Skynex Globala, uz jasno naznačenu svrhu uplate.',
            'media-initiative-sec4-h2': 'Donacijom proizvoda ili usluga',
            'media-initiative-sec4-p2': 'Pozivamo kompanije koje mogu da pomognu obezbeđivanjem prevoza, smeštaja, putnog osiguranja, garderobe, opreme, hrane, vode, napitaka ili drugih potrepština za delegaciju.',
            'media-initiative-sec4-h3': 'Direktnim pokrivanjem troškova',
            'media-initiative-sec4-p3': 'Poslovni partneri mogu preuzeti finansiranje konkretnih potreba delegacije, na osnovu zvaničnih ponuda i računa.',
            'media-initiative-sec4-h4': 'Širenjem inicijative',
            'media-initiative-sec4-p4': 'Podelite naš poziv sa kompanijama, kolegama i prijateljima. Nekada je upravo jedno povezivanje dovoljno da se obezbedi značajna podrška.',
            'media-initiative-sec4-quote': '<strong>Ne mora jedan donator da obezbedi sve. Dovoljno je da svako ko može doprinese jednom delu zajedničkog cilja.</strong>',
            'media-initiative-sec5-title': 'PODACI ZA UPLATU DONACIJA',
            'media-initiative-sec5-rsd-badge': 'Donacije iz Srbije – RSD',
            'media-initiative-bank-recipient-label': 'Primalac:',
            'media-initiative-bank-recipient': 'SKAJNEKS GLOBAL',
            'media-initiative-bank-name-label': 'Banka:',
            'media-initiative-bank-name': 'Raiffeisen banka a.d. Beograd',
            'media-initiative-bank-acc-label': 'Dinarski račun:',
            'media-initiative-bank-purpose-label': 'Svrha uplate:',
            'media-initiative-bank-purpose': 'Donacija – IDO svetska prvenstva, Poljska 2026.',
            'media-initiative-sec5-eur-badge': 'Donacije iz inostranstva – EUR',
            'media-initiative-eur-beneficiary-label': 'Beneficiary:',
            'media-initiative-eur-address-label': 'Address:',
            'media-initiative-eur-currency-label': 'Currency:',
            'media-initiative-eur-purpose-label': 'Payment purpose:',
            'media-initiative-eur-purpose': 'Donation for IDO World Championships 2026 – Poland',
            'media-initiative-sec5-org-badge': 'Podaci o organizaciji',
            'media-initiative-org-name-label': 'Naziv:',
            'media-initiative-org-name': 'Skynex Global (Skajneks Global – naziv kod banke)',
            'media-initiative-org-addr-label': 'Sedište:',
            'media-initiative-org-addr': 'Čolak Antina 11, Savski venac, 11000 Beograd, Srbija',
            'media-initiative-org-mb-label': 'Matični broj:',
            'media-initiative-sec6-title': 'TRANSPARENTNOST I ODGOVORNOST',
            'media-initiative-sec6-p1': 'Skynex Global je inicijator i koordinator prikupljanja donacija i partnerske podrške.',
            'media-initiative-sec6-p2': 'Naša uloga je da povežemo zainteresovane kompanije, organizacije i građane sa konkretnim potrebama delegacije, koordiniramo podršku i vodimo evidenciju primljenih donacija i njihove namene.',
            'media-initiative-sec6-p3': 'Prikupljena sredstva namenjena su troškovima odlaska, pripreme i učešća takmičarki i njihovih trenera na navedenim prvenstvima.',
            'media-initiative-sec6-p4': 'Za sredstva koja prolaze preko Skynex Globala vodiće se namenska evidencija, a po završetku inicijative biće pripremljen pregled realizovane podrške i troškova.',
            'media-initiative-sec6-p5': 'Gde god je moguće, partnerima će biti omogućeno direktno pokrivanje konkretnih troškova.',
            'media-initiative-sec6-p6': 'Sportsko-takmičarski deo učešća organizuju nadležni klubovi i sportske organizacije. Skynex Global ne nastupa kao organizator svetskih prvenstava, već kao organizator ove inicijative podrške.',
            'media-initiative-sec7-title': 'BUDITE DEO NJIHOVOG PUTA',
            'media-initiative-sec7-p1': 'Ovo nije samo podrška jednom putovanju.',
            'media-initiative-sec7-p2': 'Ovo je prilika da petnaest devojčica vidi da se godine njihovog rada prepoznaju i izvan plesne sale. Da postoje ljudi i kompanije kojima je važno da mladi talenti imaju priliku da napreduju, stiču iskustva i predstavljaju Srbiju.',
            'media-initiative-sec7-p3': 'Ne možemo nastupiti umesto njih. Ali možemo pomoći da stignu na scenu na kojoj će pokazati šta znaju.',
            'media-initiative-sec7-highlight': '<strong>One su svoje mesto zaslužile. Pomozimo im da ga zauzmu.</strong>',
            'media-initiative-sec8-title': 'KONTAKT ZA DONACIJE I PARTNERSTVA',
            'media-initiative-sec8-tagline': '<strong>Podržimo njihov put do svetske scene.</strong>',

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

