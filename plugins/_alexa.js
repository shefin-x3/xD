const { bot, aliveMessage } = require('../lib/patch/')

bot(
	{
		pattern: 'alexa ?(.*)',
		fromMe: true,
		desc: 'bot alive message',
		type: 'misc',
	},
	async (message, match) => {
		const { msg, options, type } = await aliveMessage(match, message)
		return await message.sendMessage(msg, options, type)
	}
)
