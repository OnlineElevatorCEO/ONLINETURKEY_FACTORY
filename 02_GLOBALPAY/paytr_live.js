import crypto from 'crypto';
export const paytrCallback = (req, res) => {
  const { merchant_oid, status, total_amount, hash } = req.body;
  const token = crypto.createHmac('sha256', process.env.PAYTR_MERCHANT_KEY)
    .update(merchant_oid + process.env.PAYTR_MERCHANT_SALT + status + total_amount)
    .digest('base64');
  if (token !== hash) return res.status(400).send('HASH_MISMATCH');
  if (status === 'success') return res.send('OK');
  res.send('FAIL');
};
