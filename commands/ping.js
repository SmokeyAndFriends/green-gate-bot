module.exports = {
	name: 'ping',
	description: 'Ping!',
	execute(message, args) {
        const embed = new MessageEmbed()
        .setTitle(`test`)
        .setColor(0x38294)
        .description(`boi`)
        message.channel.send(embed)
    },
}