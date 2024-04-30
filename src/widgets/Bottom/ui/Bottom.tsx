import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Bottom.module.scss';
import { IoLogoGithub, IoLogoLinkedin, IoMail } from 'react-icons/io5';
import { FaTelegram } from 'react-icons/fa';


interface BottomProps {
  className?: string;
}

export const Bottom = ({ className }: BottomProps) => {
  return (
    <div className={classNames(cls.bottom, {}, [className])}>
      <div className={cls.bottomContainer}>
        <div className={cls.line}></div>
        <p>Did you like this project? Let's work together!</p>
        <div className={cls.iconContainer}>
          <a href="https://t.me/o32f87" target="_blank" rel="noopener noreferrer">
            <FaTelegram className={cls.icon} />
          </a>
          <a href="https://github.com/TiCh0v" target="_blank" rel="noopener noreferrer">
            <IoLogoGithub className={cls.icon} />
          </a>
          <a href="https://linkedin.com/in/arsenii-pagaev" target="_blank" rel="noopener noreferrer">
            <IoLogoLinkedin className={cls.icon} />
          </a>
          <a href="mailto:3f4g7b@gmail.com">
            <IoMail className={cls.icon} />
          </a>
        </div>
      </div>
    </div>
  );
};
