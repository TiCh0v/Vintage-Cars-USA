import {RouteProps} from "react-router-dom";
import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";

import { ContactsPage } from "pages/ContactsPage";
import { CarsPage } from "pages/CarsPage";
import { ServicesPage } from "pages/ServicesPage";


export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    CARS = 'cars',
    SERVICES = 'services',
    SERVICES_TYPE = 'services_types',
    CONTACTS = 'contacts'

}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.CARS]: '/cars',
    [AppRoutes.SERVICES]: '/services',
    [AppRoutes.SERVICES_TYPE]: '/services/:serviceType',
    [AppRoutes.CONTACTS]: '/contacts',

}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />
    },
    [AppRoutes.CARS]: {
        path: RoutePath.cars,
        element: <CarsPage />
    },
    [AppRoutes.SERVICES]: {
        path: RoutePath.services,
        element: <ServicesPage />
    },
    [AppRoutes.SERVICES_TYPE]: {
        path: RoutePath.services_types,
        element: <ServicesPage />
    },
    [AppRoutes.CONTACTS]: {
        path: RoutePath.contacts,
        element: <ContactsPage />
    },
}
