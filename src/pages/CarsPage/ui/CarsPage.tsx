import React from 'react';
import {useTranslation} from "react-i18next";
import 'shared/config/i18n/i18n';


const CarsPage = () => {
    const {t} = useTranslation();
    

    return (
        <div>
            {t('cars')}
        </div>
    );
};

export default CarsPage;
