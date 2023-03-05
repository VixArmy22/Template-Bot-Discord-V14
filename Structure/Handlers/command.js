const { readdirSync, readdir } = require("fs");

// Handler command avec sous dossiers (recommandé pour une meuilleur organisation)
module.exports.loadCommands = client => {
    readdirSync("./commands").forEach(dir => {
        readdir(`./commands/${dir}`, (err, files) => {
            if (err) return console.log(err);
            files.filter((f) => f.endsWith(".js")).forEach(files => {
                const command = require(`../../commands/${dir}/${files}`);
                try {
                    if (!command.name || !command.description) return console.log("Plusieurs propriétées sont manquantes dans les fichiers de commandes !");
                    client.commands.set(command.name, command);
                } catch (err) {
                    return console.log(err);
                }
            })
        })
    })
}

// Handler command sans sous dossiers (choisir entre l'un des deux, le premier est choisi par défaut)

// module.exports.loadCommands = client => {
//     readdir("./commands/", (err, files) => {
//         if (err) return console.log(err);
//         files.filter(f => f.endsWith(".js")).forEach(files => {
//             const command = require(`../../commands/${files}`);
//             try {
//                 if (!command.name || !command.description) return console.log("Plusieurs propriétées sont manquantes dans les fhciers de commandes !");
//                 client.commands.set(command.name, command);
//             } catch (err) {
//                 return console.log(err);
//             }
//         })
//     })
// }