/* ----------------------------------------------------------------
*   Bot created with botbuilder Yeoman Generator
*   https://github.com/microsoftdx/generator-botbuilder
*
*   All default dialogs are located in ./dialogs
*   You can add additional dialogs below as needed
---------------------------------------------------------------- */

import * as builder from 'botbuilder';
import greetings from './dialogs/greetings';
import help from './dialogs/help'
import getChapters from './dialogs/getchapters';
import searchCodes from './dialogs/searchcodes';

// Bot Storage: Here we register the state storage for your bot. 
// Default store: volatile in-memory store - Only for prototyping!
// We provide adapters for Azure Table, CosmosDb, SQL Azure, or you can implement your own!
// For samples and documentation, see: https://github.com/Microsoft/BotBuilder-Azure
var inMemoryStorage = new builder.MemoryBotStorage();

const bot = new builder.UniversalBot(
    new builder.ChatConnector({
        appId: process.env.MICROSOFT_APP_ID,
        appPassword: process.env.MICROSOFT_APP_PASSWORD
    }),
    greetings.waterfall
).set('storage', inMemoryStorage);

// The dialog stack is cleared and this dialog is invoked when the user enters 'help'.
bot.dialog(help.id, help.waterfall)
.triggerAction({
    matches: /^help$/i,
});

// The dialog stack is cleared and this dialog is invoked when the user enters 'help'.
bot.dialog(getChapters.id, getChapters.waterfall)
.triggerAction({
    matches: /^chapters|list chapters|get chapters$/i,
});

// The dialog stack is cleared and this dialog is invoked when the user enters 'help'.
bot.dialog(searchCodes.id, searchCodes.waterfall)
.triggerAction({
    matches: /^codes|search codes$/i,
});



export default bot;
