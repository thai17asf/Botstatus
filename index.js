require("dotenv").config();
const { Client, GatewayIntentBits, ActivityType } = require("discord.js");

const TOKEN = process.env.TOKEN;

const client = new Client({
    intents: [GatewayIntentBits.Guilds]
});

client.once("ready", () => {
    console.log(`✅ Bot ${client.user.tag} đã online!`);

    // Đặt status thành "Đang xem phim" và giữ nguyên
    client.user.setPresence({
        activities: [{ name: "🎬 Đang xem phim", type: ActivityType.Watching }], // Watching = "Đang xem phim"
        status: "online"
    });

    console.log("✅ Status đã được cập nhật: Đang xem phim");
});

client.login(TOKEN);
