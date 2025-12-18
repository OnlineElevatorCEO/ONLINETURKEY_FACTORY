import PDFDocument from 'pdfkit';
import fs from 'fs';

export const createInvoice = (order) => {
  const doc = new PDFDocument();
  const path = invoices/HMA-2025-\.pdf;
  doc.pipe(fs.createWriteStream(path));
  doc.text('ONLINE TURKEY FATURA');
  doc.text(Sipariş: \);
  doc.text(Tutar: \ USD);
  doc.end();
  return path;
};
