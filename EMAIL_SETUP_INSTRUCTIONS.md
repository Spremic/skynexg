# Email Setup Instructions - Nodemailer Configuration

## 📧 Setup Guide

### 1. Create `.env` File

Create a file named `.env` in the root directory of your project (same level as `index.js`).

### 2. Add Email Credentials

Add the following content to your `.env` file:

```env
# Email Configuration
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-specific-password
```

---

## 🔐 Gmail Setup (Recommended)

### Option 1: Using Gmail with App Password (Most Secure)

1. **Enable 2-Step Verification:**
   - Go to your Google Account: https://myaccount.google.com/
   - Navigate to **Security** → **2-Step Verification**
   - Follow the steps to enable it

2. **Generate App Password:**
   - Go to: https://myaccount.google.com/apppasswords
   - Select **Mail** and **Other (Custom name)**
   - Enter a name like "Skynex Contact Form"
   - Click **Generate**
   - Copy the 16-character password

3. **Update `.env` file:**
```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=abcd efgh ijkl mnop
```
*(Use the 16-character password you just generated)*

---

## 🎯 Alternative Email Providers

### Outlook/Hotmail

```env
EMAIL_USER=your-email@outlook.com
EMAIL_PASS=your-password
```

Update `index.js` transporter configuration:
```javascript
const transporter = nodemailer.createTransport({
  service: "hotmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
```

### Custom SMTP Server

```env
EMAIL_HOST=smtp.your-domain.com
EMAIL_PORT=587
EMAIL_USER=your-email@your-domain.com
EMAIL_PASS=your-password
```

Update `index.js` transporter configuration:
```javascript
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
```

---

## ✅ Testing

1. Start your server:
```bash
node index.js
```

2. Navigate to your contact form
3. Fill out the form with test data
4. Submit the form
5. Check:
   - User's email inbox (they should receive a professional confirmation email)
   - Your company email inbox (you should receive a notification with form details)

---

## 🎨 Email Categories

The system automatically sends different emails based on the selected category:

1. **Education / Schools (IRIS Model)** - IRIS Education specific response
2. **Partnerships** - Partnership inquiry response
3. **Institutions & Public Sector** - Institutional collaboration response
4. **Private Companies & Initiatives** - Business inquiry response
5. **Media & Press** - Media inquiry response
6. **Careers** - Career inquiry response
7. **Legal & IP** - Legal inquiry response
8. **Other** - General inquiry response

---

## 🔒 Security Notes

- ✅ `.env` file is already added to `.gitignore` (not tracked by Git)
- ✅ Never commit your `.env` file to version control
- ✅ Never share your email password publicly
- ✅ Use App Passwords instead of your main Gmail password
- ✅ Keep your `.env` file secure

---

## 🐛 Troubleshooting

### "Error sending email"
- Check if EMAIL_USER and EMAIL_PASS are correctly set in `.env`
- Verify your email credentials are correct
- Ensure 2-Step Verification and App Password are set up for Gmail
- Check if "Less secure app access" is enabled (not recommended)

### Email not received
- Check spam/junk folder
- Verify the recipient email address is correct
- Check server console for error messages
- Ensure your email provider allows SMTP access

### Form not submitting
- Open browser console (F12) to check for JavaScript errors
- Verify the server is running
- Check network tab to see if the POST request is successful

---

## 📝 Example `.env` File

```env
# Example configuration for Gmail
EMAIL_USER=info@skynexg.com
EMAIL_PASS=abcd efgh ijkl mnop

# OR for custom SMTP
EMAIL_HOST=smtp.skynexg.com
EMAIL_PORT=587
EMAIL_USER=info@skynexg.com
EMAIL_PASS=YourSecurePassword123!
```

---

## 🚀 Production Deployment

For production (Vercel, Heroku, etc.):
1. Add environment variables in your hosting platform's dashboard
2. Never commit `.env` file
3. Use secure passwords
4. Consider using a dedicated email service (SendGrid, Mailgun, AWS SES)

---

**Need help?** Check the nodemailer documentation: https://nodemailer.com/

