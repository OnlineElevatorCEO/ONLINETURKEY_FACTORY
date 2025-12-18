import fs from 'fs';
export const logWebhook = (data) => {
  fs.appendFileSync('logs/webhook.log', JSON.stringify(data)+'\n');
};
