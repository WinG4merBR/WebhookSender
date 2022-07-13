import { WebhookClient } from "discord.js";

function sendMessage(url: string, data: any) {
    const webhook = new WebhookClient({ url: url });
    return webhook.send({
        username: data.username,
        avatarURL: data.avatar,
        content: data.content,
        embeds: data.embeds,
        files: data.files
    })
}

module.exports = sendMessage;