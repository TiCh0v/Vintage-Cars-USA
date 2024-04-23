import React from 'react';
import {useTranslation} from "react-i18next";
import 'shared/config/i18n/i18n';


const AboutPage = () => {
    const {t} = useTranslation();
    

    return (
        <div>
            {t('О сайте')}
        </div>
    );
};

export default AboutPage;
