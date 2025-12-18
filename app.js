const express = require('express');
const crypto = require('crypto');
const app = express();
app.use(express.json());

// NİHAİ PAYTR CALLBACK (GÜVENLİ VE MÜHÜRLÜ)
app.post('/api/payment/paytr/callback', (req, res) => {
    const { merchant_oid, status, total_amount, hash } = req.body;
    const hashStr = merchant_oid + process.env.PAYTR_MERCHANT_SALT + status + total_amount;
    const token = crypto.createHmac('sha256', process.env.PAYTR_MERCHANT_KEY).update(hashStr).digest('base64');
    if (token !== hash) return res.status(400).send('HASH_FAILED');
    if (status === 'success') return res.send('OK');
    res.send('FAIL');
});
app.listen(process.env.PORT || 3000);
