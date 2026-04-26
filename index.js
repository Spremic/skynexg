const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
require("dotenv").config();
const { getEmailTemplate } = require("./emailTemplates");

const port = process.env.PORT || 3000;

// Determine which company inbox should receive the inquiry
const getRecipientForCategory = (category) => {
  const normalized = (category || "").trim().toLowerCase();

  // Explicit mapping for all categories
  const map = {
    "car reservation": "booking@rentacar.com",
    "long-term rental": "sales@rentacar.com",
    "airport transfer": "transfer@rentacar.com",
    "corporate partnership": "b2b@rentacar.com",
    "careers": "hr@rentacar.com",
    "other": "info@rentacar.com",
    "other": "info@skynexg.com",
    "other / general inquiry": "info@skynexg.com",
  };

  return map[normalized] || "info@skynexg.com";
};

const app = express();
app.use(express.static(__dirname + "/static/css"));
app.use(express.static(__dirname + "/static/img"));
app.use(express.static(__dirname + "/static/js"));
app.use("/", express.static(path.join(__dirname, "static")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Route for home page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "static", "index.html"));
});

// Route for legal page
app.get("/legal", (req, res) => {
  res.sendFile(path.join(__dirname, "static", "legal.html"));
});

// Route for products page
app.get("/products", (req, res) => {
  res.sendFile(path.join(__dirname, "static", "products.html"));
});

// Route for media page
app.get("/media", (req, res) => {
  res.sendFile(path.join(__dirname, "static", "media.html"));
});

// Route for careers page
app.get("/careers", (req, res) => {
  res.sendFile(path.join(__dirname, "static", "careers.html"));
});

