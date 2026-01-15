import React from 'react';
import { EmailTemplate } from '@/components/email-template';
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

    const { data, error } = await resend.emails.send({
      from: 'DH <inquiry@dynamitehibachi.com>',
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

    if (error) {
      console.error('Resend error:', error);
      return Response.json({ error: error.message || 'Failed to send email' }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    console.error('API error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Internal server error';
    return Response.json({ error: errorMessage }, { status: 500 });
  }
}