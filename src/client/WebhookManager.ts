import { WebhookClient } from "discord.js";

export function sendMessage(url: string, data: any) {
    const webhook = new WebhookClient({ url: url });
    return webhook.send({
        username: data.username,
        avatarURL: data.avatar,
        content: data.content
    })
}