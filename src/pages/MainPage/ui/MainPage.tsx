import React from 'react';
import {useTranslation} from "react-i18next";
import 'shared/config/i18n/i18n';
import { Gridbox } from 'widgets/Gridbox';
import { About } from 'widgets/About';
import { Flipper } from 'shared/ui/Flipper';
import { Promo } from 'widgets/Promo';
import { FAQ } from 'widgets/FAQ';
const MainPage = () => {
    const {t} = useTranslation();

    return (
        <div>
            {/* {t('Главная страница')} */}
            <Promo />
            <Gridbox />
            <About />
            <FAQ />
            
        </div>
    );
};

export default MainPage;
