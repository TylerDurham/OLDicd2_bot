/* ----------------------------------------------------------------------------------
*   Echo Dialog
*   Sample dialog to use as a starting spot for creating bots
*   Or for creating a demo bot 
---------------------------------------------------------------------------------- */

import { IDialog } from './idialog';
import * as builder from 'botbuilder';

const help: IDialog = {
    id: 'help',
    name: 'help',
    waterfall: [
        (session, args, next) => {
            session.endDialog('I can assist with looking up ICD10 codes.')
        },
    ]
}

export default help;