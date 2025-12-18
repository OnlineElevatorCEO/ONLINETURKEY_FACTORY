const crypto = require('crypto');
exports.callback = (req, res) => {
    const { merchant_oid, status, total_amount, hash } = req.body;
    const hashStr = merchant_oid + process.env.PAYTR_MERCHANT_SALT + status + total_amount;
    const token = crypto.createHmac('sha256', process.env.PAYTR_MERCHANT_KEY).update(hashStr).digest('base64');
    
    if (token !== hash) return res.status(400).send('HASH_MISMATCH');
    if (status === 'success') {
        // Sipariş onaylama mantığı buraya
        return res.send('OK');
    }
    res.send('FAIL');
};
