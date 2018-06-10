"use strict";
/* ----------------------------------------------------------------------------------
*   Echo Dialog
*   Sample dialog to use as a starting spot for creating bots
*   Or for creating a demo bot
---------------------------------------------------------------------------------- */
Object.defineProperty(exports, "__esModule", { value: true });
const help = {
    id: 'help',
    name: 'help',
    waterfall: [
        (session, args, next) => {
            session.endDialog('I can assist with looking up ICD10 codes.');
        },
    ]
};
exports.default = help;
