import React from 'react';
import {useTranslation} from "react-i18next";
import 'shared/config/i18n/i18n';


import { ServicesWidget } from 'widgets/ServicesWidget';

const ServicesPage = () => {
    const {t} = useTranslation();
    

    return (
        <div>
            {/* {t('services')} */}
            <ServicesWidget />
        </div>
    );
};

export default ServicesPage;
