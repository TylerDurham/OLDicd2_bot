/* ----------------------------------------------------------------------------------
*   Get Chapters Dialog
*   Sample dialog to use as a starting spot for creating bots
*   Or for creating a demo bot 
---------------------------------------------------------------------------------- */

import { IDialog } from './idialog';
import * as builder from 'botbuilder';

const getChapters: IDialog = {
    id: 'getChapters',
    name: 'getChapters',
    waterfall: [
        (session, args, next) => {
            session.endDialog('Getting a list of Chapters. Please wait.')
        },
    ]
}

export default getChapters; 