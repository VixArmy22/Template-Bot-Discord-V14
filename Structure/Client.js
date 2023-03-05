const { Client, Collection } = require("discord.js");
const dotenv = require("dotenv"); dotenv.config();
const { loadCommands } = require("../Structure/Handlers/command");
const { loadEvents } = require("../Structure/Handlers/event");

module.exports = class Bot extends Client {
    constructor() {
        super({ intents: [3276799] });
        
        this.commands = new Collection();
    }

    async start() {
        loadCommands(this); loadEvents(this);
        this.login(process.env.CLIENT_TOKEN);
    }
}