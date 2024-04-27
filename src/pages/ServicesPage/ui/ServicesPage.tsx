import React from 'react';
import {useTranslation} from "react-i18next";
import 'shared/config/i18n/i18n';


import { ServicesWidget } from 'widgets/ServicesWidget';

const ServicesPage = () => {
    const {t} = useTranslation();
    

    return (
        <div>
            {t('services')}
            <ServicesWidget />
            {/* <div className={classNames(cls.services, {}, [])}>
                <AppLink to={'/services'}>
                    <h1>
                        Services
                    </h1>
                </AppLink>
            </div>
            <div className={classNames(cls.cards, {}, [])}>

                <ServiceCard 
                    description='01/SHIPPING'
                    imagePath='https://raw.githubusercontent.com/TiCh0v/photos/main/track.png'
                />
                <ServiceCard 
                    description='02/WARRIANTY SERVICE'
                    imagePath='https://raw.githubusercontent.com/TiCh0v/photos/main/worker.png'
                />
                <ServiceCard 
                    description='03/FINANCING'
                    imagePath='https://raw.githubusercontent.com/TiCh0v/photos/main/money.png'
                />  

            </div> */}
        </div>
    );
};

export default ServicesPage;
