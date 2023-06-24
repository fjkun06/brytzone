// gmail.js
import { google } from 'googleapis';
import { OAuth2Client } from 'google-auth-library';

const oauth2Client = new google.auth.OAuth2(
  '174812225394-m7s2ch3bb3vlatbfa40r8vlqp04uc7q8.apps.googleusercontent.com',
  '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',
  'https://github.com/fjkun06/brytzone/'
);

// Exchange the authorization code for access token
export const getAccessToken = async (code) => {
  const { tokens } = await oauth2Client.getToken(code);
  return tokens.access_token;
};

// Create a Gmail client
export const createGmailClient = async (accessToken) => {
  oauth2Client.setCredentials({ access_token: accessToken });
  return google.gmail({ version: 'v1', auth: oauth2Client });
};
