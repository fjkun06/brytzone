// pages/Dash.js
import React, { useState } from 'react';

const Dash = () => {
  const [authorizationCode, setAuthorizationCode] = useState('');

  const handleSendEmail = async () => {
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ authorizationCode }),
      });

      if (response.ok) {
        console.log('Email sent successfully');
      } else {
        console.error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={authorizationCode}
        onChange={(e) => setAuthorizationCode(e.target.value)}
      />
      <button onClick={handleSendEmail}>Send Email</button>
    </div>
  );
};

export default Dash;
