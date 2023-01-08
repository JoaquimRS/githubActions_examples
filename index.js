const TelegramBot = require('node-telegram-bot-api')
const core = require("@actions/core")

const token = core.getInput("telegram_token")
const chatID = core.getInput("telegram_id_user")

const bot = new TelegramBot(token, { polling: true });

try {
    const message = `Workflow ejecutado correctamente tras el último commit. Saludos ${core.getInput("user_name")}`;

    bot.sendMessage(chatID, message)
<<<<<<< HEAD
    core.setOutput("msg", "Mensaje enviado correctamente ")
=======
    core.setOutput("msg", "Mensaje enviado correctamente")
>>>>>>> 07695642ad312330931c0246b68dce603d41a3d6
} catch (e) {
    core.setFailed(e.message)
}