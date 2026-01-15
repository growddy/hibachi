import * as React from 'react';

interface EmailTemplateProps {
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

export function EmailTemplate({ eventDate, eventTime, eventType, guestCount, packageType, dietaryNotes, venueType, address, city, state, zip, venueNotes, 
    firstName, lastName, email, phone, howHeard, additionalNotes }: EmailTemplateProps) {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', maxWidth: '600px' }}>
      <h1 style={{ fontSize: '24px', marginBottom: '20px' }}>
        Incoming Booking Request from {firstName} {lastName}
      </h1>
      
      <div style={{ marginBottom: '20px' }}>
        <h2 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>Contact Information:</h2>
        <p><strong>Name:</strong> {firstName} {lastName}</p>
        <p><strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a></p>
        <p><strong>Phone:</strong> {phone}</p>
        {howHeard && <p><strong>How did you hear about us?</strong> {howHeard}</p>}
        {additionalNotes && <p><strong>Additional Notes:</strong> {additionalNotes}</p>}
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h2 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>Event Details:</h2>
        <p><strong>Date/Time:</strong> {eventDate}, {eventTime}</p>
        <p><strong>Type:</strong> {eventType}</p>
        <p><strong>Guest Count:</strong> {guestCount}</p>
        <p><strong>Package:</strong> {packageType}</p>
        {dietaryNotes && <p><strong>Dietary Notes:</strong> {dietaryNotes}</p>}
        <p><strong>Venue Type:</strong> {venueType}</p>
        <p><strong>Address:</strong> {address}, {city}, {state} {zip}</p>
        {venueNotes && <p><strong>Venue Notes:</strong> {venueNotes}</p>}
      </div>
    </div>
  );
}