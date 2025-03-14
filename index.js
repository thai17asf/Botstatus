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
                name: "e-z.bio/thaixxp", // Hiển thị link
                type: ActivityType.Watching // Có thể đổi thành Playing
            }],
            status: "dnd" // Chuyển trạng thái thành đỏ 🔴
        });
        console.log("✅ Đã cập nhật trạng thái!");
    }

    updateStatus();
    setInterval(updateStatus, 5000); // Cập nhật mỗi 10 giây
});

client.login(TOKEN);
