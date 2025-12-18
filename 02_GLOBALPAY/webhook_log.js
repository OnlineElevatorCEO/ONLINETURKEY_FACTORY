import fs from 'fs';
export const log=(d)=>fs.appendFileSync('logs/webhook.log',JSON.stringify(d)+'\n');
