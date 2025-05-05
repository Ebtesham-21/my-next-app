import nodemailer from 'nodemailer';

export async function POST(req){
    const {name, email, subject, phone, message} = await req.json();

    const transporter = nodemailer.createTransport({
        service: 'gmail', 
        auth: {
            user: process.env.EMAIL_USER, // Your email address
            pass: process.env.EMAIL_PASS, // Your email app password
        },
    });

    const mailOptions = {
        from: email,
        to: process.env.EMAIL_USERNAME,
        subject: `New contact Form Message: ${subject || 'No Subject'}`,
        text: `
            Name: ${name}
            Email: ${email}
            Phone: ${phone}
            Message: ${message}
                `,
        };


        try {
            await transporter.sendMail(mailOptions);
            return new Response(JSON.stringify({sucess : true}), {status: 200});
        } catch (error) {
            console.error('Error sending email:', error);
            return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
        }
    
} 