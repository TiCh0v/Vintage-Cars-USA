import {lazy} from "react";

export const ContactsPageAync = lazy(() => new Promise(resolve => {
    // @ts-ignore
    // для теста лоадера
    setTimeout(() => resolve(import('./ContactsPage')), 1500)
}));
