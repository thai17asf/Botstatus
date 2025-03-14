require("dotenv").config();
const { Client, GatewayIntentBits, ActivityType } = require("discord.js");

const TOKEN = process.env.TOKEN;

const client = new Client({
    intents: [GatewayIntentBits.Guilds]
});

client.once("ready", () => {
    console.log(`✅ Bot ${client.user.tag} đã online với trạng thái Streaming!`);

    function updateStatus() {
        client.user.setPresence({
            activities: [{
                name: "🔴 Live Stream!", // Tiêu đề hiển thị
                type: ActivityType.Streaming,
                url: "https://e-z.bio/thaixxp" // URL hợp lệ để tạo link
            }],
            status: "online"
        });
        console.log("✅ Đã cập nhật trạng thái: Streaming + Link nhấn!");
    }

    updateStatus();
    setInterval(updateStatus, 5000);
});

client.login(TOKEN);
