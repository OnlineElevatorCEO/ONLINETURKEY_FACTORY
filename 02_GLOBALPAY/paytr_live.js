import crypto from 'crypto';
export const paytrCallback = (req,res)=>{
  const { merchant_oid,status,total_amount,hash } = req.body;
  const str = merchant_oid + process.env.PAYTR_MERCHANT_SALT + status + total_amount;
  const tok = crypto.createHmac('sha256',process.env.PAYTR_MERCHANT_KEY).update(str).digest('base64');
  if(tok!==hash) return res.status(400).send('HASH_FAIL');
  return res.send(status==='success'?'OK':'FAIL');
};
