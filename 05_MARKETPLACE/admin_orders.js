export const listOrders = async (req, res) => { const orders = JSON.parse(require('fs').readFileSync('orders.json','utf8')); res.json(orders); };
