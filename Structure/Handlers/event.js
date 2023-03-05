const { readdirSync, readdir } = require("fs");
const { Events } = require("discord.js");

// Handler event avec sous dossiers (recommandé pour une meuilleur organisation)
module.exports.loadEvents = client => {
    readdirSync("./events").forEach(dir => {
        readdir(`./events/${dir}`, (err, files) => {
            if (err) return console.log(err);
            files.filter((f) => f.endsWith(".js")).forEach(files => {
                const event = require(`../../events/${dir}/${files}`);
                try {
                    client.on(Events[files.split(".")[0]], event.bind(null, client));
                } catch (err) {
                    return console.log(err);
                }
            })
        })
    })
}

// Handler event sans sous dossiers (choisir entre l'un des deux, le premier est choisi par défaut)

// module.exports.loadEvents = client => {
//     readdir(`./events/`, (err, files) => {
//         if (err) return console.log(err);
//         files.filter((f) => f.endsWith(".js")).forEach(files => {
//             const event = require(`../../events/${files}`);
//             try {
//                 client.on(Events[files.split(".")[0]], event.bind(null, client));
//             } catch (err) {
//                 return console.log(err);
//             }
//         })
//     })
// }