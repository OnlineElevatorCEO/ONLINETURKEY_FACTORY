const express = require('express');
const crypto = require('crypto');
const app = express();

app.post('/api/payment/paytr/callback', (req, res) => {
    // PayTR Hash Doğrulama Sistemi (B-Gerçek Ödeme)
    const hashStr = req.body.merchant_id + req.body.user_ip + req.body.merchant_oid + req.body.email + req.body.payment_amount + req.body.payment_type + req.body.post_key;
    const paytr_token = crypto.createHmac('sha256', process.env.PAYTR_MERCHANT_KEY).update(hashStr + process.env.PAYTR_MERCHANT_SALT).digest('base64');
    
    if (paytr_token == req.body.hash) {
        console.log('✅ Ödeme Başarılı: Sipariş Onaylandı');
        res.send('OK');
    } else {
        res.status(403).send('PAYTR_HASH_FAILED');
    }
});
