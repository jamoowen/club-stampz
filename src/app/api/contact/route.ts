import { NextResponse, NextRequest } from 'next/server'
const nodemailer = require('nodemailer');



export async function POST(request: NextRequest) {
    const username = process.env.NEXT_PUBLIC_BURNER_USERNAME;
    const password = process.env.NEXT_PUBLIC_BURNER_PASSWORD;
    const targetEmail = process.env.NEXT_PUBLIC_PERSONAL_EMAIL;
    const ccEmail = process.env.NEXT_PUBLIC_CC_EMAIL;
    const ccEmail2 = process.env.NEXT_PUBLIC_CC_EMAIL_2;

    const data = await request.json()
    const name = data.name;
    const email = data.email;
    const subject = data.subject;
    const message = data.message;

    const transporter = nodemailer.createTransport({
        host: "smtp-mail.outlook.com",
        port: 587,
        tls: {
            ciphers: "SSLv3",
            rejectUnauthorized: false,
        },

        auth: {

            user: username,
            pass: password
        }
    });

    try {

        const mail = await transporter.sendMail({
            from: username,
            to: targetEmail,
            cc: [ccEmail, ccEmail2],
            replyTo: email,
            subject: `Club Stamps - ${subject}: ${email}`,
            html: `
            <p>Inquiry from: ${name} (${email}) </p>
            <p>${message} </p>
            `,
        })

        return NextResponse.json({ message: "Success: email was sent" })

    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: "COULD NOT SEND MESSAGE" }, { status: 500 })

    }


}