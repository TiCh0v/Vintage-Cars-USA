import React from 'react';
import {useTranslation} from "react-i18next";
import 'shared/config/i18n/i18n';


const ContactsPage = () => {
    const {t} = useTranslation();
    

    return (
        <div>
            {t('contacts')}
        </div>
    );
};

export default ContactsPage;
