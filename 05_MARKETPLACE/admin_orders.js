import fs from 'fs';
export const orders=(req,res)=>res.json(JSON.parse(fs.readFileSync('orders.json','utf8')));
