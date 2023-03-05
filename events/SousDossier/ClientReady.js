module.exports = async client => {
    // Si vous souhaitez être en slash commands et déployer vos slashs que sur 1 serveur (par defaut)
    (await client.guilds.fetch("idDeVotreServeur").catch(() => 0)).commands.set(client.commands.map(command => command));

    // Si vous souhaitez être en slash commands et déployer vos slashs sur tout les serveurs où se trouve le bot (deploy global)
    // client.application.commands.set(client.commands.map(command => command));

    // Si vous ne souhaitez pas être en slash command, supprimez les lignes au dessus et laissez uniquement le console log

    console.log("✅ Le bot est prêt !");
}