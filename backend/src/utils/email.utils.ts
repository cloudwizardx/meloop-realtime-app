import nodemailer from 'nodemailer'
import jwt from 'jsonwebtoken'

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

export const sendVerificationEmail = async (email: string) => {
  const token = jwt.sign({ email }, process.env.EMAIL_VERIFY_SECRET!, { expiresIn: '5m' })

  const htmlContent = generateVerificationEmail(token)
  await sendEmail('Meloop Security <security@meloop.com>', email, 'Verify Your Meloop Email', htmlContent)
}

export function generateVerificationEmail(token: string) {
  const verifyUrl = `http://localhost:5001/api/v1/auth/verify?token=${token}`

  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Verify Your Email</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        background-color: #f4f4f4;
        padding: 20px;
        color: #333;
      }
      .container {
        max-width: 500px;
        background-color: #fff;
        padding: 20px;
        margin: auto;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      }
      .logo {
        text-align: center;
        margin-bottom: 20px;
      }
      .btn {
        display: inline-block;
        padding: 12px 20px;
        background-color: #4CAF50;
        color: white;
        text-decoration: none;
        border-radius: 6px;
        font-weight: bold;
      }
      .btn:hover {
        background-color: #45a049;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="logo">
        <img src="https://res.cloudinary.com/dh54xelyq/image/upload/v1755076209/meloop_logo-Photoroom_xgocv9.png" alt="Meloop Logo" width="150" height="auto" style="display:block; margin:0 auto;" />
      </div>
      <h2>Verify Your Email Address</h2>
      <p>Hi,</p>
      <p>Thank you for registering with <strong>Meloop</strong>. Please verify your email address by clicking the button below:</p>
      <p style="text-align: center;">
        <a href="${verifyUrl}" style="
          display: inline-block;
          padding: 12px 20px;
          background-color: #4CAF50;
          color: #ffffff;
          text-decoration: none;
          border-radius: 6px;
          font-weight: bold;
          font-size: 14px;
          text-align: center;
          font-family: Arial, sans-serif;
        ">Verify Email</a>
      </p>
      <p>If you did not create an account, you can safely ignore this email.</p>
      <p>Thanks,<br/>The Meloop Team</p>
    </div>
  </body>
  </html>
  `
}
