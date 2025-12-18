import PDFDocument from 'pdfkit'; import fs from 'fs';
export const invoice=(o)=>{
 const p=invoices/HMA-2025-\.pdf; const d=new PDFDocument();
 d.pipe(fs.createWriteStream(p)); d.text('ONLINE TURKEY'); d.text(\Order: \\);
 d.text(\Amount: \ \\); d.end(); return p;
};
