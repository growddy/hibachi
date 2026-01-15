import React from 'react';
import { UserConfirmationEmail } from '@/components/user-confirmation';
import { EmailTemplate } from '@/components/booking-template';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactFormData {
  eventDate: string;
  eventTime: string;
  eventType: string;
  guestCount: string;
  packageType: string;
  dietaryNotes?: string;
  venueType: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  venueNotes?: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  howHeard?: string;
  additionalNotes?: string;
}

export async function POST(request: Request) {
  try {
    const body: ContactFormData = await request.json();
    const { eventDate, eventTime, eventType, guestCount, packageType, dietaryNotes, venueType, address, city, state, zip, venueNotes, 
        firstName, lastName, email, phone, howHeard, additionalNotes } = body;

    if (!eventDate || !eventTime || !eventType || !guestCount || !packageType || !venueType || !address || !city || !state || !zip || !firstName || !lastName || !email || !phone) {
      return Response.json({ error: 'Missing required fields' }, { status: 400 });
    }

    /* Send email to internal team */
    const internalEmail = resend.emails.send({
      from: 'DH <inquiry@dynamitehibachi.com>',
      to: ['dynamitehibachi@gmail.com'],
      replyTo: email,
      subject: `Incoming Booking Request from ${firstName} ${lastName}`,
      react: React.createElement(EmailTemplate, {
        eventDate,
        eventTime,
        eventType,
        guestCount,
        packageType,
        dietaryNotes,
        venueType,
        address,
        city,
        state,
        zip,
        venueNotes,
        firstName,
        lastName,
        email,
        phone,
        howHeard,
        additionalNotes,
      }),
    });

    /* Send email to customer */
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
    return Response.json({ error }, { status: 500 });
  }
}