import React from 'react';
import {useTranslation} from "react-i18next";
import 'shared/config/i18n/i18n';
import { WhoWe } from 'widgets/WhoWe';
import { About } from 'widgets/About';
import { FAQ } from 'widgets/FAQ';
const AboutPage = () => {
    const {t} = useTranslation();
    

    return (
        <div>
            {/* {t('О сайте')} */}
            <WhoWe />
            <About />
            <FAQ />     
        </div>
    );
};

export default AboutPage;
