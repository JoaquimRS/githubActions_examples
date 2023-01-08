import TelegramBot from 'node-telegram-bot-api';
import { getInput, setOutput, setFailed } from "@actions/core";

const token = getInput("telegram_token")
const chatID = getInput("telegram_id_user")

const bot = new TelegramBot(token, { polling: true });

try {
    const name = process.argv[2];
    const message = `Workflow ejecutado correctamente tras el último commit. Saludos ${name}`;

    bot.sendMessage(chatID, message)
    setOutput('msg', "Mensaje enviado correctamente ")
    process.exit(0)
} catch (e) {
    setFailed("Hubo un error")
}