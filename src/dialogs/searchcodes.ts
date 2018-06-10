/* ----------------------------------------------------------------------------------
*   Search Codes Dialog
*   Sample dialog to use as a starting spot for creating bots
*   Or for creating a demo bot 
---------------------------------------------------------------------------------- */

import { IDialog } from './idialog';
import * as builder from 'botbuilder';

const searchCodes: IDialog = {
    id: 'searchCodes',
    name: 'searchCodes',
    waterfall: [
        (session, args, next) => {
            var msg = session.message.text;
            session.endDialog(`Searching codes for ${msg}. Please wait.`)
        },
    ]
}

export default searchCodes;