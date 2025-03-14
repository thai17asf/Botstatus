require("dotenv").config();
const { Client, GatewayIntentBits, ActivityType } = require("discord.js");

const TOKEN = process.env.TOKEN;

const client = new Client({
    intents: [GatewayIntentBits.Guilds]
});

client.once("ready", () => {
    console.log(`✅ Bot ${client.user.tag} đã online!`);

    // Hàm cập nhật status liên tục
    function updateStatus() {
        client.user.setPresence({
            activities: [{ name: "🎬 Đang xem phim", type: ActivityType.Watching }],
            status: "online"
        });
        console.log("✅ Đã cập nhật lại status!");
    }

    // Cập nhật status ngay khi bot online
    updateStatus();

    // Lặp lại mỗi 10 giây để ghi đè BotGhost
    setInterval(updateStatus, 10000);
});

client.login(TOKEN);
