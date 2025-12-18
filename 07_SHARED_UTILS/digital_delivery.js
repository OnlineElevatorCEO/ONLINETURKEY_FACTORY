import crypto from 'crypto';
export const generateDownloadLink = () => {
  return 'https://onlineturkey.xyz/download/' + crypto.randomBytes(32).toString('hex');
};
