import { Listener } from '@sapphire/framework'
import type { ChatInputCommandDeniedPayload, Events, UserError } from '@sapphire/framework'

export class UserEvent extends Listener<typeof Events.ChatInputCommandDenied> {
  public async run ({ context, message: content }: UserError, { interaction }: ChatInputCommandDeniedPayload): Promise<void> {
    // `context: { silent: true }` should make UserError silent:
    // Use cases for this are for example permissions error when running the `eval` command.
    if (Reflect.get(Object(context), 'silent') === true) return

    if (interaction.deferred || interaction.replied) {
      await interaction.editReply({
        content,
        allowedMentions: { users: [interaction.user.id], roles: [] }
      })
      return
    }

    await interaction.reply({
      content,
      allowedMentions: { users: [interaction.user.id], roles: [] },
      ephemeral: true
    })
  }
}
