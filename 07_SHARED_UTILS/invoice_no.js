export const generateInvoiceNo = (id) => {
  return 'HMA-2025-' + String(id).padStart(6,'0');
};
