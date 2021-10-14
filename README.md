# Telegram-bot
Bot collects data from users by templates and saves in google sheets.

### How it work?
1. You send the command /start to bot, it return the list of templates.
2. You select the template. After bot return fields.
3. You click on the fields in any order and send the data.
4. When all fields will be filled, you send the command /save, and the bot saves your data in google sheets.

### What else can?
```
1. /info - shows how much is filled current template.
2. /clear - clear current template and user can select new template.
3. /clients - shows the list of users, which worked with bot
4. /alert [client_id]|[delay]|[text] - admins can send notifications to users
You can find client id calling the /clients. The delay is taken into account in minutes.
5. /alerts - shows all notifications.
```

### Important
1. Count of templates must be equal count of sheets in google documents and the sheets must have names Sheet1, Sheet2 and so on.

### More information
1. The list of admins is located in src/core/Store.ts.
2. If you need more templates, add object to array, properties to dict in src/core/settings/reportTemplates.ts and update keyboard in src/command/start.ts.

## Install
```
1. Authenticate to Google sheets API. Download the file credential.json.
2. Create the telegram bot by BotFather and get token.
3. Install dependencies and set the environment variables.
4. If you want to deploy this bot on heroku dont remove the Procfile.

    Environment variables:
1. TELEGRAM_BOT_TOKEN - the string from the second point of instructions.
2. CREDENTIALS - path to file credential.json.
3. SPREAD_SHEET_ID - id of google sheet.
```

## Example

![image](https://user-images.githubusercontent.com/26007933/136708142-b0f396a9-5888-47d9-86c2-552705a5490e.png)
![image](https://user-images.githubusercontent.com/26007933/136708155-8ffab459-a756-4f32-95f8-9e65702b55c2.png)

Save to google sheet as like
![image](https://user-images.githubusercontent.com/26007933/136708369-f18114c0-6aa7-4780-9a45-95d4af7ec78f.png)