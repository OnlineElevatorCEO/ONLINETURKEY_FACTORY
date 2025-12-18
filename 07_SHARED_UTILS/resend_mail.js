import { sendInvoiceMail } from './mailer.js';
export const resendInvoice = async (order) => {
  await sendInvoiceMail(order.email,'Faturanızı Yeniden Gönderiyoruz','Ekte faturanız vardır',order.invoice);
};
