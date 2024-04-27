import {lazy} from "react";

export const CarsPageAsync = lazy(() => new Promise(resolve => {
    // @ts-ignore
    // для теста лоадера
    setTimeout(() => resolve(import('./CarsPage')), 1500)
}));
