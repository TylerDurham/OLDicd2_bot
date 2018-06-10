"use strict";
/* ----------------------------------------------------------------------------------
*   Search Codes Dialog
*   Sample dialog to use as a starting spot for creating bots
*   Or for creating a demo bot
---------------------------------------------------------------------------------- */
Object.defineProperty(exports, "__esModule", { value: true });
const axios = require("axios");
const searchCodes = {
    id: 'searchCodes',
    name: 'searchCodes',
    waterfall: [
        (session, args, next) => {
            var msg = session.message.text;
            var matches = msg.match(/^(codes|search codes)\s?(?<query>.*)$/i);
            var keywords = matches[matches.length - 1];
            console.log(keywords);
            session.send(`Searching codes for ${keywords}. Please wait.`);
            var url = `https://icd2.azurewebsites.net/api/SearchCodes?code=1VlAetSWpJj99IsB7uCnoC4n2/aSMsa6wvMiDxkDHhurupNQ14Okmg==&k=${keywords}`;
            axios.default.get(url)
                .then((response) => {
                //console.log(response);
                //var c = new cards.AdaptiveCard();
                //console.log(c);
                //var msg = new builder.Message();
                //msg.addAttachment(c);
                var codes = JSON.parse(response.data);
                var list = [];
                codes.codes.forEach(code => {
                    list.push(`\n* ${code.code}: ${code.description}`);
                });
                var msg = 'Here are your results for ' + keywords + ': ' + list.join('\n');
                session.endDialog(msg);
            })
                .catch((err) => {
                console.log(err);
                session.endDialog(`An error has occured: ${err}.`);
            });
        },
    ],
    pattern: /^(codes|search codes)\s?(.*)$/i
};
exports.default = searchCodes;
