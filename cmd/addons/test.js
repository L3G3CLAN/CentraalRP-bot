const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var botEmbed = new discord.MessageEmbed()
        .setTitle("Test Centraal Roleplay")
        .setDescription("Dit Is een Test")
        .setColor(process.env.COLLOR)
        .setThumbnail(process.env.LOGO)
//        .setImage(process.env.BANNER)
        .setTimestamp()
        .setFooter("Test Centraal Roleplay")
        
    return message.channel.send({ embeds: [botEmbed]}).then(msg => {
        message.delete()
        setTimeout(() => msg.delete(), 20000);
    });

}

module.exports.help = {
    name: "test",
    category: "add ons",
    discription: "Dit is een test."
}