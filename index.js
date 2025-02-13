const TelegramBot = require('node-telegram-bot-api');
const express = require('express');
const cors = require('cors');

const token = '6564761896:AAE1CvOkjKi0jG2aFu9bDKsKHTKD_Hsmr8E';  // O'z tokeningizni bu yerga kiriting

const bot = new TelegramBot(token, { polling: true });
const app = express();

app.use(express.json());
app.use(cors());

// /start buyruqni sozlash
bot.on('message', async msg => {
  const chatId = msg.chat.id;
  const text = msg.text;

  if (text === '/start') {
    await bot.sendMessage(
      chatId,
      'Telegramga o`tish uchun ',
      {
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: "Telegram web",
                web_app: {
                  url: 'https://web.telegram.org/k/',  // O'zingizning web app URL manzilingizni kiriting
                },
              },
            ],
          ],
        },
      }
    );
  }
});

app.listen(process.env.PORT || 8000, () =>
  console.log('Server started')
);
