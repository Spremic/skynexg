// Email templates for different inquiry types
// Professional HTML email designs for Skynex Global

const getEmailTemplate = (category, data, language = 'sr') => {
  const { first_name, last_name, email, phone, company_name, country, message } = data;
  const lang = language === 'en' ? 'en' : 'sr';

  // Normalize category from UI (select values) to template keys
  const normalizedCategory = (() => {
    const c = (category || "").trim();
    if (c === "Media & Press" || c === "Media") return "Media";
    if (c === "Other" || c === "Other / General Inquiry") return "Other";
    return c;
  })();

  const baseStyle = `
    <style>
      body {
        margin: 0;
        padding: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
        background-color: #f4f4f4;
      }
      .email-container {
        max-width: 600px;
        margin: 0 auto;
        background-color: #ffffff;
      }
      .header {
        background-color: #000000;
        padding: 40px 30px;
        text-align: center;
      }
      .logo {
        font-size: 28px;
        font-weight: 700;
        color: #FDB913;
        letter-spacing: 1px;
        margin: 0;
      }
      .tagline {
        font-size: 11px;
        color: #ffffff;
        margin-top: 8px;
        letter-spacing: 2px;
        text-transform: uppercase;
      }
      .content {
        padding: 40px 30px;
        color: #333333;
        line-height: 1.6;
      }
      .greeting {
        font-size: 16px;
        margin-bottom: 20px;
        color: #000000;
      }
      .message-text {
        font-size: 15px;
        color: #333333;
        margin-bottom: 15px;
      }
      .signature {
        margin-top: 30px;
        padding-top: 20px;
        border-top: 1px solid #e0e0e0;
      }
      .signature-name {
        font-weight: 600;
        color: #000000;
        margin-bottom: 5px;
      }
      .signature-tagline {
        font-size: 12px;
        color: #666666;
        font-style: italic;
      }
      .footer {
        background-color: #f8f8f8;
        padding: 30px;
        text-align: center;
        border-top: 3px solid #FDB913;
      }
      .footer-text {
        font-size: 12px;
        color: #666666;
        margin: 5px 0;
      }
      .footer-link {
        color: #FDB913;
        text-decoration: none;
      }
      .divider {
        height: 2px;
        background: linear-gradient(to right, transparent, #FDB913, transparent);
        margin: 25px 0;
      }
    </style>
  `;

  // Email content based on category and language
  const emailContent = {
    sr: {
      "Education / Schools (IRIS model)": {
        subject: "Hvala na interesovanju za IRIS Education Model - Skynex Global",
        greeting: "Poštovani,",
        body: `
          <p class="message-text">Hvala Vam što ste kontaktirali Skynex Global u vezi saradnje i primene IRIS modela.</p>
          <p class="message-text">Vaš upit je uspešno primljen i prosleđen nadležnom timu. U najkraćem roku ćemo vam se javiti sa dodatnim informacijama ili predlogom narednih koraka.</p>
          <p class="message-text">Skynex Global razvija dugoročna partnerstva sa obrazovnim institucijama sa ciljem stvaranja savremenih, održivih i odgovorno dizajniranih obrazovnih sistema.</p>
        `,
        signature: "Srdačan pozdrav,",
        tagline: "Education • Media • Technology"
      },
      "Partnerships": {
        subject: "Upit za partnerstvo primljen - Skynex Global",
        greeting: "Poštovani,",
        body: `
          <p class="message-text">Hvala vam na interesovanju za saradnju sa Skynex Global ekosistemom.</p>
          <p class="message-text">Vaša poruka je primljena i prosleđena timu zaduženom za partnerstva. Nakon internog razmatranja, bićete kontaktirani radi daljeg usklađivanja potencijalne saradnje.</p>
          <p class="message-text">Skynex Global gradi partnerstva zasnovana na zajedničkim vrednostima, dugoročnom razvoju i sistemskom pristupu.</p>
        `,
        signature: "Srdačan pozdrav,",
        tagline: "Education • Media • Technology"
      },
      "Institutions & Public Sector": {
        subject: "Institucionalni upit primljen - Skynex Global",
        greeting: "Poštovani,",
        body: `
          <p class="message-text">Hvala Vam što ste kontaktirali Skynex Global.</p>
          <p class="message-text">Vaš upit je evidentiran i prosleđen odgovornim osobama za saradnju sa institucijama i javnim sektorom. Uskoro ćemo vam se obratiti sa relevantnim informacijama.</p>
          <p class="message-text">Skynex Global neguje odgovoran i transparentan pristup saradnji sa institucijama u oblasti obrazovanja, tehnologije i društvenog razvoja.</p>
        `,
        signature: "S poštovanjem,",
        tagline: ""
      },
      "Private Companies & Initiatives": {
        subject: "Poslovni upit primljen - Skynex Global",
        greeting: "Poštovani,",
        body: `
          <p class="message-text">Hvala vam što ste nas kontaktirali u vezi sa potencijalnom poslovnom saradnjom.</p>
          <p class="message-text">Vaš upit je uspešno primljen i biće razmotren od strane tima za strateške inicijative i saradnju sa privatnim sektorom. Očekujte naš odgovor u narednom periodu.</p>
          <p class="message-text">Skynex Global sarađuje sa kompanijama i inicijativama koje dele viziju odgovorne primene znanja i tehnologije.</p>
        `,
        signature: "Srdačan pozdrav,",
        tagline: ""
      },
      "Media": {
        subject: "Medijski upit primljen - Skynex Global",
        greeting: "Poštovani,",
        body: `
          <p class="message-text">Hvala vam na interesovanju za Skynex Global i naš rad.</p>
          <p class="message-text">Vaš medijski upit je primljen i prosleđen timu zaduženom za komunikaciju i medije. Bićete kontaktirani u najkraćem mogućem roku.</p>
          <p class="message-text">Skynex Global rado učestvuje u razgovorima, intervjuima i sadržajima koji doprinose kvalitetnom javnom diskursu.</p>
        `,
        signature: "Srdačan pozdrav,",
        tagline: "Media & Communications"
      },
      "Careers": {
        subject: "Upit za karijeru primljen - Skynex Global",
        greeting: "Poštovani,",
        body: `
          <p class="message-text">Hvala vam na interesovanju za profesionalnu saradnju sa Skynex Global-om.</p>
          <p class="message-text">Vaša prijava ili upit su uspešno primljeni i biće razmotreni od strane tima zaduženog za razvoj ljudskih resursa i saradnika. Ukoliko postoji podudarnost sa trenutnim potrebama, bićete kontaktirani.</p>
          <p class="message-text">Skynex Global okuplja ljude koji veruju u znanje, odgovornost i dugoročni razvoj.</p>
        `,
        signature: "Srdačan pozdrav,",
        tagline: ""
      },
      "Legal & IP": {
        subject: "Pravni upit primljen - Skynex Global",
        greeting: "Poštovani,",
        body: `
          <p class="message-text">Hvala Vam što ste kontaktirali Skynex Global u vezi sa pravnim pitanjima ili intelektualnom svojinom.</p>
          <p class="message-text">Vaš upit je primljen i prosleđen pravnom timu. Bićete kontaktirani u skladu sa prirodom upita i prioritetom obrade.</p>
          <p class="message-text">Skynex Global pridaje poseban značaj zaštiti intelektualne svojine i pravnoj jasnoći u svim segmentima svog ekosistema.</p>
        `,
        signature: "S poštovanjem,",
        tagline: ""
      },
      "Other": {
        subject: "Upit primljen - Skynex Global",
        greeting: "Poštovani,",
        body: `
          <p class="message-text">Hvala vam što ste kontaktirali Skynex Global.</p>
          <p class="message-text">Vaša poruka je uspešno primljena i prosleđena odgovarajućem timu. Uložićemo napor da vam odgovorimo u najkraćem mogućem roku.</p>
        `,
        signature: "Srdačan pozdrav,",
        tagline: "Education • Media • Technology"
      }
    },
    en: {
      "Education / Schools (IRIS model)": {
        subject: "Thank You for Your Interest in IRIS Education Model - Skynex Global",
        greeting: "DEAR",
        body: `
          <p class="message-text">Thank you for contacting <strong>Skynex Global</strong> regarding cooperation and implementation of the <strong>IRIS model</strong>.</p>
          <p class="message-text">Your inquiry has been successfully received and forwarded to the relevant team. We will contact you shortly with additional information or a proposal for next steps.</p>
          <p class="message-text">Skynex Global develops long-term partnerships with educational institutions with the goal of creating modern, sustainable, and responsibly designed educational systems.</p>
        `,
        signature: "Best regards,",
        tagline: "Education • Media • Technology"
      },
      "Partnerships": {
        subject: "Partnership Inquiry Received - Skynex Global",
        greeting: "DEAR",
        body: `
          <p class="message-text">Thank you for your interest in cooperation with the <strong>Skynex Global</strong> ecosystem.</p>
          <p class="message-text">Your message has been received and forwarded to the team responsible for partnerships. After internal consideration, you will be contacted for further coordination of potential cooperation.</p>
          <p class="message-text">Skynex Global builds partnerships based on shared values, long-term development, and a systematic approach.</p>
        `,
        signature: "Best regards,",
        tagline: "Education • Media • Technology"
      },
      "Institutions & Public Sector": {
        subject: "Institutional Inquiry Received - Skynex Global",
        greeting: "DEAR",
        body: `
          <p class="message-text">Thank you for contacting <strong>Skynex Global</strong>.</p>
          <p class="message-text">Your inquiry has been recorded and forwarded to the persons responsible for cooperation with institutions and the public sector. We will contact you shortly with relevant information.</p>
          <p class="message-text">Skynex Global maintains a responsible and transparent approach to cooperation with institutions in the field of education, technology, and social development.</p>
        `,
        signature: "Respectfully,",
        tagline: ""
      },
      "Private Companies & Initiatives": {
        subject: "Business Inquiry Received - Skynex Global",
        greeting: "DEAR",
        body: `
          <p class="message-text">Thank you for contacting us regarding potential business cooperation.</p>
          <p class="message-text">Your inquiry has been successfully received and will be reviewed by the team for strategic initiatives and cooperation with the private sector. Expect our response in the upcoming period.</p>
          <p class="message-text">Skynex Global cooperates with companies and initiatives that share the vision of responsible application of knowledge and technology.</p>
        `,
        signature: "Best regards,",
        tagline: ""
      },
      "Media": {
        subject: "Media Inquiry Received - Skynex Global",
        greeting: "DEAR",
        body: `
          <p class="message-text">Thank you for your interest in <strong>Skynex Global</strong> and our work.</p>
          <p class="message-text">Your media inquiry has been received and forwarded to the team responsible for communication and media. You will be contacted as soon as possible.</p>
          <p class="message-text">Skynex Global gladly participates in conversations, interviews, and content that contribute to quality public discourse.</p>
        `,
        signature: "Best regards,",
        tagline: "Media & Communications"
      },
      "Careers": {
        subject: "Career Inquiry Received - Skynex Global",
        greeting: "DEAR",
        body: `
          <p class="message-text">Thank you for your interest in professional cooperation with <strong>Skynex Global</strong>.</p>
          <p class="message-text">Your application or inquiry has been successfully received and will be reviewed by the team responsible for human resources and associates development. If there is a match with current needs, you will be contacted.</p>
          <p class="message-text">Skynex Global gathers people who believe in knowledge, responsibility, and long-term development.</p>
        `,
        signature: "Best regards,",
        tagline: ""
      },
      "Legal & IP": {
        subject: "Legal Inquiry Received - Skynex Global",
        greeting: "DEAR",
        body: `
          <p class="message-text">Thank you for contacting <strong>Skynex Global</strong> regarding legal matters or intellectual property.</p>
          <p class="message-text">Your inquiry has been received and forwarded to the legal team. You will be contacted in accordance with the nature of the inquiry and processing priority.</p>
          <p class="message-text">Skynex Global attaches special importance to the protection of intellectual property and legal clarity in all segments of its ecosystem.</p>
        `,
        signature: "Respectfully,",
        tagline: ""
      },
      "Other": {
        subject: "Inquiry Received - Skynex Global",
        greeting: "DEAR",
        body: `
          <p class="message-text">Thank you for contacting <strong>Skynex Global</strong>.</p>
          <p class="message-text">Your message has been successfully received and forwarded to the appropriate team. We will make an effort to respond to you as soon as possible.</p>
        `,
        signature: "Best regards,",
        tagline: "Education • Media • Technology"
      }
    }
  };

  const content = emailContent[lang][normalizedCategory] || emailContent[lang]["Other"];

  return {
    subject: content.subject,
    html: `
      <!DOCTYPE html>
      <html lang="${lang}">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        ${baseStyle}
      </head>
      <body>
        <div class="email-container">
          <!-- Header -->
          <div class="header">
            <h1 class="logo">SKYNEX GLOBAL</h1>
            <p class="tagline">Education • Media • Technology</p>
          </div>

          <!-- Content -->
          <div class="content">
            <p class="greeting">${content.greeting}</p>
            ${content.body}
            <div class="divider"></div>
            <div class="signature">
              <p class="signature-name">${content.signature}<br>Skynex Global</p>
              ${content.tagline ? `<p class="signature-tagline">${content.tagline}</p>` : ''}
            </div>
          </div>

          <!-- Footer -->
          <div class="footer">
            <p class="footer-text"><strong>Skynex Global</strong></p>
            <p class="footer-text">Belgrade, Serbia</p>
            <p class="footer-text">
              <a href="mailto:info@skynexg.com" class="footer-link">info@skynexg.com</a>
            </p>
            <p class="footer-text" style="margin-top: 15px; font-size: 11px;">
              © 2026 Skynex Global. All rights reserved.
            </p>
          </div>
        </div>
      </body>
      </html>
    `
  };
};

module.exports = { getEmailTemplate };