// Contact form submission endpoint
app.post("/api/contact", async (req, res) => {
  try {
    const {
      first_name,
      last_name,
      subject, // phone field
      f_0, // email field
      f_1, // company name
      f_3, // country
      purpose_inquiry,
      message,
      language // language from frontend
    } = req.body;

    // Validation
    if (!first_name || !last_name || !f_0 || !purpose_inquiry || !message) {
      return res.status(400).json({ 
        success: false, 
        message: "Molimo popunite sva obavezna polja." 
      });
    }

    // Configure nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Get email template based on category and language
    const emailData = {
      first_name,
      last_name,
      email: f_0,
      phone: subject,
      company_name: f_1,
      country: f_3,
      message
    };

    const { subject: emailSubject, html: emailHtml } = getEmailTemplate(purpose_inquiry, emailData, language || 'sr');

    // Email options - send to user
    const userMailOptions = {
      from: `"Skynex Global" <${process.env.EMAIL_USER}>`,
      to: f_0,
      subject: emailSubject,
      html: emailHtml,
    };

    // Email options - notification to company
    const companyMailOptions = {
      from: `"Skynex Global Contact Form" <${process.env.EMAIL_USER}>`,
      to: getRecipientForCategory(purpose_inquiry),
      subject: `New Contact Form Submission - ${purpose_inquiry}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #000; color: #FDB913; padding: 20px; text-align: center; }
            .content { background-color: #f9f9f9; padding: 20px; border: 1px solid #ddd; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #000; }
            .value { margin-top: 5px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>New Contact Form Submission</h2>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Category:</div>
                <div class="value">${purpose_inquiry}</div>
              </div>
              <div class="field">
                <div class="label">Name:</div>
                <div class="value">${first_name} ${last_name}</div>
              </div>
              <div class="field">
                <div class="label">E-mail:</div>
                <div class="value">${f_0}</div>
              </div>
              <div class="field">
                <div class="label">Phone:</div>
                <div class="value">${subject || 'N/A'}</div>
              </div>
              <div class="field">
                <div class="label">Company:</div>
                <div class="value">${f_1 || 'N/A'}</div>
              </div>
              <div class="field">
                <div class="label">Country:</div>
                <div class="value">${f_3 || 'N/A'}</div>
              </div>
              <div class="field">
                <div class="label">Message:</div>
                <div class="value">${message}</div>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // Send both emails in parallel for maximum speed
    await Promise.all([
      transporter.sendMail(userMailOptions),
      transporter.sendMail(companyMailOptions)
    ]);

    res.status(200).json({ 
      success: true, 
      message: "Vaša poruka je uspešno poslata!" 
    });

  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ 
      success: false, 
      message: "Došlo je do greške pri slanju poruke. Molimo pokušajte ponovo." 
    });
  }
});

// Newsletter subscription endpoint
app.post("/api/newsletter", async (req, res) => {
  try {
    const { email, language } = req.body;

    // Validation
    if (!email || !email.trim()) {
      return res.status(400).json({ 
        success: false, 
        message: language === 'en' 
          ? "Email address is required." 
          : "Email adresa je obavezna." 
      });
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return res.status(400).json({ 
        success: false, 
        message: language === 'en' 
          ? "Please enter a valid email address." 
          : "Molimo unesite validnu email adresu." 
      });
    }

    // Configure nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const lang = language === 'en' ? 'en' : 'sr';

    // Newsletter confirmation email to user
    const userMailOptions = {
      from: `"Skynex Global" <${process.env.EMAIL_USER}>`,
      to: email.trim(),
      subject: lang === 'en' 
        ? "Thank You for Subscribing to Skynex Global Newsletter" 
        : "Hvala vam što ste se pretplatili na Skynex Global Newsletter",
      html: `
        <!DOCTYPE html>
        <html lang="${lang}">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
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
        </head>
        <body>
          <div class="email-container">
            <div class="header">
              <h1 class="logo">SKYNEX GLOBAL</h1>
              <p class="tagline">Education • Media • Technology</p>
            </div>
            <div class="content">
              <p class="greeting">${lang === 'en' ? 'Dear Subscriber,' : 'Poštovani,'}</p>
              <p class="message-text">
                ${lang === 'en' 
                  ? 'Thank you for subscribing to the Skynex Global newsletter and becoming part of our community.' 
                  : 'Hvala vam što ste se prijavili na Skynex Global newsletter i postali deo naše zajednice.'}
              </p>
              <p class="message-text">
                ${lang === 'en' 
                  ? 'Through this channel, you will receive updates, insights, and key developments across education, media, and technology, as well as initiatives shaping the future of knowledge and innovation.' 
                  : 'Kroz ovaj kanal deliemo sa vama važne novosti, uvide i razvojne korake iz oblasti obrazovanja, medija i tehnologije, kao i projekte koji oblikuju budućnost znanja i inovacija.'}
              </p>
              <p class="message-text">
                ${lang === 'en' 
                  ? 'We\'re glad to have you with us on this journey.' 
                  : 'Drago nam je što ste sa nama na ovom putu.'}
              </p>
              <p class="message-text">
                ${lang === 'en' 
                  ? 'If you have any questions or would like to learn more, feel free to contact us at <a href="mailto:info@skynexg.com" style="color: #FDB913;">info@skynexg.com</a>' 
                  : 'Za sva pitanja ili dodatne informacije, slobodno nam se obratite na <a href="mailto:info@skynexg.com" style="color: #FDB913;">info@skynexg.com</a>'}
              </p>
              <div class="divider"></div>
              <div class="signature">
                <p class="signature-name">${lang === 'en' ? 'Kind regards,' : 'Srdačan pozdrav,'}<br>Skynex Global Team</p>
                <p class="signature-tagline">Education • Media • Technology</p>
              </div>
            </div>
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
      `,
    };

    // Notification email to info@skynexg.com
    const companyMailOptions = {
      from: `"Skynex Global Newsletter" <${process.env.EMAIL_USER}>`,
      to: "info@skynexg.com",
      subject: `New Newsletter Subscription - ${email.trim()}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #000; color: #FDB913; padding: 20px; text-align: center; }
            .content { background-color: #f9f9f9; padding: 20px; border: 1px solid #ddd; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #000; }
            .value { margin-top: 5px; color: #333; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>New Newsletter Subscription</h2>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Email Address:</div>
                <div class="value">${email.trim()}</div>
              </div>
              <div class="field">
                <div class="label">Subscription Date:</div>
                <div class="value">${new Date().toLocaleString('sr-RS', { timeZone: 'Europe/Belgrade' })}</div>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // Send both emails in parallel
    await Promise.all([
      transporter.sendMail(userMailOptions),
      transporter.sendMail(companyMailOptions)
    ]);

    res.status(200).json({ 
      success: true, 
      message: lang === 'en' 
        ? "Thank you for subscribing! Please check your email for confirmation." 
        : "Hvala vam na pretplati! Molimo proverite vašu email adresu za potvrdu." 
    });

  } catch (error) {
    console.error("Error sending newsletter email:", error);
    res.status(500).json({ 
      success: false, 
      message: req.body.language === 'en' 
        ? "An error occurred while processing your subscription. Please try again." 
        : "Došlo je do greške pri obradi vaše pretplate. Molimo pokušajte ponovo." 
    });
  }
});

// 404 handler - must be after all other routes
// This will catch all routes that don't match defined routes or static files
app.use((req, res, next) => {
  // Don't handle API routes - let them return JSON 404
  if (req.path.startsWith('/api/')) {
    return res.status(404).json({ 
      success: false, 
      message: "Endpoint not found." 
    });
  }
  
  // For all other non-existent routes, send the custom 404 page
  res.status(404).sendFile(path.join(__dirname, "static", "404.html"));
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
