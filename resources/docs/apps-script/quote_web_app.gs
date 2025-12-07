 
const EXPECTED_SECRET = '9f2f7c6a1c4b8e2d7a0f3b6c9d1e5a7f3c2b8d9a4f6e1c3b7d2a9f0e5c1b8d3';
 
const SHEET_ID = '1XT8K0oLJI8l4noJyFncLnTcNFgLwajPN04OYKe_FWTw';
const SHEET_NAME = null;
 
function doPost(e) {
  try {
    const data = parseJsonBody(e);
 
    if (!data._secret || data._secret !== EXPECTED_SECRET) {
      return json({ ok: false, error: 'unauthorized' }, 401);
    }
 
    const row = [
      data.interest || '',
      data.when || '',
      data.postcode || '',
      data.address || '',
      data.name || '',
      data.number || '',
      data.email || '',
    ];
 
    const sheet = getSheet();
    const nextRow = sheet.getLastRow() + 1;
    sheet.getRange(nextRow, 1, 1, 7).setValues([row]);
    sheet.getRange(nextRow, 3).setNumberFormat('@'); // Postcode as text
    sheet.getRange(nextRow, 6).setNumberFormat('@'); // Number as text
 
    return json({ ok: true });
  } catch (err) {
    return json({ ok: false, error: String(err) }, 500);
  }
}
 
function parseJsonBody(e) {
  if (!e || !e.postData || !e.postData.contents) return {};
  try { return JSON.parse(e.postData.contents); } catch (err) { return {}; }
}
 
function getSheet() {
  const ss = SpreadsheetApp.openById(SHEET_ID);
  if (SHEET_NAME && SHEET_NAME.length) {
    const s = ss.getSheetByName(SHEET_NAME);
    if (s) return s;
  }
  return ss.getSheets()[0];
}
 
function json(payload, status) {
  const output = ContentService.createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
  if (typeof status === 'number') {
    
  }
  return output;
}
