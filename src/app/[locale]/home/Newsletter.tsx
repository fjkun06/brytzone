import React from "react";
import axios from "axios";
const { google } = require('googleapis');
const NewsLetter = () => {
  const handleSendNewsletter = async () => {
    try {
      await axios.get("/api/newsletter");
      alert("Newsletter sent successfully.");
    } catch (error) {
      console.error(error);
      alert("Failed to send newsletter.");
    }
  };

  React.useEffect(() => {
   
  }, [])
  
  return (
    <div>
      <h1>Dashboard</h1>
      <button type="button" onClick={handleSendNewsletter}>Send Newsletter</button>
    </div>
  );
};

export default NewsLetter;
