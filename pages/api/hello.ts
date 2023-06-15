import { google } from 'googleapis';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  const auth = new google.auth.OAuth2({
    clientId: '648111113883-nsicea3cgvupsg2s6veuq26oqtrckesn.apps.googleusercontent.com',
    clientSecret: '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',
    redirectUri: 'http://localhost:3000',
  });

  auth.setCredentials({
    access_token: 'YOUR_ACCESS_TOKEN',
    refresh_token: 'YOUR_REFRESH_TOKEN',
  });

  const sheets = google.sheets({ version: 'v4', auth });

  const spreadsheetId = '13KXpY9jcgfTPaXLfw1wUpDmIXXM-lb-YH44ArWuhkZo';
  const range = 'Sheet1!A1:B2';

  async function getData() {
    try {
      const response = await sheets.spreadsheets.values.get({
        spreadsheetId,
        range,
      });
      const rows = response.data.values;
      console.log('Data:', rows);
    } catch (err) {
      console.error('Error:', err);
    }
  }

  getData();
}
