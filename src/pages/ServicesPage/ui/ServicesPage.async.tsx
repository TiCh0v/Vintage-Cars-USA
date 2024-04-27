import {lazy} from "react";

export const ServicesPageAsync = lazy(() => new Promise(resolve => {
    // @ts-ignore
    // для теста лоадера
    setTimeout(() => resolve(import('./ServicesPage')), 1500)
}));
