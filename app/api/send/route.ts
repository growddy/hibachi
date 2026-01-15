import React from 'react';
import { EmailTemplate } from '@/components/contact-template';
import { UserConfirmationEmail } from '@/components/user-confirmation';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    const body: ContactFormData = await request.json();
    const { firstName, lastName, email, phone, subject, message } = body;

    if (!firstName || !lastName || !email || !subject || !message) {
      return Response.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const internalEmail = resend.emails.send({
      from: 'Dynamite Hibachi <inquiry@dynamitehibachi.com>',
      to: ['dynamitehibachi@gmail.com'],
      replyTo: email,
      subject: `Incoming Inquiry from ${firstName} ${lastName}`,
      react: React.createElement(EmailTemplate, {
        firstName,
        lastName,
        email,
        phone,
        subject,
        message,
      }),
    });

    const customerEmail = resend.emails.send({
      from: 'Dynamite Hibachi <inquiry@dynamitehibachi.com>',
      to: [email],
      subject: 'We received your inquiry!',
      react: React.createElement(UserConfirmationEmail, {
        firstName,
      }),
    });

    const [internalResult, customerResult] = await Promise.all([
      internalEmail,
      customerEmail,
    ]);

    return Response.json({
      success: true,
      internalId: internalResult.data?.id,
      customerId: customerResult.data?.id,
    });
  } catch (error) {
    console.error('API error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Internal server error';
    return Response.json({ error: errorMessage }, { status: 500 });
  }
}