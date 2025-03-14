require("dotenv").config();
const { Client, GatewayIntentBits, ActivityType } = require("discord.js");

const TOKEN = process.env.TOKEN;

const client = new Client({
    intents: [GatewayIntentBits.Guilds]
});

client.once("ready", () => {
    console.log(`✅ Bot ${client.user.tag} đã online!`);

    function updateStatus() {
        client.user.setPresence({
            activities: [{
                name: "Live Stream 🔴",
                type: ActivityType.Streaming,
                url: "https://www.e-z.bio/thaixxp" // Link stream hợp lệ
            }],
            status: "online"
        });
        console.log("✅ Đã cập nhật status: Đang stream!");
    }

    // Cập nhật ngay khi bot khởi động
    updateStatus();

    // Lặp lại mỗi 3 giây để ghi đè lại BotGhost
    setInterval(updateStatus, 3000);
});

client.login(TOKEN);
