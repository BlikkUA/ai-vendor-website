import { NextResponse } from "next/server";
import nodemailer from "nodemailer"; // 1. Додали імпорт Nodemailer

export const runtime = "nodejs";

type ContactPayload = {
  name?: string;
  email?: string;
  company?: string;
  volume?: string;
  message?: string;
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export async function POST(request: Request) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  
  // 2. Змінні оточення для SMTP корпоративної пошти
  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = process.env.SMTP_PORT;
  const smtpUser = process.env.SMTP_USER; // info@vendor-plus.com
  const smtpPass = process.env.SMTP_PASSWORD;

  if (!token || !chatId || !smtpHost || !smtpPort || !smtpUser || !smtpPass) {
    console.error(
      "Missing required environment variables for Telegram or SMTP configuration."
    );
    return NextResponse.json(
      { ok: false, error: "Server is not fully configured for deliveries." },
      { status: 500 }
    );
  }

  let body: ContactPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 }
    );
  }

  const name = (body.name || "").trim();
  const email = (body.email || "").trim();
  const company = (body.company || "").trim();
  const volume = (body.volume || "").trim();
  const message = (body.message || "").trim();

  if (!name || !email) {
    return NextResponse.json(
      { ok: false, error: "Name and email are required." },
      { status: 400 }
    );
  }

  const text = [
    "<b>New pilot request — Vendor+ website</b>",
    "",
    `<b>Name:</b> ${escapeHtml(name)}`,
    `<b>Email:</b> ${escapeHtml(email)}`,
    company ? `<b>Company:</b> ${escapeHtml(company)}` : null,
    volume ? `<b>Estimated volume:</b> ${escapeHtml(volume)}` : null,
    message ? `\n<b>Message:</b>\n${escapeHtml(message)}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  try {
    // --- ЕТАП 1: ВІДПРАВКА В ТЕЛЕГРАМ БОТ ---
    const telegramRes = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text,
          parse_mode: "HTML",
        }),
      }
    );

    const telegramData = await telegramRes.json();

    if (!telegramRes.ok || !telegramData.ok) {
      console.error("Telegram API error:", telegramData);
      return NextResponse.json(
        { ok: false, error: "Telegram delivery failed." },
        { status: 502 }
      );
    }

    // --- ЕТАП 2: АВТОПОДЯКА КЛІЄНТУ НА ПОШТУ ---
    // Створюємо транспорт тільки після того, як Телеграм успішно прийняв лід
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: Number(smtpPort),
      secure: true, // true для порту 465
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const clientHtml = `
      <div style="background-color: #0B0D10; color: #FFFFFF; font-family: sans-serif; padding: 40px; max-width: 600px; margin: 0 auto; border-radius: 16px; border: 1px solid #22252A;">
        <div style="margin-bottom: 32px;">
          <span style="color: #E8B84B; font-weight: bold; font-size: 20px; letter-spacing: 1px;">Vendor<span style="color: #E8B84B;">+</span></span>
        </div>
        <h2 style="font-size: 24px; font-weight: 600; margin-bottom: 16px; color: #FFFFFF;">Hi ${name},</h2>
        <p style="color: #94A3B8; font-size: 16px; line-height: 1.6; margin-bottom: 24px;">
          Thank you for reaching out to Vendor+. We’ve successfully received your data operations request.
        </p>
        <div style="background-color: rgba(232, 184, 75, 0.05); border-left: 4px solid #E8B84B; padding: 16px; margin-bottom: 24px; border-radius: 4px;">
          <p style="margin: 0; color: #E2E8F0; font-size: 14px;">
            <strong>Status:</strong> Under review by our Solutions Team.<br>
            <strong>Expected response time:</strong> Within one business day.
          </p>
        </div>
        <p style="color: #94A3B8; font-size: 15px; line-height: 1.6; margin-bottom: 32px;">
          Our team is already looking over your project details ${volume ? `for monthly volume <strong>(${volume})</strong>` : ""}. We will prepare a scoped pilot plan tailored to your quality bar.
        </p>
        <hr style="border: 0; border-top: 1px solid #22252A; margin-bottom: 24px;" />
        <p style="color: #64748B; font-size: 12px; margin: 0;">
          This is an automated confirmation from info@vendor-plus.com.<br>
          Lviv, Ukraine.
        </p>
      </div>
    `;

    await transporter.sendMail({
      from: `"Vendor+" <${smtpUser}>`,
      to: email, // Відправляємо на пошту клієнта, яку він вказав у формі
      subject: "We've received your request — Vendor+",
      html: clientHtml,
    });

    // Повертаємо успіх тільки після виконання обох дій
    return NextResponse.json({ ok: true });

  } catch (err) {
    console.error("Error in contact API pipeline:", err);
    return NextResponse.json(
      { ok: false, error: "Processing failed." },
      { status: 502 }
    );
  }
}