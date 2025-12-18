import fs from 'fs'; export const systemLog = (msg) => { fs.appendFileSync('logs/system.log', new Date().toISOString() + ' ' + msg + '\n'); };
