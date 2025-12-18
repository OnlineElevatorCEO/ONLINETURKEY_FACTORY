import nodemailer from 'nodemailer';
export const send=(to,sub,txt,att)=>nodemailer.createTransport({
 host:process.env.SMTP_HOST,port:587,secure:false,
 auth:{user:process.env.SMTP_USER,pass:process.env.SMTP_PASS}
}).sendMail({from:'noreply@onlineturkey.xyz',to,subject:sub,text:txt,attachments:[{path:att}]});
