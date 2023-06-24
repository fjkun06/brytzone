const { google } = require('googleapis');
const nodemailer = require('nodemailer');
const credentials = require('./credentials.json');


// const credentials = {
//   "client_id": "174812225394-m7s2ch3bb3vlatbfa40r8vlqp04uc7q8.apps.googleusercontent.com",
//   "project_id": "brytzone",
//   "auth_uri": "https://accounts.google.com/o/oauth2/auth",
//   "token_uri": "https://oauth2.googleapis.com/token",
//   "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
//   "client_secret": "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"
// }
async function sendNewsletter() {
  // const accounts = await getGmailAccountsFromDatabase(); // Implement this function to retrieve Gmail accounts from your database
  const accounts = ['fjkun06@gmail.com','humchofrank@gmail.com']
  const oauth2Client = new google.auth.OAuth2(
    credentials.client_id,
    credentials.client_secret,
    // credentials.redirect_uris[0]
  );

  oauth2Client.setCredentials(credentials.token);

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: 'hunchofrank@gmail.com', // Replace with the email address you want to send the newsletter from
      clientId: credentials.client_id,
      clientSecret: credentials.client_secret,
      refreshToken: credentials.refresh_token,
      accessToken: oauth2Client.getAccessToken(),
    },
  });

  const mailOptions = {
    from: 'hunchofrank@gmail.com', // Replace with the email address you want to send the newsletter from
    subject: 'Newsletter',
    text: 'Hello, this is a newsletter!',
  };

  for (const account of accounts) {
    mailOptions.to = account.email;
    await transporter.sendMail(mailOptions);
  }
}
