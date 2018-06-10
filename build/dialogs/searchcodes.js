"use strict";
/* ----------------------------------------------------------------------------------
*   Search Codes Dialog
*   Sample dialog to use as a starting spot for creating bots
*   Or for creating a demo bot
---------------------------------------------------------------------------------- */
Object.defineProperty(exports, "__esModule", { value: true });
const searchCodes = {
    id: 'searchCodes',
    name: 'searchCodes',
    waterfall: [
        (session, args, next) => {
            var msg = session.message.text;
            session.endDialog(`Searching codes for ${msg}. Please wait.`);
        },
    ]
};
exports.default = searchCodes;
