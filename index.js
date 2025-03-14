require("dotenv").config();
const { Client, GatewayIntentBits, ActivityType } = require("discord.js");

const TOKEN = process.env.TOKEN;

const client = new Client({
    intents: [GatewayIntentBits.Guilds]
});

client.once("ready", () => {
    console.log(`✅ Bot ${client.user.tag} đã online!`);

    // Cập nhật status một lần duy nhất
    client.user.setPresence({
        activities: [{ name: "🎬 Đang xem phim", type: ActivityType.Watching }],
        status: "online"
    });

    console.log("✅ Status đã được cập nhật: Đang xem phim");
});

client.login(TOKEN);
