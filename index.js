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
                name: "🔴 Đang phát trực tiếp!",
                type: ActivityType.Streaming,
                url: "https://www.e-z.bio/thaixxp"
            }],
            status: "dnd" // Chấm trạng thái đỏ (DND)
        });
        console.log("✅ Đã cập nhật trạng thái: Đang Stream + DND!");
    }

    updateStatus();
    setInterval(updateStatus, 3000);
});

client.login(TOKEN);
