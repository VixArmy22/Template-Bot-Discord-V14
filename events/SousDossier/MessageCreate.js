const config = require("../../config.json");

module.exports = (client, message) => {
    // code à enlevé si vous ne voulez pas de commands en prefix mais des slash commands.
    if (!message.author.bot || !message.content.startsWith("votrePrefix")) return;
    const command = client.commands.get(message.content.split(" ")[0].slice(config.prefix.length).toLowerCase());
    if (!command) return message.reply({ content: "Cette commande n'existe pas !", ephemeral: true});
    command.run(client, message);
}