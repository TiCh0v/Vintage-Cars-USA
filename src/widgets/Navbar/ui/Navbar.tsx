import React, {useState} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss';
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";

interface NavbarProps {
    className?: string,
}

export const Navbar = ({className}: NavbarProps) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={classNames(cls.logobox, {}, [])}>
                Cars Classic Autotrader 
            </div>
            <div 
            onClick={toggleMenu}
            className={classNames(cls.menu, {[cls.active]: isMenuOpen}, [])}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={classNames(cls.ff, {[cls.show]: isMenuOpen}, [])}  >
                <li >Cars</li>
                <li >About us</li>
                <li>Services</li>
                <li >Contacts</li>
            </ul>
        </div>
  )
}




// interface NavbarProps {
//     className?: string;
// }

// export const Navbar = ({className}: NavbarProps) => {
    

//     return (
//         <div className={classNames (cls.navbar, {}, [className])}>
            
//             <div className={cls.links}>
//                 <AppLink theme={AppLinkTheme.SECONDARY} to={'/'} className={cls.mainLink}>
                    
//                     Главная
                    
//                 </AppLink>
//                 <AppLink theme={AppLinkTheme.RED} to={'/about'}>
                    
//                     О сайте
                    
//                 </AppLink>
//             </div>
//         </div>
//     );
// };
