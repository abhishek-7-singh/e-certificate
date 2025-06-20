// import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);

// const domain = process.env.NEXT_PUBLIC_APP_URL;

// export const sendPasswordResetEmail = async (email: string, token: string) => {
//   const resetLink = `${domain}/new-password?token=${token}`;

//   await resend.emails.send({
//     from: "GovCertify <onboarding@resend.dev>",
//     to: email,
//     subject: "Reset your password",
//     html: `<p>Click <a href="${resetLink}">here</a> to reset password.</p>`,
//   });
// };

// export const sendVerificationEmail = async (email: string, token: string) => {
//   const confirmLink = `${domain}/new-verification?token=${token}`;

//   await resend.emails.send({
//     from: "Diwash Bhattarai<diwash@diwashb.com.np>",
//     to: email,
//     subject: "Confirm your email",
//     html: `<p>Click <a href="${confirmLink}">here</a> to confirm email.</p>`,
//   });
// };

// export const sendTwoFactorTokenEmail = async (email: string, token: string) => {
//   await resend.emails.send({
//     from: "Diwash Bhattarai<diwash@diwashb.com.np>",
//     to: email,
//     subject: "2FA Code",
//     html: `<p>Your 2FA code: ${token}</p>`,
//   });
// };

// // export const sendContactEmailToAdmin = async (
// //   email: string,
// //   message: string,
// //   name: string,
// //   currentUserEmail: string
// // ) => {
// //   await resend.emails.send({
// //     from: "Diwash Bhattarai<diwash@diwashb.com.np>",
// //     to: currentUserEmail,
// //     subject: "Portfolio | Contact",
// //     react: ContactTemplate({ email, message, name }),
// //   });
// // };

import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export const sendVerificationEmail = async (to: string, token: string) => {
  const confirmLink = `${process.env.NEXT_PUBLIC_APP_URL}/new-verification?token=${token}`;

  await transporter.sendMail({
    from: `"GovCertify" <${process.env.GMAIL_USER}>`,
    to,
    subject: 'Confirm your email',
    html: `<p>Click <a href="${confirmLink}">here</a> to confirm your email.</p>`,
  });
};

export const sendPasswordResetEmail = async (to: string, token: string) => {
  const resetLink = `${process.env.NEXT_PUBLIC_APP_URL}/new-password?token=${token}`;

  await transporter.sendMail({
    from: `"GovCertify" <${process.env.GMAIL_USER}>`,
    to,
    subject: 'Reset your password',
    html: `<p>Click <a href="${resetLink}">here</a> to reset your password.</p>`,
  });
};

export const sendTwoFactorTokenEmail = async (to: string, token: string) => {
  await transporter.sendMail({
    from: `"GovCertify" <${process.env.GMAIL_USER}>`,
    to,
    subject: '2FA Code',
    html: `<p>Your 2FA code is: <b>${token}</b></p>`,
  });
};
