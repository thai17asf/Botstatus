require('dotenv').config();
const { Client, GatewayIntentBits, ActivityType, PresenceUpdateStatus } = require('discord.js');

const TOKEN = process.env.TOKEN;
const CUSTOM_TEXT = ': e-z.bio/thaixxp 🌐';

const client = new Client({
    intents: [GatewayIntentBits.Guilds]
});

client.once('ready', () => {
    console.log(`✅ Bot ${client.user.tag} đã online!`);

    function updateStatus() {
        client.user.setPresence({
            activities: [{
                name: CUSTOM_TEXT,
                type: ActivityType.Watching // Hoặc ActivityType.Playing tùy theo ý muốn
            }],
            status: PresenceUpdateStatus.DoNotDisturb // Trạng thái "Không làm phiền" với chấm đỏ
        }).then(() => {
            console.log('✅ Đã cập nhật trạng thái!');
        }).catch(console.error);
    }

    updateStatus();
    setInterval(updateStatus, 3000); // Cập nhật mỗi 3 giây
});

client.login(TOKEN);
