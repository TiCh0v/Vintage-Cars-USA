import { classNames } from 'shared/lib/classNames/classNames'
import cls from './About.module.scss'

//

interface AboutProps {
    className?: string,
}

export const About = ({className}: AboutProps) => {
  return (
    <>
        <div className={cls.about_header}>
            <p className={cls.about_title}> About us in numbers</p>
            <p className={cls.about_text}>From acquisition to restoration, we specialize in iconic automobiles, ensuring each drive is a celebration of timeless style. Elevate your journey with our passion for preserving automotive heritage.</p>
        </div>
        <div className={cls.circle_container}>
            <div className={cls.circle}>
                <p className={cls.main_number}>
                    32
                </p>
                <p className={cls.secondary_text}>
                    Retro car
                </p>
            </div>
            <div className={cls.circle}>
                <p className={cls.main_number}>
                    400
                </p>
                <p className={cls.secondary_text}>
                    Satisfied clients
                </p>
            </div>
            <div className={cls.circle}>
                <p className={cls.main_number}>
                    5
                </p>
                <p className={cls.secondary_text}>
                    Years in buisness
                </p>
            </div>
        </div>
        <div className={classNames(cls.black_car, {}, [className])}>
            <img src="https://raw.githubusercontent.com/TiCh0v/photos/main/retro-car.png" alt="car" />
        </div>

    </>
  )
}