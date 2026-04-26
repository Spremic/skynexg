const fs = require('fs');

// Read the file
let content = fs.readFileSync('./static/js/index.js', 'utf8');

// Find and replace the falseNotification
const regex = /const falseNotification = `[\s\S]*?`;/;

const newFalseNotification = `const falseNotification = \`
  <div class="form-notification-error" style="
    background: linear-gradient(135deg, #ffd3d3 0%, #ffe8e8 100%);
    border-left: 4px solid #C51919;
    border-radius: 12px;
    padding: 24px 28px;
    margin-top: 20px;
    animation: slideInUp 0.5s ease-out;
    box-shadow: 0 4px 12px rgba(197, 25, 25, 0.15);
  ">
    <div style="display: flex; align-items: center; gap: 16px;">
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style="flex-shrink: 0;">
        <circle cx="24" cy="24" r="24" fill="#C51919" opacity="0.15"/>
        <circle cx="24" cy="24" r="20" fill="#C51919"/>
        <path d="M24 16V26M24 32H24.02" stroke="white" stroke-width="3" stroke-linecap="round"/>
      </svg>
      <div style="flex: 1;">
        <h3 style="
          margin: 0 0 8px 0;
          font-size: 20px;
          font-weight: 700;
          color: #8b0000;
          letter-spacing: -0.3px;
        ">Došlo je do greške</h3>
        <p style="
          margin: 0;
          font-size: 15px;
          color: #a01010;
          line-height: 1.5;
        ">Izvinjavamo se, poruka nije prosleđena. Molimo pokušajte ponovo ili nas kontaktirajte direktno.</p>
      </div>
    </div>
  </div>\`;`;

content = content.replace(regex, newFalseNotification);

// Write the file back
fs.writeFileSync('./static/js/index.js', content);

console.log('✅ Successfully updated falseNotification!');

