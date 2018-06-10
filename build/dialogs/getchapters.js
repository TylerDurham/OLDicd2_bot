"use strict";
/* ----------------------------------------------------------------------------------
*   Get Chapters Dialog
*   Sample dialog to use as a starting spot for creating bots
*   Or for creating a demo bot
---------------------------------------------------------------------------------- */
Object.defineProperty(exports, "__esModule", { value: true });
const getChapters = {
    id: 'getChapters',
    name: 'getChapters',
    waterfall: [
        (session, args, next) => {
            session.endDialog('Getting a list of Chapters. Please wait.');
        },
    ]
};
exports.default = getChapters;
