import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import { mjml2html } from 'mjml';
import Newsletter from './newsletter';

dotenv.config({ silent: true });

const emails = [
    'contact@ston3o.me',
];

const articles = [
    {
        title: "Les meilleures solutions d'adresse mail jetable",
        tag: 'Vie Privée',
        href: 'https://blog.ston3o.me/meilleures-solutions-adresse-mail-jetable/',
        image: 'https://blog.ston3o.me/content/images/2017/11/stop-spam-940526_1920.jpg',
    },
    {
        title: "Installation simple d'un cluster kubernetes",
        tag: 'Auto-hébergement',
        href: 'https://blog.ston3o.me/installation-simple-cluster-kubernetes/',
        image: 'https://blog.ston3o.me/content/images/2017/11/kub.jpg',
    },
    {
        title: "Installation d'une alternative open-source à Disqus",
        tag: 'Auto-hébergement',
        href: 'https://blog.ston3o.me/installation-alternative-open-source-disqus/',
        image: 'https://blog.ston3o.me/content/images/2017/11/isso-1.png',
    },
    {
        title: 'Comment créer son datacenter maison (homelab) ?',
        tag: 'Auto-hébergement',
        href: 'https://blog.ston3o.me/comment-creer-son-datacenter-maison/',
        image: 'https://blog.ston3o.me/content/images/2017/09/shutterstock_135343520.jpg',
    },
];

const networks = [
    {
        name: 'mastodon',
        image: 'http://cdn.rawgit.com/tootsuite/mastodon/master/public/badge.png',
        href: 'https://mastodon.xyz/@ston3o',
    },
    {
        name: 'reddit',
        image: 'https://framapic.org/LhM5Ns1HMPvZ/tW8rRNReFDiQ.pn',
        href: 'https://www.reddit.com/user/ston3o/',
    },
    {
        name: 'codepen',
        image: 'https://framapic.org/I3PGiFKj7jx3/dCKwGTFFwqD5.png',
        href: 'https://codepen.io/ston3o/',
    },
    {
        name: 'github',
        image: 'https://framapic.org/r7H25mhVmIpw/8zJemB3ngT3g.png',
        href: 'https://github.com/ston3o/',
    },
    {
        name: 'twitter',
        image: 'https://framapic.org/2xNVpxt4UyQW/2THi8b4hKw5w.png',
        href: 'twitter.com/ston3o',
    },
    {
        name: 'hackernews',
        image: 'https://framapic.org/KTcb563pvwPa/Sm0hDdOJSBLA.png',
        href: 'https://news.ycombinator.com/submitted?id=ston3o',
    },
];

const newsletter = Newsletter({ articles, networks });
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

emails.forEach((email) => {
    transporter.sendMail({ ...mailOptions, to: email });
});
