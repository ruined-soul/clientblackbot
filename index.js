const express = require('express');
const app = express();
const TelegramBot = require('node-telegram-bot-api');
const config = require('./config');

const token = config.telegram.token;
const bot = new TelegramBot(token, { polling: true });

app.use(express.json());

app.post('/webhook', (req, res) => {
  const update = req.body;
  bot.processUpdate(update);
  res.sendStatus(200);
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
