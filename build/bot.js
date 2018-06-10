"use strict";
/* ----------------------------------------------------------------
*   Bot created with botbuilder Yeoman Generator
*   https://github.com/microsoftdx/generator-botbuilder
*
*   All default dialogs are located in ./dialogs
*   You can add additional dialogs below as needed
---------------------------------------------------------------- */
Object.defineProperty(exports, "__esModule", { value: true });
const builder = require("botbuilder");
const greetings_1 = require("./dialogs/greetings");
const help_1 = require("./dialogs/help");
const getchapters_1 = require("./dialogs/getchapters");
const searchcodes_1 = require("./dialogs/searchcodes");
// Bot Storage: Here we register the state storage for your bot. 
// Default store: volatile in-memory store - Only for prototyping!
// We provide adapters for Azure Table, CosmosDb, SQL Azure, or you can implement your own!
// For samples and documentation, see: https://github.com/Microsoft/BotBuilder-Azure
var inMemoryStorage = new builder.MemoryBotStorage();
const bot = new builder.UniversalBot(new builder.ChatConnector({
    appId: process.env.MICROSOFT_APP_ID,
    appPassword: process.env.MICROSOFT_APP_PASSWORD
}), greetings_1.default.waterfall).set('storage', inMemoryStorage);
// The dialog stack is cleared and this dialog is invoked when the user enters 'help'.
bot.dialog(help_1.default.id, help_1.default.waterfall)
    .triggerAction({
    matches: /^help$/i,
});
// The dialog stack is cleared and this dialog is invoked when the user enters 'help'.
bot.dialog(getchapters_1.default.id, getchapters_1.default.waterfall)
    .triggerAction({
    matches: /^chapters|list chapters|get chapters$/i,
});
// The dialog stack is cleared and this dialog is invoked when the user enters 'help'.
bot.dialog(searchcodes_1.default.id, searchcodes_1.default.waterfall)
    .triggerAction({
    matches: searchcodes_1.default.pattern,
});
exports.default = bot;
