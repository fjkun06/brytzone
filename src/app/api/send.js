// pages/api/send-email.js
import { createGmailClient, getAccessToken } from '../../path/to/gmail.js';

const send = async (req, res) => {
  try {
    // Fetch Gmail accounts from the database
    const gmailAccounts = await fetchGmailAccountsFromDatabase();

    // Authenticate with Gmail API
    const accessToken = await getAccessToken(req.body.authorizationCode);
    const gmailClient = await createGmailClient(accessToken);

    // Send email to each account
    for (const account of gmailAccounts) {
      await sendEmailToAccount(gmailClient, account);
    }

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
};

export default send;