import nodemailer from 'nodemailer';
export const sendInvoiceMail = async (to, subject, text, attachmentPath) => {
  const transporter = nodemailer.createTransport({
    host: 'mail.onlineturkey.xyz', port: 587, secure: false,
    auth: { user: 'noreply@onlineturkey.xyz', pass: process.env.MAIL_PASSWORD }
  });
  await transporter.sendMail({
    from: 'OnlineTurkey <noreply@onlineturkey.xyz>', to, subject, text,
    attachments: attachmentPath ? [{ path: attachmentPath }] : []
  });
};
