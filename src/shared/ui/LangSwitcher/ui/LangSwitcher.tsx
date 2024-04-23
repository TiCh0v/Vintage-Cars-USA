import { useTranslation } from 'react-i18next';
import { changeLanguage } from 'i18next';

import 'shared/config/i18n/i18n';



// export const LangSwitcher = () => {
//     const { t, i18n } = useTranslation();

    // const toggle = () => {
    //     i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    // }

//     return (
//         <button onClick={toggle}>{t('Перевод')}</button>   
//     )
// }

import { classNames } from 'shared/lib/classNames/classNames'
import cls from './LangSwitcher.module.scss'
import { Button, ThemeButton } from 'shared/ui/Button/Button'

//

interface LangSwitcherProps {
    className?: string,
    
}

export const LangSwitcher = ({className}: LangSwitcherProps) => {

    const {t, i18n} = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    }

    return (
        <Button 
            onClick={toggle}
            className={classNames(cls.langSwitcher, {}, [className])}
            theme={ThemeButton.CLEAR}
        >
            {t('RU')}
        </Button>
    )
}