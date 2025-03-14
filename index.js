require("dotenv").config(); // Nạp biến môi trường từ file .env
const { Client, GatewayIntentBits } = require("discord.js");

// Lấy token từ biến môi trường
const TOKEN = process.env.TOKEN;

const client = new Client({
    intents: [GatewayIntentBits.Guilds]
});

client.once("ready", () => {
    console.log(`✅ Bot ${client.user.tag} đã online!`);

    // Thay đổi status của bot
    client.user.setPresence({
        activities: [{ name: "🎮 Đang chơi game!", type: "PLAYING" }],
        status: "online" // Các trạng thái: "online", "idle", "dnd", "invisible"
    });
});

// Đăng nhập bot
client.login(TOKEN);
