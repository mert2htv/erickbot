const Commando = require('discord.js-commando');
const { RichEmbed } = require('discord.js');
class FlipCommand extends Commando.Command {
    constructor(client){
        super(client, {
            name: "flip",
            group: "test",
            memberName: "flip",
            description: "Flips a table!"
        });
    }

    async run(message, args) {
        const embed = new RichEmbed()
        .setImage("https://i.imgur.com/0N6PmDW.gif")
        message.channel.send({embed});
        message.channel.sendMessage("(╯°□°）╯︵ ┻━┻");
    }
}

module.exports = FlipCommand