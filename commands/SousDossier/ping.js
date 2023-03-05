// Commande de test utilisant les slashs commands
module.exports = {
    runSlash: (client, interaction) => {
        return interaction.reply({ content: "Pong !", ephemeral: true });
    },
    name: "ping",
    description: "Commande de test !"
}

// Commande de test utilisant les prefix commands

module.exports = {
    run: (client, message) => {
        return message.reply({ content: "Pong !", ephemeral: true });
    },
    name: "ping",
    description: "Commande de test !"
}