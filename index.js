require("dotenv").config();
const { Client, GatewayIntentBits } = require("discord.js");

const TOKEN = process.env.TOKEN;

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.once("ready", () => {
    console.log(`✅ Bot ${client.user.tag} đã online!`);
});

client.login(TOKEN);
