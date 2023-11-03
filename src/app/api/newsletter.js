import { sendNewsletter } from '../../utils/mailing/sendNewsletter'; // Adjust the path if necessary

export default async function handler(req, res) {
  try {
    await sendNewsletter();
    res.status(200).json({ message: 'Newsletter sent successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to send newsletter.' });
  }
}
