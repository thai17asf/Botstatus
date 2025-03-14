require("dotenv").config();
const { Client, GatewayIntentBits } = require("discord.js");

const TOKEN = process.env.TOKEN;

const client = new Client({
    intents: [GatewayIntentBits.Guilds]
});

client.once("ready", () => {
    console.log(`✅ Bot ${client.user.tag} đã online!`);

    // Chờ 3 giây trước khi đổi status
    setTimeout(() => {
        client.user.setPresence({
            activities: [{ name: "🎮 Đang chạy Render!", type: 0 }], // Playing: "Đang chạy Render!"
            status: "online" // "online", "idle", "dnd", "invisible"
        });
        console.log("✅ Đã cập nhật status lần đầu!");
    }, 3000); // 3 giây

    // Cập nhật status mỗi 60 giây
    setInterval(() => {
        client.user.setPresence({
            activities: [{ name: "🔄 Cập nhật status!", type: 0 }], // Playing: "Cập nhật status!"
            status: "online"
        });
        console.log("✅ Đã cập nhật status!");
    }, 60000); // 60 giây
});

client.login(TOKEN);
