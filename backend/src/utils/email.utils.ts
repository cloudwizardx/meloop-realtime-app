import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.APPLICATION_EMAIL_KEY
  }
})

export async function sendEmail(from: string, to: string, subject: string, htmlContent: string) {
  const mailOptions = {
    from,
    to,
    subject,
    html: htmlContent
  }

  await transporter.sendMail(mailOptions)
}
