import type { Events } from '@sapphire/framework'
import { Listener } from '@sapphire/framework'
import type { Message } from 'discord.js'

export class UserEvent extends Listener<typeof Events.MentionPrefixOnly> {
  public async run (message: Message): Promise<void> {
    const prefix = this.container.client.options.defaultPrefix
    await message.channel.send(prefix !== null && prefix !== undefined ? `My prefix in this guild is: \`${prefix.toString()}\`` : 'Cannot find any Prefix for Message Commands.')
  }
}
