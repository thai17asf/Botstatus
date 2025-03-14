require("dotenv").config();
const { Client, GatewayIntentBits, ActivityType } = require("discord.js");

const TOKEN = process.env.TOKEN;
const CUSTOM_TEXT = "e-z.bio/thaixxp";

const client = new Client({
    intents: [GatewayIntentBits.Guilds]
});

client.once("ready", () => {
    console.log(`✅ Bot ${client.user.tag} đã online!`);

    function updateStatus() {
        client.user.setPresence({
            activities: [{
                name: CUSTOM_TEXT,
                type: ActivityType.Watching // Hoặc ActivityType.Playing tùy theo ý muốn
            }],
            status: "dnd" // Trạng thái "Không làm phiền" với chấm đỏ
        });
        console.log("✅ Đã cập nhật trạng thái thành 'Không làm phiền' với thông điệp 'Đang bận'!");
    }

    updateStatus();
    setInterval(updateStatus, 5000); // Cập nhật mỗi 30 giây
});

client.login(TOKEN);
