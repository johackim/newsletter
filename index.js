import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import { mjml2html } from 'mjml';
import feedparser from 'feedparser-promised';
import Newsletter from './newsletter';

dotenv.config({ silent: true });

const feedUrl = 'https://blog.ston3o.me/rss/';
const recipients = [
    'contact@ston3o.me',
];

(async () => {
    const articles = (await feedparser.parse(feedUrl)).map(item => ({
        title: item.title,
        href: item.link,
        tag: item.categories[0],
        image: item.enclosures[0].url,
    })).slice(0, 4);

    const newsletter = Newsletter(articles);
    const htmlOutput = mjml2html(newsletter).html;

    const transporter = nodemailer.createTransport({
        port: process.env.MAIL_PORT,
        host: process.env.MAIL_HOST,
        tls: process.env.MAIL_TLS,
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS,
        },
    });

    const mailOptions = {
        from: process.env.MAIL_FROM,
        subject: process.env.MAIL_SUBJECT,
        html: htmlOutput,
    };

    recipients.forEach((recipient) => {
        transporter.sendMail({ ...mailOptions, to: recipient });
    });
})();
