import * as React from 'react';

interface EmailTemplateProps {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export function EmailTemplate({ firstName, lastName, email, phone, subject, message }: EmailTemplateProps) {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', maxWidth: '600px' }}>
      <h1 style={{ fontSize: '24px', marginBottom: '20px' }}>
        Incoming Inquiry from {firstName} {lastName}
      </h1>
      
      <div style={{ marginBottom: '20px' }}>
        <h2 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>Contact Information:</h2>
        <p><strong>Name:</strong> {firstName} {lastName}</p>
        <p><strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a></p>
        {phone && <p><strong>Phone:</strong> {phone}</p>}
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h2 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>Subject:</h2>
        <p>{subject}</p>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h2 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>Message:</h2>
        <p style={{ whiteSpace: 'pre-wrap', lineHeight: '1.6' }}>{message}</p>
      </div>
    </div>
  );
}