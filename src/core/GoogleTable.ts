const { google } = require('googleapis');
const { GoogleAuth } = require('google-auth-library');

export class GoogleTable {
    private static readonly scope: string = 'https://www.googleapis.com/auth/spreadsheets';

    static async send(item: any) {
        const auth = new GoogleAuth({
            keyFile: process.env.CREDENTIALS,
            scopes: this.scope, 
        });
        const authClientObject = await auth.getClient();
        const googleSheetsInstance = google.sheets({ version: "v4", auth: authClientObject });

        await googleSheetsInstance.spreadsheets.values.append({
            auth,
            spreadsheetId: process.env.SPREAD_SHEET_ID,
            range: `Sheet${++item.reportId}!A:G`,
            valueInputOption: 'USER_ENTERED',
            resource: {
                values: [[ ...Object.values(item.data), item.name, item.date.toLocaleString('ru') ]],
            },
        });
    }
}