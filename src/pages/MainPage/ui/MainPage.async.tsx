import {lazy} from "react";

export const MainPageAsync = lazy(() => new Promise(resolve => {
    // @ts-ignore
    // lдля теста лоадера
    setTimeout(() => resolve(import('./MainPage')), 1500)
}));
