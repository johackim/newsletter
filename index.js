import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import { mjml2html } from 'mjml';
import feedparser from 'feedparser-promised';
import Papa from 'papaparse';
import fs from 'fs';
import Newsletter from './newsletter';

dotenv.config({ silent: true });

(async () => {
    const articles = (await feedparser.parse(process.env.FEED_URL)).map(item => ({
        title: item.title,
        href: item.link,
        tag: item.categories[0],
        image: item.enclosures[0].url,
    })).slice(0, process.env.NUMBER_ARTICLES);

    const newsletter = Newsletter(articles);
    const htmlOutput = mjml2html(newsletter).html;

    if (process.env.NODE_ENV === 'test') {
        fs.writeFileSync('newsletter.html', htmlOutput);
        process.exit(0);
    }

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

    const subscribersCsvFile = fs.readFileSync(process.env.SUBSCRIBERS_FILE_PATH).toString();
    const subscribers = Papa.parse(subscribersCsvFile, { header: true }).data;
    const emails = subscribers.filter(subscriber => subscriber.email).map(subscriber => subscriber.email);

    emails.forEach((email) => {
        transporter.sendMail({ ...mailOptions, to: email });
    });
})();
