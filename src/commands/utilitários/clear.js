module.exports = {
  name: 'clear',
  author: 'Equipe Rocket_oof',

  run: async (client, message, args) => {
    let channel = message.channel
    let quantity = Math.floor(args[0])

    if (!message.member.permissions.has('MANAGE_MESSAGES')) {
      return message.reply(
        'Aparentemente você não tem permissões deletar mensagens 🥲'
      )
    }

    if (args.length === 0) {
      return message.reply(
        'Informe a quantidade de mensagens que deseja apagar 🤗'
      )
    }

    if (quantity > 99) {
      return message.reply('Não é possível apagar mais que 99 mensagens!')
    }

    await channel.bulkDelete(quantity + 1)

    const msg = await channel.send(
      quantity > 1 ?
      `${quantity} mensagens foram apagadas!` :
      `1 mensagem foi apagada!`
    )

    setTimeout(() => {
      msg.delete()
    }, 4000)
  }
}
