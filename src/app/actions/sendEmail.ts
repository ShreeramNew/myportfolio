"use server";
import nodemailer from "nodemailer";

export async function sendEmail(formData: {
  name: string;
  email: string;
  message: string;
}) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NEXT_PUBLIC_EMAIL_USER,
      pass: process.env.NEXT_PUBLIC_EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${formData.name}" <${formData.email}>`,
      to: process.env.NEXT_PUBLIC_EMAIL_USER,
      subject: "New Portfolio Inquiry",
      html: `
        <div style="font-family: sans-serif; color: #0a0909;">
          <h2>New Message from ${formData.name}</h2>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Message:</strong></p>
          <div style="background: #f4f4f4; padding: 15px; border-radius: 5px;">
            ${formData.message}
          </div>
        </div>
      `,
    });
    return { success: true };
  } catch (error) {
    console.error("Email error:", error);
    return { success: false, error: "Failed to send message." };
  }
}
