// ─── SlowProof Contact Form → Google Sheets ───────────────────────────────
//
// SETUP STEPS:
//
// 1. Create a new Google Sheet at sheets.google.com
//    Add these headers in row 1:
//    Timestamp | Name | Business | Email | Phone | Message
//
// 2. In the Sheet, go to Extensions → Apps Script
//
// 3. Delete any existing code, paste this entire file, then click Save.
//
// 4. Click Deploy → New deployment
//    - Type: Web app
//    - Execute as: Me
//    - Who has access: Anyone
//    Click Deploy and copy the Web App URL.
//
// 5. Paste that URL into index.html where it says GOOGLE_SCRIPT_URL_HERE
//
// ──────────────────────────────────────────────────────────────────────────

function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  var name     = e.parameter.name     || '';
  var business = e.parameter.business || '';
  var email    = e.parameter.email    || '';
  var phone    = e.parameter.phone    || '';
  var message  = e.parameter.message  || '';

  sheet.appendRow([new Date(), name, business, email, phone, message]);

  return ContentService
    .createTextOutput(JSON.stringify({ result: 'success' }))
    .setMimeType(ContentService.MimeType.JSON);
}
